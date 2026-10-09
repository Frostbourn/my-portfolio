import React, { useEffect, useRef } from "react"
import { createKit, createDotMaterial, createHaloTexture, smooth, window01 } from "./kit"
import { buildRoom } from "./room"
import { buildTunnel } from "./tunnel"
import { buildSite, SITE_BASE } from "./site"
import { buildSpace, orbitPoint } from "./space"

const SECTIONS = ["about", "services", "portfolio", "skills", "certifications", "contact"]

const KEYS = [
  { s: 0, pos: [6.4, 3.8, 8], target: [0.1, 1.25, -0.4], offset: 0.25, opacity: 1 },
  { s: 0.6, pos: [1.3, 2.45, 2.5], target: [0.3, 1.55, -0.7], offset: 0.24, opacity: 1 },
  { s: 1, pos: [0.3, 1.66, 0.2], target: [0.3, 1.65, -0.7], offset: 0.12, opacity: 1 },
  { s: 1.4, pos: [0.3, 1.6, -3], target: [0.3, 1.6, -12], offset: 0, opacity: 0.7 },
  { s: 2, pos: [0.7, 1.5, -14], target: [0.3, 1.5, -30], offset: 0, opacity: 0.4 },
  { s: 3, pos: [8, 3, -22], target: [0.3, 1.5, -34], offset: -0.32, opacity: 0.8 },
  { s: 4, pos: [9, 15, -22], target: [0.3, 20, -34], offset: 0.32, opacity: 0.8 },
  { s: 5, pos: [14, 32, -36], target: [0, 40, -62], offset: -0.3, opacity: 0.75 },
  { s: 6, pos: [22, 46, -34], target: [0, 40, -62], offset: 0.4, opacity: 0.6 },
]

const CodeDive = () => {
  const ref = useRef(null)

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}

    import("three").then((THREE) => {
      if (!disposed) cleanup = mount(THREE, ref.current)
    })

    return () => {
      disposed = true
      cleanup()
    }
  }, [])

  return <canvas ref={ref} className="story-scene" aria-hidden="true" />
}

const storyTime = () => {
  const probe = window.scrollY + window.innerHeight * 0.5
  const anchors = [window.innerHeight * 0.5]
  SECTIONS.forEach((id) => {
    const el = document.getElementById(id)
    const previous = anchors[anchors.length - 1]
    anchors.push(el ? Math.max(previous + 1, el.getBoundingClientRect().top + window.scrollY) : previous + 1)
  })
  for (let i = anchors.length - 2; i >= 0; i--) {
    if (probe >= anchors[i]) return Math.min(i + (probe - anchors[i]) / (anchors[i + 1] - anchors[i]), anchors.length - 1)
  }
  return 0
}

const mount = (THREE, canvas) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
  renderer.setClearColor(0x000000, 0)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog("#ffffff", 14, 62)
  const camera = new THREE.PerspectiveCamera(45, 1, 0.05, 160)
  scene.add(camera)

  scene.add(new THREE.HemisphereLight("#ffffff", "#f3efff", 1.8))
  const sun = new THREE.DirectionalLight("#ffffff", 1.4)
  sun.position.set(4, 7, 5)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  Object.assign(sun.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 20 })
  sun.shadow.bias = -0.0005
  scene.add(sun)

  const halo = createHaloTexture(THREE)
  const dotMaterial = createDotMaterial(THREE)
  const starMaterial = createDotMaterial(THREE, 1)
  const kit = createKit(THREE)
  const room = buildRoom(THREE, kit, halo)
  const tunnel = buildTunnel(THREE)
  const site = buildSite(THREE, kit, dotMaterial)
  const space = buildSpace(THREE, halo, starMaterial, dotMaterial)
  site.group.position.set(...SITE_BASE)
  scene.add(room.group, tunnel.group, site.group, site.smoke, space.stars, space.planet, space.trail, space.beams)

  const flashMaterial = new THREE.MeshBasicMaterial({
    color: "#e7e0ff",
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
  })
  const flash = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), flashMaterial)
  flash.position.z = -0.2
  flash.scale.set(0.5, 0.5, 1)
  flash.renderOrder = 999
  camera.add(flash)

  const posCurve = new THREE.CatmullRomCurve3(KEYS.map((k) => new THREE.Vector3(...k.pos)), false, "centripetal")
  const targetCurve = new THREE.CatmullRomCurve3(KEYS.map((k) => new THREE.Vector3(...k.target)), false, "centripetal")
  const target = new THREE.Vector3()
  const launchPos = new THREE.Vector3()
  const orbitPos = new THREE.Vector3()

  let width = 1
  let height = 1
  const resize = () => {
    width = canvas.clientWidth || window.innerWidth
    height = canvas.clientHeight || window.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    const scale = (height * renderer.getPixelRatio()) / 2 / Math.tan((camera.fov * Math.PI) / 360)
    dotMaterial.uniforms.uScale.value = scale
    starMaterial.uniforms.uScale.value = scale
  }
  resize()
  window.addEventListener("resize", resize)

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
  const onMouse = (event) => {
    mouse.tx = (event.clientX / width) * 2 - 1
    mouse.ty = (event.clientY / height) * 2 - 1
  }
  window.addEventListener("mousemove", onMouse)

  let theme = null
  let story = storyTime()
  let frame = 0
  const started = performance.now()

  const draw = () => {
    const t = reduce ? 9.5 : (performance.now() - started) / 1000
    const dark = document.body.classList.contains("dark")
    if (dark !== theme) {
      theme = dark
      kit.setTheme(dark)
      room.setTheme(dark)
      space.setTheme(dark)
      scene.fog.color.set(dark ? "#121212" : "#ffffff")
    }

    const goal = storyTime()
    story = reduce ? goal : story + (goal - story) * 0.08
    const s = story

    let k = 0
    while (k < KEYS.length - 2 && s > KEYS[k + 1].s) k++
    const local = Math.min(1, Math.max(0, (s - KEYS[k].s) / (KEYS[k + 1].s - KEYS[k].s)))
    const u = (k + local) / (KEYS.length - 1)
    const eased = smooth(local)
    const mobile = width <= 768

    const thrust = Math.max(0, Math.sin(Math.PI * smooth((s - 3.1) / 1.3)))
    posCurve.getPoint(u, camera.position)
    targetCurve.getPoint(u, target)
    mouse.x += (mouse.tx - mouse.x) * 0.05
    mouse.y += (mouse.ty - mouse.y) * 0.05
    const sway = s < 0.9 ? 1 - s / 0.9 : 0
    camera.position.x += mouse.x * 0.35 * sway + (reduce ? 0 : Math.sin(t * 0.25) * 0.15 * sway)
    camera.position.y -= mouse.y * 0.2 * sway
    if (mobile && s < 1) {
      camera.position.sub(target).multiplyScalar(1 + 0.95 * (1 - s)).add(target)
    }
    if (!reduce && thrust > 0.05) {
      camera.position.x += (Math.random() - 0.5) * thrust * 0.08
      camera.position.y += (Math.random() - 0.5) * thrust * 0.08
    }
    camera.lookAt(target)
    const tunnelRoll = window01(s, 1.2, 2.7, 0.35)
    if (!reduce) camera.rotateZ(Math.sin(t * 0.6) * 0.12 * tunnelRoll)

    const offset = KEYS[k].offset + (KEYS[k + 1].offset - KEYS[k].offset) * eased
    const offsetY = mobile && s < 1 ? 0.3 * (1 - s) : 0
    camera.setViewOffset(width, height, mobile ? 0 : offset * width, offsetY * height, width, height)
    const opacity = KEYS[k].opacity + (KEYS[k + 1].opacity - KEYS[k].opacity) * eased
    canvas.style.opacity = String(mobile && s > 1 ? opacity * 0.6 : opacity)

    const dive = smooth((s - 0.7) / 0.4)
    flashMaterial.opacity = Math.max(0, 1 - Math.abs(s - 1.12) / 0.1) * 0.9

    room.group.visible = s < 1.3
    if (room.group.visible) room.update(t, dive)

    tunnel.group.visible = s > 0.7 && s < 2.8
    if (tunnel.group.visible) tunnel.update(t, 1 - smooth((s - 2.1) / 0.6))

    const orbit = smooth((s - 4) / 1.3)
    const orbitAngle = t * 0.35
    site.group.visible = s > 1.6
    if (site.group.visible || thrust > 0) {
      const launch = smooth((s - 3.15) / 0.85)
      orbitPoint(orbitAngle, orbitPos)
      launchPos.set(SITE_BASE[0], SITE_BASE[1] + launch * 18.5, SITE_BASE[2])
      site.group.position.copy(launchPos).lerp(orbitPos, orbit)
      site.group.scale.setScalar(1 - 0.7 * orbit)
      site.group.rotation.y = -orbit * orbitAngle
      site.update(smooth((s - 2) / 0.95), thrust, Math.min(1, Math.max(0, (s - 2.9) / 1)), t, dark)
    }

    space.planet.visible = s > 3.6
    space.trail.visible = s > 4
    space.beams.visible = s > 4.5
    if (space.planet.visible) space.update(t, orbitAngle, orbit * smooth((s - 4.5) / 0.6), site.group.position)

    const deep = smooth((s - 3.5) / 1)
    scene.fog.near = 14 + deep * 20
    scene.fog.far = 62 + deep * 50

    dotMaterial.uniforms.uTime.value = t
    starMaterial.uniforms.uTime.value = t

    renderer.render(scene, camera)
    frame = requestAnimationFrame(draw)
  }
  frame = requestAnimationFrame(draw)

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener("resize", resize)
    window.removeEventListener("mousemove", onMouse)
    scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose()
      if (object.material) object.material.dispose()
    })
    halo.dispose()
    renderer.dispose()
  }
}

export default CodeDive
