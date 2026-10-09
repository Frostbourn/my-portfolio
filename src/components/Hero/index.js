import React from "react"
import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <section className="hero hero-refresh">
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
          <h1>I build websites and the work behind them.</h1>
          <p className="hero-lead">
            The product people use, and the repetitive tasks around it taken off the team.
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
