/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

const themeScript = `
void function() {
  window.__onThemeChange = function() {}
  var theme
  try {
    theme = localStorage.getItem('theme')
  } catch (err) {}
  theme = theme === 'light' ? 'light' : 'dark'
  document.body.classList.add(theme)
  window.__theme = theme
  window.__setPreferredTheme = function(newTheme) {
    document.body.classList.replace(window.__theme, newTheme)
    window.__theme = newTheme
    window.__onThemeChange(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) {}
  }
}()
`

export const onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
  setPreBodyComponents([
    <script key="theme" dangerouslySetInnerHTML={{ __html: themeScript }} />,
  ])
  setPostBodyComponents([
    <script
      key="https://socialproof.pl/pixel/yhj3yf4jwiearbesr2b46dsciresnqic"
      src="https://socialproof.pl/pixel/yhj3yf4jwiearbesr2b46dsciresnqic"
      async
    />,
  ])
}
