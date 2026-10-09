export const THEME = {
  wall: ["#efeaff", "#26222f"],
  floor: ["#ddd3ff", "#1d1a27"],
  rug: ["#c9b8ff", "#2e2840"],
  wood: ["#b9845a", "#8a5a3c"],
  metal: ["#2b2f3a", "#4a4f5c"],
  hoodie: ["#762ce2", "#8c6cff"],
  skin: ["#f2b98d", "#e9b088"],
  hair: ["#2b1d14", "#2b1d14"],
  jeans: ["#2f3a8f", "#4a5bd4"],
  white: ["#ffffff", "#e8e4f5"],
  pink: ["#ff4f9a", "#ff6fae"],
  green: ["#19b37a", "#2fd08f"],
  yellow: ["#f5a623", "#ffc04d"],
  violet: ["#8c6cff", "#a48bff"],
  sky: ["#bfe3ff", "#22325a"],
  cat: ["#9b9389", "#8d867d"],
  catStripe: ["#5b544d", "#4f4943"],
  catRuff: ["#e6e1da", "#d6d1ca"],
}

export const CODE_COLORS = ["#ff6fb5", "#3ddc97", "#ffc857", "#a48bff", "#e7e0ff"]

export const clamp01 = (value) => Math.min(1, Math.max(0, value))

export const smooth = (value) => {
  const x = clamp01(value)
  return x * x * (3 - 2 * x)
}

export const pop = (value) => {
  const x = clamp01(value)
  return x === 0 ? 0 : 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2)
}

export const window01 = (t, start, end, fade = 0.25) =>
  smooth((t - start) / fade) * (1 - smooth((t - end + fade) / fade))

export const createKit = (THREE) => {
  const unit = new THREE.BoxGeometry(1, 1, 1)
  const materials = {}

  const material = (key) => {
    if (!materials[key]) {
      materials[key] = new THREE.MeshStandardMaterial({ color: THEME[key][0], roughness: 0.85 })
    }
    return materials[key]
  }

  const box = (key, [w, h, d], [x, y, z], parent) => {
    const mesh = new THREE.Mesh(unit, typeof key === "string" ? material(key) : key)
    mesh.scale.set(w, h, d)
    mesh.position.set(x, y, z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    parent.add(mesh)
    return mesh
  }

  const setTheme = (dark) => {
    Object.entries(materials).forEach(([key, m]) => m.color.set(THEME[key][dark ? 1 : 0]))
  }

  return { unit, material, box, setTheme }
}

const DOT_VERTEX = `
  attribute vec3 aColor;
  attribute float aAlpha;
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uTwinkle;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vColor = aColor;
    vAlpha = aAlpha * mix(1.0, 0.45 + 0.55 * sin(uTime * 2.0 + aSeed * 6.2831), uTwinkle);
    gl_PointSize = aSize * uScale / max(0.1, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`

const DOT_FRAGMENT = `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    if (r > 0.5) discard;
    gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.3, r));
  }
`

export const createDotMaterial = (THREE, twinkle = 0) =>
  new THREE.ShaderMaterial({
    vertexShader: DOT_VERTEX,
    fragmentShader: DOT_FRAGMENT,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uTwinkle: { value: twinkle },
      uScale: { value: 400 },
    },
  })

export const createDots = (THREE, count, material) => {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const alphas = new Float32Array(count)
  const sizes = new Float32Array(count)
  const seeds = new Float32Array(count).map(() => Math.random())
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1))
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1))
  const points = new THREE.Points(geometry, material)
  points.frustumCulled = false

  const color = new THREE.Color()
  const paint = (i, hex) => {
    color.set(hex)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  const commit = () => {
    geometry.attributes.position.needsUpdate = true
    geometry.attributes.aColor.needsUpdate = true
    geometry.attributes.aAlpha.needsUpdate = true
    geometry.attributes.aSize.needsUpdate = true
  }

  return { points, positions, alphas, sizes, seeds, paint, commit }
}

export const createHaloTexture = (THREE) => {
  const canvas = document.createElement("canvas")
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext("2d")
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, "rgba(255,255,255,1)")
  gradient.addColorStop(0.35, "rgba(255,255,255,0.45)")
  gradient.addColorStop(1, "rgba(255,255,255,0)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(canvas)
}

export const makeHalo = (THREE, texture, color, scale, opacity = 0.6) => {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, color, transparent: true, opacity, depthWrite: false })
  )
  sprite.scale.setScalar(scale)
  return sprite
}
