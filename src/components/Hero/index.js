import React from "react"
import { Fade } from "react-awesome-reveal"
import DotField from "./DotField"

const Hero = () => {
  return (
    <section className="hero hero-refresh">
      <div className="hero-stage" aria-hidden="true">
        <DotField />
        <span className="hero-orb hero-orb-a" />
        <span className="hero-orb hero-orb-b" />
        <span className="hero-orb hero-orb-c" />
        <span className="hero-ring" />
      </div>
      <div className="hero-copy">
        <Fade
          cascade
          direction="right"
          duration={700}
          delay={250}
          damping={0.45}
          triggerOnce
        >
          <p className="hero-kicker">Software engineer</p>
          <h1>I build web applications, AI systems, and the automations around them.</h1>
          <p className="hero-lead">
            React and Next.js when the interface has to stay fast. n8n and LLMs
            when a team is still doing the same work by hand.
          </p>
          <a className="btn btn-primary btn-form display-4" href="#about">
            Hire me
          </a>
        </Fade>
      </div>
    </section>
  )
}

export default Hero
