import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const DarkLightSwitch = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className="toggleWrapper">
        <input
          type="checkbox"
          className="dn"
          id="dn"
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />{" "}
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
        </label>
      </div>
    )}
  </ThemeToggler>
)

export default DarkLightSwitch
