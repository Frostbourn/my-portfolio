import React, { useEffect, useRef } from "react"
import { createKit, createDots, createDotMaterial, createHaloTexture } from "./kit"
import { buildRoom } from "./room"

const CAMERA = { pos: [6.4, 3.8, 8], target: [0.1, 1.25, -0.4] }
const DOTS = 1600
const SPAN = 60

const CodeDive = () => {
  const ref = useRef(null)

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}

    import("three").then((THREE) => {
      if (disposed) return
      try {
        cleanup = mount(THREE, ref.current)
      } catch (error) {
        console.error(error)
      }
    })

    return () => {
      disposed = true
      cleanup()
    }
  }, [])

  return <canvas ref={ref} className="story-scene" aria-hidden="true" />
}

const mount = (THREE, canvas) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
  renderer.setClearColor(0x000000, 0)
  renderer.autoClear = false
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.05, 60)
  const target = new THREE.Vector3(...CAMERA.target)

  scene.add(new THREE.HemisphereLight("#ffffff", "#f3efff", 1.8))
  const sun = new THREE.DirectionalLight("#ffffff", 1.4)
  sun.position.set(4, 7, 5)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  Object.assign(sun.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 20 })
  sun.shadow.bias = -0.0005
  scene.add(sun)

  const halo = createHaloTexture(THREE)
  const kit = createKit(THREE)
  const room = buildRoom(THREE, kit, halo)
  scene.add(room.group)

  const dotScene = new THREE.Scene()
  const dotCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
  const dotMaterial = createDotMaterial(THREE, 1)
  const dots = createDots(THREE, DOTS, dotMaterial)
  const base = new Float32Array(DOTS * 3)
  for (let i = 0; i < DOTS; i++) {
    const z = -8 - Math.random() * 50
    base.set([(Math.random() - 0.5) * -z * 2.4, (Math.random() - 0.5) * SPAN, z], i * 3)
    dots.sizes[i] = 0.06 + Math.random() * 0.12
    dots.alphas[i] = 0.35 + Math.random() * 0.5
  }
  dotScene.add(dots.points)

  let width = 1
  let height = 1
  const resize = () => {
    width = canvas.clientWidth || window.innerWidth
    height = canvas.clientHeight || window.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    dotCamera.aspect = width / height
    dotCamera.updateProjectionMatrix()
    dotMaterial.uniforms.uScale.value =
      (height * renderer.getPixelRatio()) / 2 / Math.tan((dotCamera.fov * Math.PI) / 360)
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
  let scroll = window.scrollY
  let frame = 0
  let introSettled = false
  const started = performance.now()

  const fadeRoom = (amount) => {
    room.group.traverse((object) => {
      if (!object.material) return
      const materials = Array.isArray(object.material) ? object.material : [object.material]
      materials.forEach((material) => {
        if (material.userData.baseOpacity == null) {
          material.userData.baseOpacity = material.opacity
          material.userData.baseTransparent = material.transparent
          if (material.uniforms && material.uniforms.uOpacity) {
            material.userData.baseUOpacity = material.uniforms.uOpacity.value
          }
        }
        if (amount >= 1) {
          material.opacity = material.userData.baseOpacity
          material.transparent = material.userData.baseTransparent
          if (material.userData.baseUOpacity != null) material.uniforms.uOpacity.value = material.userData.baseUOpacity
          return
        }
        material.transparent = true
        material.opacity = material.userData.baseOpacity * amount
        if (material.userData.baseUOpacity != null) material.uniforms.uOpacity.value = material.userData.baseUOpacity * amount
      })
    })
  }

  const draw = () => {
    const t = reduce ? 9.5 : (performance.now() - started) / 1000
    const dark = document.body.classList.contains("dark")
    if (dark !== theme) {
      theme = dark
      kit.setTheme(dark)
      room.setTheme(dark)
      for (let i = 0; i < DOTS; i++) {
        dots.paint(i, dark ? (i % 6 ? "#cfc2ff" : "#ffffff") : i % 6 ? "#8c6cff" : "#ff4f9a")
      }
    }

    scroll = reduce ? window.scrollY : scroll + (window.scrollY - scroll) * 0.12
    mouse.x += (mouse.tx - mouse.x) * 0.05
    mouse.y += (mouse.ty - mouse.y) * 0.05
    const slot = document.querySelector(".hero-room")
    const slotRect = slot ? slot.getBoundingClientRect() : null
    const mobile = slotRect && slotRect.height > 0

    for (let i = 0; i < DOTS; i++) {
      const z = base[i * 3 + 2]
      const depth = 30 / -z
      const y = base[i * 3 + 1] + (scroll * 0.004 + t * 0.05) * depth
      dots.positions[i * 3] = base[i * 3] + Math.sin(t * 0.2 + i) * 0.15 - mouse.x * depth * 0.4
      dots.positions[i * 3 + 1] = (((y + SPAN / 2) % SPAN) + SPAN) % SPAN - SPAN / 2 + mouse.y * depth * 0.3
      dots.positions[i * 3 + 2] = z
    }
    dots.commit()
    dotMaterial.uniforms.uTime.value = t

    renderer.clear()
    renderer.render(dotScene, dotCamera)

    const pageY = window.scrollY
    if (pageY < height * 1.2) {
      room.update(t)
      if (!introSettled) {
        const elapsed = performance.now() - started
        const raw = reduce ? 1 : Math.min(1, Math.max(0, (elapsed - 250) / 700))
        const eased = raw === 1 ? 1 : 1 - (1 - raw) ** 3
        room.group.position.x = (1 - eased) * -6.4
        fadeRoom(eased)
        if (eased === 1) introSettled = true
      }
      camera.position.set(...CAMERA.pos)
      camera.position.x += mouse.x * 0.35 + (reduce ? 0 : Math.sin(t * 0.25) * 0.15)
      camera.position.y -= mouse.y * 0.2
      if (mobile) {
        const byHeight = 0.62 / (slotRect.height / height)
        const byWidth = 1.05 / (width / height)
        const zoom = Math.min(4, Math.max(2.25, byHeight, byWidth))
        camera.position.sub(target).multiplyScalar(zoom).add(target)
      } else {
        camera.position.sub(target).multiplyScalar(1.72).add(target)
      }
      camera.lookAt(target)
      const hero = document.querySelector(".hero.hero-refresh")
      const copy = document.querySelector(".hero-copy")
      const heroLeft = hero ? hero.getBoundingClientRect().left : Math.max(0, (width - 1920) / 2)
      const copyLeft = copy ? copy.getBoundingClientRect().left : heroLeft + 1200
      const towardCopy = Math.max(heroLeft + height * 0.16, copyLeft - height * 0.14)
      const towardEdge = heroLeft + height * 0.04
      const clearLinks = width < 1700 ? 80 : 0
      const roomCenter = (towardCopy + towardEdge) / 2 + clearLinks
      const offsetX = mobile ? 0 : width / 2 - roomCenter
      const offsetY = mobile ? height / 2 - (slotRect.top + slotRect.height / 2) : pageY
      camera.setViewOffset(width, height, offsetX, offsetY, width, height)
      renderer.clearDepth()
      renderer.render(scene, camera)
    }

    frame = requestAnimationFrame(draw)
  }
  frame = requestAnimationFrame(draw)

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener("resize", resize)
    window.removeEventListener("mousemove", onMouse)
    ;[scene, dotScene].forEach((root) =>
      root.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) object.material.dispose()
      })
    )
    halo.dispose()
    renderer.dispose()
  }
}

export default CodeDive
