import React from "react"
import { FaEnvelopeOpenText, FaFacebookMessenger, FaLinkedinIn } from "react-icons/fa"

const LINKS = [
  { label: "Messenger", href: "https://www.m.me/skowronski.jakub", Icon: FaFacebookMessenger },
  { label: "Email", href: "mailto:kontakt@jakubskowronski.com", Icon: FaEnvelopeOpenText },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jakub-skowronski", Icon: FaLinkedinIn },
]

const SocialLinks = () => (
  <aside id="social-links" className="social-links" aria-label="Social links">
    <ul>
      {LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  </aside>
)

export default SocialLinks
