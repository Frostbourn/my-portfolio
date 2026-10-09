import { CODE_COLORS, smooth, clamp01, pop, window01, makeHalo } from "./kit"

export const STORY_LOOP = 12
const TYPE_PAUSE = 4.2
const THINK_END = 6.4
const TYPE_END = 8.8
const BUILD_END = 9.8
const DONE_END = 11.6

const CODE_LINES = [
  [0, [0.14, 0], [0.22, 3], [0.1, 2]],
  [1, [0.18, 3], [0.3, 1]],
  [1, [0.12, 3], [0.14, 2], [0.2, 0]],
  [2, [0.26, 1], [0.1, 3]],
  [2, [0.08, 0], [0.32, 3]],
  [1, [0.06, 2]],
  [1, [0.16, 3], [0.12, 0], [0.18, 1]],
  [2, [0.24, 1]],
  [1, [0.06, 2]],
  [0, [0.06, 0]],
]

const CHECK = [
  "........##",
  ".......##.",
  "......##..",
  "##...##...",
  ".##.##....",
  "..###.....",
  "...#......",
]

const POSTER = [
  "..p.....g.p..",
  ".p.....g...p.",
  "p.....g.....p",
  ".p...g.....p.",
  "..p.g.....p..",
]

const WINDOW_TOP = [
  [-3.1, 2.55, -0.45],
  [-3.1, 2.55, 1.05],
  [-3.1, 1.45, 1.05],
  [-3.1, 1.45, -0.45],
]
const SUN_DIR = [1, -1.1, 0.35]

const BEAM_VERTEX = `
  attribute float aFade;
  varying float vFade;
  void main() {
    vFade = aFade;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const BEAM_FRAGMENT = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    gl_FragColor = vec4(uColor, vFade * uOpacity);
  }
`

const typedFraction = (t) => {
  if (t < TYPE_PAUSE) return 0.55 * (t / TYPE_PAUSE)
  if (t < THINK_END) return 0.55
  if (t < TYPE_END) return 0.55 + 0.45 * ((t - THINK_END) / (TYPE_END - THINK_END))
  return 1
}

const onFloor = ([x, y, z]) => {
  const k = (y - 0.02) / -SUN_DIR[1]
  return [x + SUN_DIR[0] * k, 0.02, z + SUN_DIR[2] * k]
}

const buildBeam = (THREE) => {
  const top = WINDOW_TOP
  const bottom = top.map(onFloor)
  const positions = []
  const fades = []
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4
    ;[top[i], top[j], bottom[j], top[i], bottom[j], bottom[i]].forEach((p, k) => {
      positions.push(...p)
      fades.push(k === 0 || k === 1 || k === 3 ? 1 : 0.1)
    })
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute("aFade", new THREE.Float32BufferAttribute(fades, 1))
  const material = new THREE.ShaderMaterial({
    vertexShader: BEAM_VERTEX,
    fragmentShader: BEAM_FRAGMENT,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: { uColor: { value: new THREE.Color("#fff3c4") }, uOpacity: { value: 0.22 } },
  })
  return { mesh: new THREE.Mesh(geometry, material), material }
}

export const buildRoom = (THREE, kit, halo) => {
  const room = new THREE.Group()
  const { box } = kit

  box("floor", [6.4, 0.3, 5.4], [0, -0.15, 0], room)
  box("wall", [6.4, 3.4, 0.2], [0, 1.7, -2.8], room)
  box("wall", [0.2, 3.4, 5.4], [-3.3, 1.7, 0], room)

  const wallDots = []
  for (let x = -3; x <= 3.001; x += 0.2) for (let y = 0.3; y <= 3.201; y += 0.2) wallDots.push(x, y, -2.69)
  room.add(
    new THREE.Points(
      new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(wallDots, 3)),
      new THREE.PointsMaterial({ color: "#8c6cff", size: 0.035, transparent: true, opacity: 0.55, depthWrite: false })
    )
  )

  box("white", [0.06, 1.3, 1.7], [-3.18, 2, 0.3], room)
  box("sky", [0.04, 1.1, 1.5], [-3.15, 2, 0.3], room)
  box("white", [0.05, 1.1, 0.05], [-3.13, 2, 0.3], room)
  box("white", [0.05, 0.05, 1.5], [-3.13, 2, 0.3], room)

  const beam = buildBeam(THREE)
  room.add(beam.mesh)
  const dustCount = 90
  const dustSeeds = Array.from({ length: dustCount }, () => [Math.random(), Math.random(), Math.random() * 0.85 + 0.1])
  const dustPositions = new Float32Array(dustCount * 3)
  const dustMaterial = new THREE.PointsMaterial({
    color: "#fff6d8",
    size: 0.03,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  })
  const dust = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(dustPositions, 3)),
    dustMaterial
  )
  room.add(dust)

  box("wood", [1.8, 0.06, 0.32], [-1.5, 2.35, -2.54], room)
  ;["pink", "violet", "green", "yellow", "hoodie", "white", "pink", "green"].forEach((key, i) => {
    const h = 0.24 + ((i * 37) % 13) / 100
    box(key, [0.12, h, 0.24], [-2.25 + i * 0.17, 2.38 + h / 2, -2.54], room)
  })

  box("hoodie", [1, 0.7, 0.03], [1.5, 2.3, -2.69], room)
  box("white", [0.86, 0.56, 0.035], [1.5, 2.3, -2.685], room)
  POSTER.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === ".") continue
      box(row[x] === "p" ? "pink" : "green", [0.05, 0.05, 0.03], [1.5 + (x - 6) * 0.055, 2.41 - y * 0.055, -2.66], room)
    }
  })

  box("rug", [3, 0.02, 2.4], [0.3, 0.01, 0.5], room)

  box("wood", [2.6, 0.1, 1.1], [0.3, 0.95, -0.4], room)
  ;[-1.2, 1.2].forEach((dx) =>
    [-0.45, 0.45].forEach((dz) => box("wood", [0.08, 0.9, 0.08], [0.3 + dx, 0.45, -0.4 + dz], room))
  )

  box("metal", [1.5, 0.95, 0.08], [0.3, 1.65, -0.7], room)
  box("metal", [0.08, 0.3, 0.06], [0.3, 1.15, -0.75], room)
  box("metal", [0.45, 0.03, 0.25], [0.3, 1.015, -0.75], room)
  const screenMaterial = new THREE.MeshBasicMaterial({ color: "#140a33" })
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.38, 0.83), screenMaterial)
  screen.position.set(0.3, 1.65, -0.655)
  room.add(screen)

  box("white", [0.72, 0.035, 0.22], [0.3, 1.018, -0.12], room)
  box("white", [0.08, 0.03, 0.12], [0.9, 1.015, -0.12], room)

  const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.15, 14), kit.material("pink"))
  mug.position.set(1.25, 1.075, -0.25)
  mug.castShadow = true
  room.add(mug)

  box("white", [0.22, 0.22, 0.22], [-0.7, 1.11, -0.65], room)
  ;[-0.5, -0.2, 0.15, 0.45, 0].forEach((angle, i) => {
    const leaf = box("green", [0.07, 0.42, 0.07], [-0.7 + angle * 0.2, 1.4, -0.65 + (i % 2 ? 0.04 : -0.04)], room)
    leaf.rotation.z = angle
  })

  box("metal", [0.2, 0.03, 0.2], [1.3, 1.015, -0.8], room)
  const lampArm = box("metal", [0.03, 0.5, 0.03], [1.3, 1.25, -0.8], room)
  lampArm.rotation.z = 0.25
  const lampHead = box("pink", [0.22, 0.1, 0.16], [1.13, 1.5, -0.8], room)
  lampHead.rotation.z = 0.45
  const lampGlow = makeHalo(THREE, halo, "#ffb86b", 0.7, 0.5)
  lampGlow.position.set(1.08, 1.42, -0.78)
  room.add(lampGlow)
  const lampLight = new THREE.PointLight("#ffb86b", 1, 3)
  lampLight.position.set(1.05, 1.38, -0.7)
  room.add(lampLight)

  const cat = new THREE.Group()
  cat.position.set(2.2, 0.02, 0.45)
  cat.rotation.y = -0.6
  room.add(cat)
  box("violet", [0.86, 0.08, 0.66], [0, 0.04, 0], cat)
  box("pink", [0.86, 0.06, 0.08], [0, 0.11, 0.3], cat)
  box("pink", [0.86, 0.06, 0.08], [0, 0.11, -0.3], cat)
  box("pink", [0.08, 0.06, 0.52], [-0.4, 0.11, 0], cat)
  box("pink", [0.08, 0.06, 0.52], [0.4, 0.11, 0], cat)
  const catBody = new THREE.Group()
  catBody.position.set(-0.04, 0.1, -0.02)
  cat.add(catBody)
  box("cat", [0.48, 0.16, 0.34], [0, 0.08, 0], catBody)
  box("cat", [0.38, 0.06, 0.26], [0, 0.18, 0], catBody)
  ;[-0.12, 0, 0.12].forEach((x) => {
    box("catStripe", [0.05, 0.015, 0.22], [x, 0.212, 0], catBody)
    box("catStripe", [0.05, 0.08, 0.015], [x, 0.11, 0.171], catBody)
  })
  box("catRuff", [0.16, 0.1, 0.28], [0.36, 0.13, 0.04], cat)
  ;[-0.06, 0.06].forEach((z) => box("catRuff", [0.1, 0.05, 0.08], [0.34, 0.125, 0.06 + z], cat))
  const tail = new THREE.Group()
  tail.position.set(-0.24, 0.11, 0.14)
  cat.add(tail)
  box("cat", [0.12, 0.12, 0.13], [0, 0, 0.02], tail)
  box("cat", [0.4, 0.12, 0.12], [0.2, 0, 0.11], tail)
  ;[0.12, 0.28].forEach((x) => box("catStripe", [0.04, 0.125, 0.125], [x, 0, 0.11], tail))
  const tailTip = box("catStripe", [0.12, 0.11, 0.11], [0.45, 0, 0.11], tail)

  const catHead = new THREE.Group()
  catHead.position.set(0.33, 0.21, 0.04)
  cat.add(catHead)
  box("cat", [0.22, 0.18, 0.24], [0, 0, 0], catHead)
  ;[-1, 1].forEach((side) => box("cat", [0.12, 0.1, 0.04], [0.02, -0.03, side * 0.13], catHead))
  box("catRuff", [0.06, 0.07, 0.12], [0.11, -0.04, 0], catHead)
  ;[-0.04, 0, 0.04].forEach((z) => box("catStripe", [0.08, 0.012, 0.02], [0.05, 0.091, z], catHead))
  const ears = [-1, 1].map((side) => {
    const ear = new THREE.Group()
    ear.position.set(-0.01, 0.09, side * 0.08)
    catHead.add(ear)
    box("cat", [0.08, 0.1, 0.07], [0, 0.05, 0], ear)
    box("pink", [0.01, 0.06, 0.04], [0.041, 0.045, 0], ear)
    box("catStripe", [0.03, 0.05, 0.03], [0, 0.12, 0], ear)
    return ear
  })
  const catEyes = [-1, 1].map((side) => box("hair", [0.01, 0.015, 0.05], [0.112, 0.03, side * 0.06], catHead))

  const zzzMaterial = new THREE.MeshBasicMaterial({ color: "#a48bff", transparent: true, depthWrite: false })
  const zzz = [0, 1, 2].map((i) => {
    const z = new THREE.Group()
    const size = 0.05 + i * 0.015
    ;[size, -size].forEach((y) => {
      const bar = new THREE.Mesh(kit.unit, zzzMaterial)
      bar.scale.set(size * 2, size * 0.35, size * 0.35)
      bar.position.y = y
      z.add(bar)
    })
    const slash = new THREE.Mesh(kit.unit, zzzMaterial)
    slash.scale.set(size * 2.8, size * 0.35, size * 0.35)
    slash.rotation.z = Math.PI / 4
    z.add(slash)
    z.rotation.y = -0.6
    room.add(z)
    return z
  })
  const zzzOrigin = new THREE.Vector3(2.45, 0.45, 0.6)

  const dev = new THREE.Group()
  dev.position.set(0.3, 0, 0.85)
  room.add(dev)
  const at = (x, y, z) => [x - 0.3, y, z - 0.85]

  box("metal", [0.62, 0.1, 0.6], at(0.3, 0.55, 0.85), dev)
  box("violet", [0.62, 0.45, 0.08], at(0.3, 0.85, 1.17), dev)
  box("metal", [0.07, 0.4, 0.07], [0.3, 0.3, 0.85], room)
  box("metal", [0.7, 0.05, 0.08], [0.3, 0.08, 0.85], room)
  box("metal", [0.08, 0.05, 0.7], [0.3, 0.08, 0.85], room)

  ;[0.18, 0.42].forEach((x) => {
    box("jeans", [0.2, 0.18, 0.56], at(x, 0.69, 0.62), dev)
    box("jeans", [0.17, 0.55, 0.17], at(x, 0.38, 0.36), dev)
    box("white", [0.19, 0.1, 0.28], at(x, 0.06, 0.3), dev)
  })
  const torso = box("hoodie", [0.52, 0.62, 0.3], at(0.3, 1, 0.82), dev)
  torso.rotation.x = -0.1

  const head = new THREE.Group()
  head.position.set(...at(0.3, 1.52, 0.78))
  dev.add(head)
  box("skin", [0.36, 0.36, 0.34], [0, 0, 0], head)
  box("hair", [0.4, 0.12, 0.38], [0, 0.21, 0.02], head)
  box("hair", [0.4, 0.32, 0.1], [0, 0.04, 0.19], head)
  box("pink", [0.44, 0.05, 0.1], [0, 0.25, 0], head)
  box("pink", [0.08, 0.17, 0.15], [-0.22, 0.02, 0], head)
  box("pink", [0.08, 0.17, 0.15], [0.22, 0.02, 0], head)

  const arms = [-1, 1].map((side) => {
    const arm = new THREE.Group()
    arm.position.set(...at(0.3 + side * 0.3, 1.2, 0.8))
    arm.userData.side = side
    dev.add(arm)
    box("hoodie", [0.12, 0.12, 0.9], [0, 0, -0.45], arm)
    box("skin", [0.11, 0.08, 0.13], [0, 0, -0.93], arm)
    return arm
  })

  const bulb = new THREE.Group()
  bulb.position.set(0, 2.15, -0.07)
  dev.add(bulb)
  const bulbMaterial = new THREE.MeshBasicMaterial({ color: "#ffd84d" })
  box(bulbMaterial, [0.22, 0.22, 0.22], [0, 0, 0], bulb)
  box(bulbMaterial, [0.14, 0.06, 0.14], [0, 0.14, 0], bulb)
  box("metal", [0.11, 0.09, 0.11], [0, -0.15, 0], bulb)
  const rays = new THREE.Group()
  bulb.add(rays)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    box(bulbMaterial, [0.04, 0.04, 0.04], [Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, 0], rays)
  }
  bulb.add(makeHalo(THREE, halo, "#ffd84d", 1.1, 0.55))

  const code = new THREE.Group()
  code.position.set(0.3, 1.65, -0.648)
  room.add(code)
  const plane = new THREE.PlaneGeometry(1, 1)
  const tokenMaterials = CODE_COLORS.map((color) => new THREE.MeshBasicMaterial({ color }))
  const tokens = []
  CODE_LINES.forEach(([indent, ...parts], row) => {
    let x = -0.6 + indent * 0.08
    parts.forEach(([w, color]) => {
      const token = new THREE.Mesh(plane, tokenMaterials[color])
      token.scale.set(w, 0.035, 1)
      token.position.set(x + w / 2, 0.33 - row * 0.072, 0)
      code.add(token)
      tokens.push(token)
      x += w + 0.03
    })
  })
  const cursor = new THREE.Mesh(plane, tokenMaterials[4])
  cursor.scale.set(0.03, 0.05, 1)
  code.add(cursor)

  const barTrack = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ color: "#2a1d55" }))
  barTrack.scale.set(1.1, 0.08, 1)
  barTrack.position.set(0, 0.12, 0)
  code.add(barTrack)
  const barFill = new THREE.Mesh(plane, tokenMaterials[1])
  barFill.position.set(0, 0.12, 0.001)
  code.add(barFill)

  const check = new THREE.Group()
  code.add(check)
  CHECK.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] !== "#") continue
      const pixel = new THREE.Mesh(plane, tokenMaterials[1])
      pixel.scale.set(0.05, 0.05, 1)
      pixel.position.set((x - 4.5) * 0.055, (3 - y) * 0.055 + 0.04, 0.002)
      check.add(pixel)
    }
  })

  const confettiMaterials = CODE_COLORS.map((color) => new THREE.MeshBasicMaterial({ color }))
  const confetti = Array.from({ length: 36 }, (_, i) => {
    const piece = new THREE.Mesh(kit.unit, confettiMaterials[i % confettiMaterials.length])
    piece.scale.setScalar(0.05)
    piece.userData = {
      vx: (Math.random() - 0.5) * 2.4,
      vy: 2 + Math.random() * 1.4,
      vz: 0.3 + Math.random() * 1.2,
      spin: (Math.random() - 0.5) * 14,
    }
    room.add(piece)
    return piece
  })

  const deployMaterial = new THREE.MeshBasicMaterial({ color: "#ff4f9a", transparent: true })
  const deploy = new THREE.Group()
  box(deployMaterial, [0.2, 0.2, 0.2], [0, 0, 0], deploy)
  const deployHalo = makeHalo(THREE, halo, "#ff6fb5", 1.1, 0.7)
  deploy.add(deployHalo)
  room.add(deploy)

  const steamPositions = new Float32Array(30)
  const steam = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(steamPositions, 3)),
    new THREE.PointsMaterial({ color: "#cfc2ff", size: 0.045, transparent: true, opacity: 0.8, depthWrite: false })
  )
  room.add(steam)

  const glow = new THREE.PointLight("#8c6cff", 3, 3)
  glow.position.set(0.3, 1.65, -0.3)
  room.add(glow)

  const setTheme = (dark) => {
    beam.material.uniforms.uColor.value.set(dark ? "#9fb4ff" : "#fff3c4")
    beam.material.uniforms.uOpacity.value = dark ? 0.12 : 0.22
    dustMaterial.color.set(dark ? "#cfd8ff" : "#fff6d8")
    lampLight.intensity = dark ? 4 : 0.8
    lampGlow.material.opacity = dark ? 0.75 : 0.35
  }

  const update = (time) => {
    const t = time % STORY_LOOP
    const typed = typedFraction(t)
    const fast = t >= THINK_END && t < TYPE_END
    const typing = t < TYPE_PAUSE || fast
    const thinking = window01(t, 4.4, 6.3, 0.3)
    const cheer = window01(t, BUILD_END + 0.05, DONE_END - 0.2, 0.3)

    arms.forEach((arm, i) => {
      const side = arm.userData.side
      const tap = typing ? Math.sin(time * (fast ? 26 : 16) + i * Math.PI) * (fast ? 0.05 : 0.035) : 0
      const rest = -0.2 - thinking * 0.12 + tap
      arm.rotation.set(rest + (2.3 - rest) * cheer, side * 0.22 * (1 - cheer), -side * 0.35 * cheer)
    })
    head.rotation.set(
      Math.sin(time * 1.3) * 0.04 * (1 - thinking) + thinking * 0.3 + cheer * 0.25,
      Math.sin(time * 0.6) * 0.12 * (1 - thinking),
      thinking * 0.15
    )
    dev.rotation.y = Math.sin((t - BUILD_END) * 5) * 0.25 * cheer
    const awake = window01(t, BUILD_END + 0.15, DONE_END + 0.2, 0.35)
    const breath = Math.sin(time * 1.4)
    catBody.scale.set(1, 1 + breath * 0.05 * (1 - awake), 1 + breath * 0.025)
    catHead.position.y = 0.21 + breath * 0.008 + awake * 0.1
    catHead.rotation.set(awake * Math.sin(time * 2) * 0.15, 0, awake * 0.35 - 0.08 * (1 - awake))
    catEyes.forEach((eye) => eye.scale.set(0.01, 0.015 + awake * 0.035, 0.05))
    const twitch = Math.max(0, Math.sin(time * 0.9) - 0.94) * 8
    ears.forEach((ear, i) => {
      ear.rotation.x = (i ? -1 : 1) * (twitch * 0.5 + awake * 0.1)
    })
    tail.rotation.y = Math.sin(time * 0.7) * 0.12 + awake * Math.sin(time * 5) * 0.25
    tailTip.rotation.y = Math.sin(time * 1.3) * 0.3
    zzzMaterial.opacity = 1 - awake
    zzz.forEach((z, i) => {
      const life = (time * 0.35 + i / 3) % 1
      z.position.set(
        zzzOrigin.x + life * 0.35 + Math.sin(life * 6 + i) * 0.04,
        zzzOrigin.y + life * 0.7,
        zzzOrigin.z - life * 0.15
      )
      z.scale.setScalar(Math.sin(life * Math.PI) * (1 - awake))
    })

    const lean = fast ? smooth((t - THINK_END) / 0.4) * (1 - smooth((t - TYPE_END + 0.3) / 0.3)) : 0
    torso.rotation.x = -0.1 - lean * 0.08 + thinking * 0.06
    head.position.set(0, 1.52 + Math.sin(time * 1.6) * 0.012 - lean * 0.03, 0.78 - 0.85 - lean * 0.06 + thinking * 0.04)

    const bulbScale = pop((t - 4.5) / 0.35) * (1 - smooth((t - 6.05) / 0.3))
    bulb.visible = bulbScale > 0.01
    bulb.scale.setScalar(Math.max(0.001, bulbScale * 1.4))
    bulb.position.y = 2.35 + Math.sin(time * 3) * 0.03
    rays.rotation.z = time * 1.5
    rays.scale.setScalar(1 + Math.sin(time * 8) * 0.12)

    const visible = t >= TYPE_END ? 0 : Math.floor(typed * tokens.length)
    tokens.forEach((token, i) => {
      token.visible = i < visible
    })
    const last = tokens[Math.max(0, visible - 1)]
    cursor.position.set(visible ? last.position.x + last.scale.x / 2 + 0.03 : -0.58, visible ? last.position.y : 0.33, 0)
    cursor.visible = t < TYPE_END && Math.floor(time * 3) % 2 === 0

    const progress = clamp01((t - TYPE_END) / (BUILD_END - TYPE_END))
    const barOn = t >= TYPE_END && t < BUILD_END
    barTrack.visible = barOn
    barFill.visible = barOn
    barFill.scale.set(Math.max(0.001, progress * 1.1), 0.08, 1)
    barFill.position.x = -0.55 + (progress * 1.1) / 2

    const checkScale = pop((t - BUILD_END) / 0.4) * (1 - smooth((t - DONE_END + 0.3) / 0.3))
    check.visible = checkScale > 0.01
    check.scale.setScalar(Math.max(0.001, checkScale))

    const age = t - BUILD_END
    confetti.forEach((piece) => {
      const { vx, vy, vz, spin } = piece.userData
      piece.visible = age > 0 && age < 1.7
      if (!piece.visible) return
      piece.position.set(0.3 + vx * age, Math.max(0.05, 2.15 + vy * age - 4.9 * age * age), -0.65 + vz * age)
      piece.rotation.set(spin * age, spin * age * 0.6, 0)
    })

    const rise = (t - 10.2) / 1.4
    deploy.visible = rise > 0 && rise < 1
    deploy.position.set(0.3, 2.2 + rise * rise * 3.5, -0.7)
    deploy.rotation.set(time * 3, time * 2, 0)
    deployMaterial.opacity = 1 - rise
    deployHalo.material.opacity = 0.7 * (1 - rise)

    for (let i = 0; i < dustCount; i++) {
      const [u, v, k] = dustSeeds[i]
      const top = WINDOW_TOP
      const x = top[0][0] + SUN_DIR[0] * k * 2.2
      const y = top[2][1] + (top[0][1] - top[2][1]) * v + SUN_DIR[1] * k * 2.2
      const z = top[0][2] + (top[1][2] - top[0][2]) * u + SUN_DIR[2] * k * 2.2
      dustPositions[i * 3] = x + Math.sin(time * 0.3 + i) * 0.05
      dustPositions[i * 3 + 1] = Math.max(0.05, y + Math.sin(time * 0.4 + i * 1.7) * 0.06)
      dustPositions[i * 3 + 2] = z + Math.cos(time * 0.25 + i) * 0.05
    }
    dustMaterial.opacity = 0.5 + Math.sin(time * 1.3) * 0.2

    for (let i = 0; i < 10; i++) {
      const life = (time * 0.5 + i / 10) % 1
      steamPositions[i * 3] = 1.25 + Math.sin(life * 6 + i) * 0.04
      steamPositions[i * 3 + 1] = 1.18 + life * 0.45
      steamPositions[i * 3 + 2] = -0.25 + Math.cos(life * 5 + i) * 0.03
    }
    steam.geometry.attributes.position.needsUpdate = true
    dust.geometry.attributes.position.needsUpdate = true

    glow.intensity = 2.6 + Math.sin(time * 7) * 0.25 + cheer * 1.5
  }

  return { group: room, update, setTheme }
}
