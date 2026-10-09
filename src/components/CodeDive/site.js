import { smooth, pop, createDots } from "./kit"
import { TUNNEL_AXIS, TUNNEL_RADIUS } from "./tunnel"

export const SITE_BASE = [0.3, 1.5, -34]
const SITE_W = 24
const SITE_H = 18
const CELL = 0.2
const SMOKE = 360

const SITE_COLORS = {
  frame: "#762ce2",
  pink: "#ff4f9a",
  yellow: "#f5a623",
  green: "#19b37a",
  violet: "#8c6cff",
  lilac: "#cfc2ff",
}

const siteColor = (x, y) => {
  if (x === 0 || y === 0 || x === SITE_W - 1 || y === SITE_H - 1) return "frame"
  if (y === 1) return x === 2 ? "pink" : x === 4 ? "yellow" : x === 6 ? "green" : null
  if (y === 3) return "lilac"
  if (y >= 5 && y <= 9) return x >= 2 && x <= 13 ? "frame" : x >= 15 && x <= 21 ? "pink" : null
  if (y === 11 && x >= 2 && x <= 17) return "violet"
  if (y === 12 && x >= 2 && x <= 11) return "violet"
  if (y >= 14 && y <= 15) {
    if (x >= 2 && x <= 6) return "green"
    if (x >= 9 && x <= 14) return "yellow"
    if (x >= 17 && x <= 21) return "violet"
  }
  return null
}

export const buildSite = (THREE, kit, dotMaterial) => {
  const cells = []
  for (let y = 0; y < SITE_H; y++) {
    for (let x = 0; x < SITE_W; x++) {
      const key = siteColor(x, y)
      if (key) cells.push({ x: (x - (SITE_W - 1) / 2) * CELL, y: ((SITE_H - 1) / 2 - y) * CELL, key })
    }
  }

  const mesh = new THREE.InstancedMesh(
    new THREE.BoxGeometry(CELL * 0.9, CELL * 0.9, CELL * 0.9),
    new THREE.MeshStandardMaterial({ roughness: 0.55 }),
    cells.length
  )
  mesh.castShadow = true
  mesh.frustumCulled = false
  const color = new THREE.Color()
  const starts = cells.map((cell, i) => {
    mesh.setColorAt(i, color.set(SITE_COLORS[cell.key]))
    const angle = Math.random() * Math.PI * 2
    return {
      x: TUNNEL_AXIS[0] + Math.cos(angle) * TUNNEL_RADIUS - SITE_BASE[0],
      y: TUNNEL_AXIS[1] + Math.sin(angle) * TUNNEL_RADIUS - SITE_BASE[1],
      z: -22 - Math.random() * 8 - SITE_BASE[2],
      delay: Math.random() * 0.55,
      spin: (Math.random() - 0.5) * 8,
    }
  })

  const group = new THREE.Group()
  group.add(mesh)
  const plateW = SITE_W * CELL + 0.1
  const plateH = SITE_H * CELL + 0.1
  const plate = kit.box("white", [plateW, plateH, 0.05], [0, 0, -0.14], group)

  const scanMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0 })
  const scan = kit.box(scanMaterial, [plateW, 0.05, 0.25], [0, 0, 0.05], group)
  scan.castShadow = false

  const rocket = new THREE.Group()
  rocket.position.set(0, -plateH / 2, -0.1)
  group.add(rocket)
  kit.box("metal", [0.7, 0.35, 0.45], [0, -0.17, 0], rocket)
  kit.box("metal", [0.45, 0.2, 0.3], [0, -0.42, 0], rocket)
  ;[-1, 1].forEach((side) => {
    kit.box("metal", [0.32, 0.6, 0.32], [side * 1.55, -0.3, 0], rocket)
    kit.box("pink", [0.12, 0.4, 0.4], [side * 1.78, -0.4, 0], rocket)
  })

  const flameCount = 160
  const flamePositions = new Float32Array(flameCount * 3)
  const flameColors = new Float32Array(flameCount * 3)
  const flameSeeds = Array.from({ length: flameCount }, (_, i) => {
    color.set(["#ffc857", "#ff6fb5", "#ff9a3c"][i % 3])
    flameColors.set([color.r, color.g, color.b], i * 3)
    return { seed: Math.random(), nozzle: i % 3 === 0 ? 0 : i % 3 === 1 ? -1.55 : 1.55 }
  })
  const flameGeometry = new THREE.BufferGeometry()
  flameGeometry.setAttribute("position", new THREE.BufferAttribute(flamePositions, 3))
  flameGeometry.setAttribute("color", new THREE.BufferAttribute(flameColors, 3))
  const flameMaterial = new THREE.PointsMaterial({
    size: 0.16,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
  })
  const flame = new THREE.Points(flameGeometry, flameMaterial)
  flame.frustumCulled = false
  group.add(flame)

  const smoke = createDots(THREE, SMOKE, dotMaterial)
  const births = new Float32Array(SMOKE).fill(-99)
  let cursor = 0
  const nozzle = new THREE.Vector3()

  const dummy = new THREE.Object3D()
  const bottom = -plateH / 2

  const update = (assemble, thrust, boost, t, dark) => {
    cells.forEach((cell, i) => {
      const start = starts[i]
      const p = smooth((assemble - start.delay) / 0.45)
      const wave = Math.sin(t * 2 + cell.x * 2) * 0.03 * p
      dummy.position.set(
        start.x + (cell.x - start.x) * p,
        start.y + (cell.y - start.y) * p + Math.sin(Math.PI * p) * 1.2,
        start.z + (wave - start.z) * p
      )
      dummy.rotation.set((1 - p) * start.spin, (1 - p) * start.spin * 0.7, 0)
      dummy.scale.setScalar(0.4 + p * 0.6)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true

    const plateScale = Math.max(0.001, smooth((assemble - 0.6) / 0.4))
    plate.scale.set(plateW * plateScale, plateH * plateScale, 0.05)

    const built = smooth((assemble - 0.95) / 0.05)
    scan.visible = built > 0 && thrust < 0.2
    scan.position.y = plateH / 2 - ((t * 0.6) % 1) * plateH
    scanMaterial.opacity = 0.55 * built

    const rocketScale = pop((boost - 0.05) / 0.5)
    rocket.visible = rocketScale > 0.01
    rocket.scale.setScalar(Math.max(0.001, rocketScale))

    flameMaterial.opacity = thrust
    if (thrust > 0) {
      flameSeeds.forEach(({ seed, nozzle: nx }, i) => {
        const life = (t * 1.8 + seed) % 1
        const spread = 0.12 + life * 0.6
        flamePositions[i * 3] = nx + Math.sin(seed * 40) * spread
        flamePositions[i * 3 + 1] = bottom - 0.6 - life * 2.6
        flamePositions[i * 3 + 2] = -0.1 + Math.cos(seed * 30) * spread * 0.5
      })
      flameGeometry.attributes.position.needsUpdate = true
    }

    if (thrust > 0.05) {
      for (let k = 0; k < 3; k++) {
        nozzle.set((k - 1) * 1.55 + (Math.random() - 0.5) * 0.4, bottom - 1.2, -0.1)
        group.localToWorld(nozzle)
        smoke.positions.set([nozzle.x, nozzle.y, nozzle.z + (Math.random() - 0.5) * 0.4], cursor * 3)
        births[cursor] = t
        cursor = (cursor + 1) % SMOKE
      }
    }
    for (let i = 0; i < SMOKE; i++) {
      const age = (t - births[i]) / 2.4
      const alive = age >= 0 && age < 1
      smoke.alphas[i] = alive ? (1 - age) * 0.45 : 0
      smoke.sizes[i] = alive ? 0.25 + age * 1.1 : 0
      if (alive) smoke.positions[i * 3 + 1] -= 0.012
      smoke.paint(i, dark ? "#8d84a8" : "#cfc2ff")
    }
    smoke.commit()
  }

  return { group, smoke: smoke.points, update }
}
