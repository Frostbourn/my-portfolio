import React, { useEffect } from "react"
import Particles from "react-tsparticles"

const ParticlesWrapper = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById("tsparticles")
      const child = el.firstChild
      child.style.removeProperty("position")
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: [
              "#7d06df",
              "#e3b23c",
              "#2c528b",
              "#ff3a75",
              "#2bcf90",
              "#9b6aeb",
            ],
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 6,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 8,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
export default ParticlesWrapper
