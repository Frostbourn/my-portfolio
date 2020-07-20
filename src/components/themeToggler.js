import React, { Fragment } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const DarkLightSwitch = () => (
      <ThemeToggler> 
        {({ theme, toggleTheme }) => (
          <label className="switch">
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          <span class="slider round"></span>
        </label>
        )}
      </ThemeToggler>
    )

export default DarkLightSwitch