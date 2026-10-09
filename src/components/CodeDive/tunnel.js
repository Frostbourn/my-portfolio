import { CODE_COLORS } from "./kit"

export const TUNNEL_AXIS = [0.3, 1.6]
export const TUNNEL_RADIUS = 2.6
const NEAR = -2.5
const LENGTH = 30
const RINGS = 10
const RING_POINTS = 72

export const buildTunnel = (THREE) => {
  const count = 900
  const material = new THREE.MeshBasicMaterial({ transparent: true })
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), material, count)
  mesh.frustumCulled = false
  const color = new THREE.Color()
  const tokens = Array.from({ length: count }, (_, i) => {
    mesh.setColorAt(i, color.set(CODE_COLORS[i % CODE_COLORS.length]))
    return {
      angle: Math.random() * Math.PI * 2,
      radius: TUNNEL_RADIUS + (Math.random() - 0.5) * 0.5,
      thickness: 0.045 + Math.random() * 0.04,
      length: 0.3 + Math.random() * 1.2,
      offset: Math.random() * LENGTH,
      speed: 2.5 + Math.random() * 3,
    }
  })

  const ringPositions = []
  for (let r = 0; r < RINGS; r++) {
    for (let i = 0; i < RING_POINTS; i++) {
      const angle = (i / RING_POINTS) * Math.PI * 2
      ringPositions.push(Math.cos(angle) * 2.95, Math.sin(angle) * 2.95, -4 - r * 3)
    }
  }
  const ringMaterial = new THREE.PointsMaterial({
    color: "#8c6cff",
    size: 0.08,
    transparent: true,
    depthWrite: false,
  })
  const rings = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(ringPositions, 3)),
    ringMaterial
  )

  const group = new THREE.Group()
  group.position.set(TUNNEL_AXIS[0], TUNNEL_AXIS[1], 0)
  group.add(mesh, rings)

  const dummy = new THREE.Object3D()
  const update = (t, opacity) => {
    group.rotation.z = t * 0.12
    tokens.forEach((token, i) => {
      const travelled = (((token.offset - t * token.speed) % LENGTH) + LENGTH) % LENGTH
      dummy.position.set(Math.cos(token.angle) * token.radius, Math.sin(token.angle) * token.radius, NEAR - travelled)
      dummy.rotation.set(0, 0, token.angle)
      dummy.scale.set(token.thickness, token.thickness, token.length)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true
    material.opacity = opacity
    ringMaterial.opacity = opacity * (0.55 + 0.45 * Math.sin(t * 3))
  }

  return { group, update }
}
