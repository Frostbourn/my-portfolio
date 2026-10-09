import { createDots, makeHalo } from "./kit"

export const PLANET = [0, 40, -62]
const PLANET_SCALE = 0.7
const STARS = 2600
const TRAIL = 40
const BEAM_POINTS = 24
const BEAM_DIRS = [
  [0.6, 0.5, 0.6],
  [-0.7, 0.2, 0.7],
  [0.2, -0.6, 0.8],
]

export const orbitPoint = (angle, out) =>
  out.set(PLANET[0] + Math.cos(angle) * 11, PLANET[1] + 1 + Math.sin(angle) * 1.5, PLANET[2] + Math.sin(angle) * 11)

const sphereCloud = (THREE, count, radius, colorA, colorB) => {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const a = new THREE.Color(colorA)
  const b = new THREE.Color(colorB)
  const color = new THREE.Color()
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = i * 2.399963
    positions.set([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius], i * 3)
    color.copy(a).lerp(b, (y + 1) / 2)
    colors.set([color.r, color.g, color.b], i * 3)
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.13, vertexColors: true, transparent: true, depthWrite: false })
  )
}

export const buildSpace = (THREE, halo, twinkleMaterial, dotMaterial) => {
  const stars = createDots(THREE, STARS, twinkleMaterial)
  for (let i = 0; i < STARS; i++) {
    stars.positions.set(
      [(Math.random() - 0.5) * 100, -8 + Math.random() * 85, -6 - Math.random() * 100],
      i * 3
    )
    stars.sizes[i] = 0.06 + Math.random() * 0.14
    stars.alphas[i] = 0.5 + Math.random() * 0.5
  }

  const planet = new THREE.Group()
  planet.position.set(...PLANET)
  planet.scale.setScalar(PLANET_SCALE)
  const globe = sphereCloud(THREE, 3200, 6, "#762ce2", "#ff4f9a")
  planet.add(globe)
  const planetHalo = makeHalo(THREE, halo, "#8c6cff", 24, 0.22)
  planet.add(planetHalo)

  const ringPositions = new Float32Array(900 * 3)
  for (let i = 0; i < 900; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 8.5 + Math.random() * 2
    ringPositions.set([Math.cos(angle) * radius, (Math.random() - 0.5) * 0.15, Math.sin(angle) * radius], i * 3)
  }
  const ring = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(ringPositions, 3)),
    new THREE.PointsMaterial({ color: "#f5a623", size: 0.12, transparent: true, depthWrite: false })
  )
  const ringPivot = new THREE.Group()
  ringPivot.rotation.set(0.35, 0, 0.2)
  ringPivot.add(ring)
  planet.add(ringPivot)

  const moon = sphereCloud(THREE, 500, 1.2, "#cfc2ff", "#ffffff")
  planet.add(moon)

  const trail = createDots(THREE, TRAIL, dotMaterial)
  const beams = createDots(THREE, BEAM_DIRS.length * BEAM_POINTS, dotMaterial)
  for (let i = 0; i < TRAIL; i++) trail.paint(i, i % 2 ? "#ff6fb5" : "#ffc857")
  for (let i = 0; i < BEAM_DIRS.length * BEAM_POINTS; i++) beams.paint(i, "#ffc857")

  const point = new THREE.Vector3()
  const surface = new THREE.Vector3()

  const setTheme = (dark) => {
    for (let i = 0; i < STARS; i++) stars.paint(i, dark ? (i % 7 ? "#cfc2ff" : "#ffffff") : i % 7 ? "#8c6cff" : "#ff4f9a")
    stars.commit()
    planetHalo.material.opacity = dark ? 0.3 : 0.18
  }

  const update = (t, orbitAngle, orbit, satellite) => {
    globe.rotation.y = t * 0.08
    ring.rotation.y = t * 0.05
    moon.position.set(Math.cos(t * 0.2) * 19, 3 + Math.sin(t * 0.2) * 2, Math.sin(t * 0.2) * 19)
    moon.rotation.y = t * 0.3

    for (let i = 0; i < TRAIL; i++) {
      orbitPoint(orbitAngle - (i + 1) * 0.035, point)
      trail.positions.set([point.x, point.y, point.z], i * 3)
      trail.alphas[i] = orbit * (1 - i / TRAIL) * 0.9
      trail.sizes[i] = 0.2 * (1 - i / TRAIL) + 0.04
    }
    trail.commit()

    BEAM_DIRS.forEach((dir, b) => {
      surface.set(...dir).normalize().multiplyScalar(6 * PLANET_SCALE).add(planet.position)
      for (let i = 0; i < BEAM_POINTS; i++) {
        const k = i / (BEAM_POINTS - 1)
        const index = b * BEAM_POINTS + i
        point.copy(surface).lerp(satellite, k)
        beams.positions.set([point.x, point.y, point.z], index * 3)
        const pulse = (k - t * 0.7 - b * 0.33) % 1
        const head = (pulse + 1) % 1
        beams.alphas[index] = orbit * (head < 0.12 ? 1 : 0.18)
        beams.sizes[index] = head < 0.12 ? 0.32 : 0.14
      }
    })
    beams.commit()
  }

  return { stars: stars.points, planet, trail: trail.points, beams: beams.points, setTheme, update }
}
