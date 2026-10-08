import React from "react"
import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <section className="hero hero-refresh">
      <div className="hero-stage" aria-hidden="true">
        <span className="hero-grid" />
        <span className="hero-orb hero-orb-a" />
        <span className="hero-orb hero-orb-b" />
        <span className="hero-orb hero-orb-c" />
        <span className="hero-ring" />
      </div>
      <div className="hero-copy">
        <Fade cascade damping={0.15} triggerOnce direction="up">
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
