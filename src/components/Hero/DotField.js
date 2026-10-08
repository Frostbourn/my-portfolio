import React, { useEffect, useRef } from "react"

const COLS = 26
const ROWS = 16

// ponytail: canvas point wave in the dot area. Swap for three.js Points if it needs lights or a real camera.
const DotField = () => {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0
    let running = true

    const size = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const nextW = Math.max(1, Math.round(width * dpr))
      const nextH = Math.max(1, Math.round(height * dpr))
      if (canvas.width !== nextW || canvas.height !== nextH) {
        canvas.width = nextW
        canvas.height = nextH
      }
      return { width, height, dpr }
    }

    const draw = (t) => {
      const { width, height, dpr } = size()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const time = reduce ? 1.2 : t * 0.001
      const dark = document.body.classList.contains("dark")
      const rgb = dark ? "167,140,242" : "84,44,226"
      const cx = width * 0.5
      const cy = height * 0.48

      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          const u = x / (COLS - 1) - 0.5
          const v = y / (ROWS - 1) - 0.5
          const wave = Math.sin(u * 7 + time * 1.4) * Math.cos(v * 5 - time)
          const depth = 180 / (180 + 70 + wave * 36)
          const px = cx + u * width * 0.92 * depth
          const py = cy + v * height * 0.78 * depth + wave * 14
          const alpha = 0.12 + depth * 0.7
          ctx.beginPath()
          ctx.fillStyle = `rgba(${rgb},${alpha})`
          ctx.arc(px, py, 1 + depth * 1.8, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (running && !reduce) frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)
    return () => {
      running = false
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={ref} className="hero-grid" aria-hidden="true" />
}

export default DotField
