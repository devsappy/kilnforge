import { motion } from 'framer-motion'
import { useRef } from 'react'
import Schematic from './Schematic.jsx'

const word = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } }
}
const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}
const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } }
}

export default function Hero() {
  const heroRef = useRef(null)
  const svgRef = useRef(null)

  const onMove = (e) => {
    const el = svgRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left - r.width / 2) / r.width) * 10
    const y = ((e.clientY - r.top - r.height / 2) / r.height) * 10
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => { if (svgRef.current) svgRef.current.style.transform = '' }

  return (
    <header className="hero" id="top" ref={heroRef} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="hero-inner">
        <motion.div
          className="hero-meta mono"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span>Kilnforge &mdash; Est. 2011 &mdash; Tarragona, ES</span>
          <span className="line"></span>
          <span>Dossier N&deg; 041 / Vol. XIV</span>
        </motion.div>

        <div>
          <motion.h1 variants={group} initial="hidden" animate="show">
            <motion.span variants={word} style={{ display: 'inline-block' }}>Instruments</motion.span>{' '}
            <motion.span variants={word} className="outline" style={{ display: 'inline-block' }}>for the</motion.span>{' '}
            <motion.span variants={word} className="italic" style={{ display: 'inline-block' }}>dark&nbsp;art</motion.span>{' '}
            <motion.span variants={word} style={{ display: 'inline-block' }}>of coffee</motion.span>{' '}
            <motion.span variants={word} style={{ display: 'inline-block' }}>roasting.</motion.span>
          </motion.h1>

          <motion.p
            className="hero-lede"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.0 }}
          >
            We build drum roasters, afterburners, and green-handling systems
            for specialty roasteries who measure success one curve at a time.
            Every machine leaves our foundry tuned, stamped, and signed by
            the engineer who assembled it.
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={rise}
            initial="hidden"
            animate="show"
            transition={{ delay: 1.15 }}
          >
            <a className="btn btn-ember" href="#catalog">
              Browse the catalog
              <Arrow />
            </a>
            <a className="btn btn-ghost" href="#craft">
              Tour the foundry
              <Arrow />
            </a>
          </motion.div>
        </div>

        <div className="hero-schematic" aria-hidden="true" ref={svgRef}>
          <Schematic />
          <div className="callouts">
            {[
              { cls: 'cal-1', n: '1', t: 'Feed hopper', delay: 1.4 },
              { cls: 'cal-2', n: '2', t: 'Drum assembly', delay: 1.55 },
              { cls: 'cal-3', n: '3', t: 'Trier port', delay: 1.7 },
              { cls: 'cal-4', n: '4', t: 'Cooling tray', delay: 1.85 },
            ].map((c) => (
              <motion.span
                key={c.cls}
                className={`cal ${c.cls} mono`}
                data-num={c.n}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: c.delay }}
              >
                {c.t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 11L11 3M11 3H5M11 3V9" />
    </svg>
  )
}
