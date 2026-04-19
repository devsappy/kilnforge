import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { Roaster, Afterburner, Destoner, Silos, Accessories } from './ProductSchematics.jsx'

const PRODUCTS = [
  {
    idx: '01',
    code: 'KF-SR-012',
    series: 'Magnum / Forge',
    name: 'Shop Roasters',
    tag: 'Single-drum · 1 – 35 kg',
    lede: 'Drum roasters sized for cafés through regional production. Perforated drum, dedicated convection channel, five independent heat inputs, glass door.',
    specs: [
      ['Batch',       '1 – 35 kg'],
      ['Heat',        'Gas / Electric'],
      ['Controller',  'Artisan + RoastLog'],
      ['Probe rate',  '4 Hz'],
      ['Cycle',       '11 – 14 min'],
      ['Lead time',   '10 weeks'],
    ],
    callouts: ['Feed hopper', 'Drum assembly', 'Burner array', 'Cooling tray'],
    Schematic: Roaster,
  },
  {
    idx: '02',
    code: 'KF-AB-090',
    series: 'Vela Line',
    name: 'Afterburners',
    tag: 'Catalytic & Thermal · 5 – 180 kW',
    lede: 'Clean smoke before it leaves your building. Ceramic-matrix catalytic for urban sites; thermal oxidisers for industrial scale. Interlocked with the roaster.',
    specs: [
      ['Type',         'Catalytic / TO'],
      ['Efficiency',   '97 – 99 %'],
      ['Compliance',   'EU Stage V · TA Luft'],
      ['Footprint',    '0.6 m²'],
      ['Throughput',   '400 – 4,500 m³/h'],
      ['Warranty',     '7 years'],
    ],
    callouts: ['Dirty inlet', 'Catalyst matrix', 'Heat exchanger', 'Clean stack'],
    Schematic: Afterburner,
  },
  {
    idx: '03',
    code: 'KF-DS-060',
    series: 'Silex Series',
    name: 'Destoners',
    tag: 'Pneumatic · 60 – 1,800 kg/h',
    lede: 'Variable-flow column separating stones, metal, and chaff from green and roasted beans. Self-cleaning, whisper-quiet, honest about what it catches.',
    specs: [
      ['Throughput',   '60 – 1,800 kg/h'],
      ['Separation',   '> 99.7 %'],
      ['Motor',        '1.5 – 7.5 kW · IE4'],
      ['Noise',        '< 62 dB'],
      ['Port size',    'DN 100 / 150'],
      ['Control',      'Auto / Manual'],
    ],
    callouts: ['Hopper feed', 'Vibration column', 'Reject chute', 'Blower fan'],
    Schematic: Destoner,
  },
  {
    idx: '04',
    code: 'KF-GH-024',
    series: 'Gravitas Works',
    name: 'Green Handling',
    tag: 'Silos · Augers · De-baggers',
    lede: 'From loading bay to drum. Stainless augers, gentle-fall silos for single-origin lots, and a de-bagger that opens sixty kilograms in eleven seconds.',
    specs: [
      ['Silo range',   '250 – 6,000 kg'],
      ['Auger',        '316 stainless · FDA'],
      ['De-bag',       '11 s / 60 kg'],
      ['Modular',      'Bolted sections'],
      ['Footprint',    'Custom'],
      ['Install',      '2 – 4 days'],
    ],
    callouts: ['Silo A', 'Silo B', 'Auger line', 'De-bagger'],
    Schematic: Silos,
  },
  {
    idx: '05',
    code: 'KF-AX-∞',
    series: 'Atelier Tools',
    name: 'Accessories',
    tag: 'Triers · Bar scales · Sample scoops',
    lede: 'The small tools the catalog usually forgets. Brass moisture probes, olive-wood cupping bowls, and the single best sample scoop a production roaster has ever held.',
    specs: [
      ['Materials',    'Brass · Olive · 316'],
      ['Ships from',   'Tarragona'],
      ['Packaging',    'Zero-plastic'],
      ['MOQ',          '1 piece'],
      ['Gift wrap',    'Hand-tied'],
      ['Returns',      '60 days'],
    ],
    callouts: ['Sample trier', 'Dial thermometer', 'Cupping bowl', 'Bar scale'],
    Schematic: Accessories,
  },
]

const AUTO_MS = 7000

export default function Catalog() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const stageRef = useRef(null)

  // auto-advance
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setI((x) => (x + 1) % PRODUCTS.length), AUTO_MS)
    return () => clearTimeout(t)
  }, [i, paused])

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (!stageRef.current) return
      const r = stageRef.current.getBoundingClientRect()
      const visible = r.top < window.innerHeight && r.bottom > 0
      if (!visible) return
      if (e.key === 'ArrowLeft')  setI((x) => (x - 1 + PRODUCTS.length) % PRODUCTS.length)
      if (e.key === 'ArrowRight') setI((x) => (x + 1) % PRODUCTS.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const p = PRODUCTS[i]
  const { Schematic } = p

  return (
    <section className="catalog" id="catalog">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">02 &mdash; Catalog</span>
          <h2 className="section-title">The <i>working</i> range</h2>
          <p className="section-kicker">Five families of equipment. One drivetrain, one controller, one book of signatures. Lead times 8–14 weeks. Every quote is hand-written.</p>
        </Reveal>

        <Reveal>
          <div
            className="stage"
            ref={stageRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* ——— top rail ——— */}
            <div className="stage-rail">
              <span className="mono">{p.idx} / 05</span>
              <div className="rail-track" aria-hidden="true">
                <motion.div
                  key={`${i}-${paused}`}
                  className="rail-fill"
                  initial={{ width: 0 }}
                  animate={{ width: paused ? '100%' : '100%' }}
                  transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: 'linear' }}
                />
              </div>
              <span className="mono rail-auto">
                <span className={`auto-dot ${paused ? 'is-paused' : ''}`}></span>
                {paused ? 'paused' : 'auto'}
              </span>
            </div>

            {/* ——— main: visual + body ——— */}
            <div className="stage-main">

              {/* LEFT — schematic */}
              <div className="stage-visual">
                <div className="grid-bg" aria-hidden="true" />
                <div className="crosshair" aria-hidden="true">
                  <span /><span /><span /><span />
                </div>

                {/* corner markings */}
                <span className="corner tl mono">KILNFORGE · WORKS</span>
                <span className="corner tr mono">SHEET&nbsp;{p.idx} / 05</span>
                <span className="corner bl mono">REV.&nbsp;XIV · TARRAGONA</span>
                <span className="corner br mono">SCALE 1:40</span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.code}
                    className="schem-holder"
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <Schematic />
                  </motion.div>
                </AnimatePresence>

                {/* callout legend */}
                <div className="legend">
                  <AnimatePresence mode="wait">
                    <motion.ul
                      key={p.code + '-legend'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {p.callouts.map((c, n) => (
                        <motion.li
                          key={c}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + n * 0.08, duration: 0.5 }}
                          className="mono"
                        >
                          <span className="num">{String(n + 1).padStart(2, '0')}</span>{c}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT — body */}
              <div className="stage-body">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.code}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <div className="body-head">
                      <span className="mono series">{p.series}</span>
                      <span className="mono code">№ {p.code}</span>
                    </div>

                    <h3 className="body-name">{p.name}</h3>
                    <p className="body-tag mono">{p.tag}</p>

                    <p className="body-lede">{p.lede}</p>

                    <dl className="body-specs">
                      {p.specs.map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="body-cta">
                      <a className="btn btn-ember" href="#contact">
                        Request quote
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11L11 3M11 3H5M11 3V9"/></svg>
                      </a>
                      <a className="btn btn-ghost" href="#contact">
                        Download spec sheet
                      </a>
                    </div>

                    {/* inspector stamp */}
                    <div className="stamp-row">
                      <span className="stamp">
                        <span className="stamp-inner">
                          <b>PASSED</b>
                          <small>Inspector · A. Folch</small>
                          <small>2026 · 04 · 17</small>
                        </span>
                      </span>
                      <span className="mono signature">Signed off in Tarragona.</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ——— tab strip ——— */}
            <ol className="stage-tabs" role="tablist">
              {PRODUCTS.map((pp, n) => (
                <li key={pp.code} role="tab" aria-selected={n === i}>
                  <button
                    className={`tab ${n === i ? 'is-active' : ''}`}
                    onClick={() => setI(n)}
                  >
                    <span className="tab-num mono">{pp.idx}</span>
                    <span className="tab-name">{pp.name}</span>
                    <span className="tab-tag mono">{pp.tag}</span>
                    <span className="tab-line" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ol>

            {/* arrow keys hint */}
            <div className="stage-hint mono" aria-hidden="true">
              <kbd>←</kbd><kbd>→</kbd> navigate
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
