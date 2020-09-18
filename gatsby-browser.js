/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import "./src/styles/layout.scss"
import kursor from "kursor"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    header: "[data-scroll-header]",
    topOnEmptyHash: true,
    speed: 500,
    speedAsDuration: true,
  })
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }
}

// new kursor({
//   type: 2,
//   color: "#975bf4",
//   removeDefaultCursor: true,
// })
