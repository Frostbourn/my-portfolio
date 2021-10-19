/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://socialproof.pl/pixel/yhj3yf4jwiearbesr2b46dsciresnqic"
      src="https://socialproof.pl/pixel/yhj3yf4jwiearbesr2b46dsciresnqic"
      async
    />,
  ])
}
