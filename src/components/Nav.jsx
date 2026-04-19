import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.nav
      className="top"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <a href="#top" className="brand" aria-label="Kilnforge, home">
        <span className="brand-mark" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2" fill="currentColor" />
          </svg>
        </span>
        Kiln<em>forge</em>
      </a>
      <ul>
        <li><a href="#catalog">Catalog</a></li>
        <li><a href="#flagship">Magnum&nbsp;Series</a></li>
        <li><a href="#craft">The Foundry</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-cta" type="button">
        <span className="dot" aria-hidden="true"></span>
        <span>Request a quote</span>
      </button>
    </motion.nav>
  )
}
