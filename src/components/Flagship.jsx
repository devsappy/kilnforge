import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const CONFIGS = [
  { key: 6,  code: 'KF-M06', batch: '6 kg',  cycle: '11 – 13 min', gas: '28 kW', electric: '1.8 kW', weight: '380 kg', price: '€ 28,400' },
  { key: 12, code: 'KF-M12', batch: '12 kg', cycle: '11 – 14 min', gas: '48 kW', electric: '3.2 kW', weight: '620 kg', price: '€ 42,500' },
  { key: 20, code: 'KF-M20', batch: '20 kg', cycle: '12 – 15 min', gas: '72 kW', electric: '4.4 kW', weight: '890 kg', price: '€ 61,800' },
]

const HOTSPOTS = [
  { id: 'h1', x: 50,   y: 14, n: 1, title: 'Oversize feed hopper',  body: '12 kilograms of charge with a drop-valve you can open in one hand. Polished 316 throat, 28° fall angle, zero bruise on drop-in.' },
  { id: 'h2', x: 50,   y: 45, n: 2, title: 'Double-wall drum',      body: 'Isolated jacket; perforated inner cylinder turned on a five-axis lathe. Heat lag measured in seconds, not minutes.' },
  { id: 'h3', x: 50,   y: 78, n: 3, title: 'Five-zone burner',      body: 'Five independent heat inputs beneath the drum. You are not adjusting the total — you are shaping the curve.' },
  { id: 'h4', x: 23,   y: 90, n: 4, title: 'Counter-stirred tray',  body: 'Three-minute stabilisation under a counter-rotating stirrer arm. No ring of unevenly-cooled beans around the rim.' },
]

const EVENTS = [
  { t: 0.00,  temp: 205, label: 'Charge',        code: 'CH' },
  { t: 1.50,  temp: 92,  label: 'Turn-around',   code: 'TP' },
  { t: 5.00,  temp: 150, label: 'Dry end',       code: 'DE' },
  { t: 9.50,  temp: 198, label: 'First crack',   code: 'FC' },
  { t: 12.25, temp: 213, label: 'Drop',          code: 'DR' },
]

export default function Flagship() {
  const [ci, setCi] = useState(1)
  const [active, setActive] = useState('h2')
  const cfg = CONFIGS[ci]
  const hot = HOTSPOTS.find(h => h.id === active)

  return (
    <section className="flagship" id="flagship">
      <div className="wrap">

        {/* ——— section head ——— */}
        <Reveal className="section-head">
          <span className="section-num">03 &mdash; Magnum Series</span>
          <h2 className="section-title">A closer <i>look</i></h2>
          <p className="section-kicker">Our flagship shop roaster, page-by-page. Six years of iteration reduced to a single curve you&rsquo;ll never stop chasing.</p>
        </Reveal>

        {/* ——— editorial masthead ——— */}
        <Reveal className="mag-mast">
          <div className="mast-meta mono">
            <span>Dossier &mdash; Kilnforge 03 / Magnum Series</span>
            <span className="line" />
            <span>Feature N&deg; 041 &middot; 12 minutes of flight</span>
          </div>

          <div className="mast-row">
            <div className="mast-big" aria-hidden="true">
              <span>M</span>
              <span className="mast-slash">/</span>
              <span className="mast-num">12</span>
            </div>
            <div className="mast-strip">
              <Stat k="Batch" v={cfg.batch} />
              <Stat k="Cycle" v={cfg.cycle} />
              <Stat k="Noise floor" v="54 dB" />
              <Stat k="Probe rate" v="4 Hz" />
              <Stat k="Warranty" v="10 years" />
            </div>
          </div>

          <h3 className="mast-head">
            Twelve kilograms of <i>calm</i> heat,
            held for exactly as long as the <i>curve</i> wants.
          </h3>
        </Reveal>

        {/* ——— cover: illustration + body ——— */}
        <Reveal className="mag-cover">
          <div className="cover-visual">
            <div className="cover-grid" aria-hidden="true" />
            <div className="crosshair" aria-hidden="true"><span/><span/><span/><span/></div>
            <span className="corner tl mono">KILNFORGE · WORKS</span>
            <span className="corner tr mono">SHEET 03 / MAGNUM</span>
            <span className="corner bl mono">REV. XIV · TARRAGONA</span>
            <span className="corner br mono">SCALE 1:24</span>

            <div className="cover-svg">
              <MagnumIllustration />
              {HOTSPOTS.map(h => (
                <button
                  key={h.id}
                  className={`hot ${active === h.id ? 'is-active' : ''}`}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  onMouseEnter={() => setActive(h.id)}
                  onFocus={() => setActive(h.id)}
                  aria-label={h.title}
                >
                  <span className="hot-ring" aria-hidden="true" />
                  <span className="hot-dot">{h.n}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={hot.id}
                className="hot-label"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="mono hot-idx">CALLOUT &middot; {String(hot.n).padStart(2, '0')}</span>
                <h4>{hot.title}</h4>
                <p>{hot.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="cover-body">
            <p className="cover-lede">
              A fully isolated double-wall drum, five-zone burner, and a
              controller that logs every bean-probe reading at four times
              a second. Built to be the last roaster you ever buy for
              this batch size.
            </p>

            {/* configuration */}
            <div className="config">
              <span className="config-label mono">Configure</span>
              <div className="config-chips" role="radiogroup" aria-label="Capacity">
                {CONFIGS.map((c, i) => (
                  <button
                    key={c.key}
                    role="radio"
                    aria-checked={i === ci}
                    className={`chip ${i === ci ? 'is-on' : ''}`}
                    onClick={() => setCi(i)}
                  >
                    <span className="chip-num">{c.key}</span>
                    <span className="chip-kg mono">kg</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.dl
                  key={cfg.code}
                  className="config-specs"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  <div><dt>Model</dt><dd>{cfg.code}</dd></div>
                  <div><dt>Cycle</dt><dd>{cfg.cycle}</dd></div>
                  <div><dt>Gas</dt><dd>{cfg.gas}</dd></div>
                  <div><dt>Electric</dt><dd>{cfg.electric}</dd></div>
                  <div><dt>Weight</dt><dd>{cfg.weight}</dd></div>
                  <div><dt>Ex-works</dt><dd>{cfg.price}</dd></div>
                </motion.dl>
              </AnimatePresence>
            </div>

            <div className="cover-cta">
              <a className="btn btn-ember" href="#contact">
                Request the spec sheet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11L11 3M11 3H5M11 3V9"/></svg>
              </a>
              <a className="btn btn-ghost" href="#contact">Schedule a factory visit</a>
            </div>

            <div className="cover-foot mono">
              <span><span className="dot" /> Built to order</span>
              <span>Lead time 10 weeks</span>
              <span>Numbered &amp; signed</span>
            </div>
          </div>
        </Reveal>

        {/* ——— roast curve ——— */}
        <Reveal className="mag-curve">
          <div className="curve-head">
            <div>
              <span className="section-num">Profile reference</span>
              <h3 className="curve-title">The <i>curve</i> in question.</h3>
              <p className="curve-kicker">Example development profile &mdash; Ethiopia Yirgacheffe, natural &middot; charge 205&deg;C</p>
            </div>
            <ul className="curve-kpis">
              <li><b>22%</b><small>Development</small></li>
              <li><b>12:15</b><small>Total time</small></li>
              <li><b>213&deg;</b><small>Drop temp</small></li>
              <li><b>Ag 72</b><small>Agtron ground</small></li>
            </ul>
          </div>

          <RoastCurve />
        </Reveal>

        {/* ——— detail vignettes ——— */}
        <Reveal className="mag-details">
          <h3 className="details-head">
            <span className="section-num">Detail plates</span>
            The <i>parts</i> that earn the stamp.
          </h3>
          <div className="details-grid">
            <DetailCard code="DTL / 01" title="Perforated drum"
              body="6mm inner skin, laser-punched on a 3mm pitch. Turned true to 20 microns on a five-axis lathe.">
              <DrumCutaway />
            </DetailCard>
            <DetailCard code="DTL / 02" title="Controller face"
              body="Three gauges, one knob, one screen. Readings stream to Artisan and RoastLog at 4Hz.">
              <ControllerFace />
            </DetailCard>
            <DetailCard code="DTL / 03" title="Sample trier"
              body="Sprung brass sampler that doesn't whistle when you pull it &mdash; so first crack stays audible.">
              <TrierDetail />
            </DetailCard>
            <DetailCard code="DTL / 04" title="Serial plate"
              body="Every plate is struck on a 1962 press, then tapped flat by hand before mounting.">
              <SerialPlate cfg={cfg} />
            </DetailCard>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ————————————————————————— helpers ————————————————————————— */

function Stat({ k, v }) {
  return (
    <div className="mast-stat">
      <span className="mono">{k}</span>
      <b>{v}</b>
    </div>
  )
}

function DetailCard({ code, title, body, children }) {
  return (
    <article className="detail">
      <span className="mono detail-code">{code}</span>
      <div className="detail-visual">{children}</div>
      <h4 className="detail-title">{title}</h4>
      <p className="detail-body">{body}</p>
    </article>
  )
}

/* ————————————————————————— large SVGs ————————————————————————— */

function MagnumIllustration() {
  return (
    <svg viewBox="0 0 500 560" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* reference */}
      <g stroke="rgba(243,236,225,0.16)" strokeWidth="0.7" strokeDasharray="3 4">
        <line x1="250" y1="20"  x2="250" y2="540" />
        <line x1="30"  y1="290" x2="470" y2="290" />
      </g>

      {/* hopper */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <path d="M180 40 L320 40 L302 135 L198 135 Z" />
        <line x1="192" y1="62" x2="308" y2="62" />
        <line x1="200" y1="90" x2="300" y2="90" />
        <path d="M225 135 L225 175 L275 175 L275 135" />
      </g>

      {/* chimney */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <rect x="355" y="30" width="36" height="100" />
        <line x1="364" y1="30" x2="364" y2="130" />
        <line x1="382" y1="30" x2="382" y2="130" />
      </g>
      <g stroke="var(--ember)" strokeWidth="1" fill="none" className="mag-smoke">
        <path d="M373 20 C 368 6 382 -6 373 -18" opacity="0.6" />
        <path d="M363 20 C 368 8 358 -2 365 -14" opacity="0.35" />
      </g>

      {/* drum housing */}
      <rect x="115" y="190" width="270" height="200" rx="6" stroke="var(--paper)" strokeWidth="1.2" />
      <rect x="122" y="197" width="256" height="186" rx="4" stroke="rgba(243,236,225,0.18)" strokeWidth="0.7" strokeDasharray="2 3" />

      {/* spinning drum */}
      <g className="mag-drum" style={{ transformOrigin: '250px 290px' }}>
        <circle cx="250" cy="290" r="88" stroke="var(--ember)" strokeWidth="1.2" />
        <circle cx="250" cy="290" r="70" stroke="var(--ember)" strokeWidth="0.6" opacity="0.55" />
        <line x1="250" y1="202" x2="250" y2="378" stroke="var(--ember)" strokeWidth="0.8" opacity="0.5" />
        <line x1="162" y1="290" x2="338" y2="290" stroke="var(--ember)" strokeWidth="0.8" opacity="0.5" />
        <line x1="188" y1="228" x2="312" y2="352" stroke="var(--ember)" strokeWidth="0.5" opacity="0.35" />
        <line x1="312" y1="228" x2="188" y2="352" stroke="var(--ember)" strokeWidth="0.5" opacity="0.35" />
        {/* vanes */}
        <path d="M250 228 L258 236" stroke="var(--paper)" strokeWidth="1" />
        <path d="M310 288 L302 280" stroke="var(--paper)" strokeWidth="1" />
        <path d="M250 348 L242 340" stroke="var(--paper)" strokeWidth="1" />
        <path d="M190 298 L198 306" stroke="var(--paper)" strokeWidth="1" />
        {/* beans */}
        <g fill="var(--paper)" stroke="none">
          <circle cx="230" cy="330" r="2.2" />
          <circle cx="260" cy="332" r="2" />
          <circle cx="280" cy="312" r="2" />
          <circle cx="218" cy="305" r="1.8" />
          <circle cx="245" cy="345" r="2" />
          <circle cx="290" cy="288" r="1.8" />
          <circle cx="210" cy="280" r="2" />
        </g>
        <circle cx="250" cy="290" r="3.5" fill="var(--ember)" stroke="none" />
      </g>

      {/* trier port */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <rect x="138" y="270" width="18" height="44" rx="2" />
        <line x1="118" y1="292" x2="138" y2="292" />
        <circle cx="113" cy="292" r="5" />
      </g>

      {/* control panel */}
      <g transform="translate(288,325)">
        <rect x="0" y="0" width="92" height="48" rx="2" stroke="var(--paper)" strokeWidth="1.2" />
        <g stroke="var(--paper)" strokeWidth="0.9">
          <circle cx="18" cy="24" r="10" />
          <circle cx="46" cy="24" r="10" />
          <circle cx="74" cy="24" r="10" />
        </g>
        <line className="mag-needle-a" x1="18" y1="24" x2="24" y2="17" stroke="var(--ember)" strokeWidth="1.2" style={{ transformOrigin: '18px 24px' }} />
        <line className="mag-needle-b" x1="46" y1="24" x2="42" y2="15" stroke="var(--ember)" strokeWidth="1.2" style={{ transformOrigin: '46px 24px' }} />
        <line className="mag-needle-c" x1="74" y1="24" x2="80" y2="27" stroke="var(--ember)" strokeWidth="1.2" style={{ transformOrigin: '74px 24px' }} />
        <circle cx="18" cy="24" r="1.4" fill="var(--paper)" />
        <circle cx="46" cy="24" r="1.4" fill="var(--paper)" />
        <circle cx="74" cy="24" r="1.4" fill="var(--paper)" />
      </g>

      {/* burner flames */}
      <g fill="var(--ember)" stroke="none">
        <path className="mag-flame mf1" d="M164 398 Q 168 416 164 434 Q 160 416 164 398 Z" />
        <path className="mag-flame mf2" d="M198 398 Q 203 418 198 438 Q 193 418 198 398 Z" />
        <path className="mag-flame mf3" d="M238 398 Q 244 420 238 440 Q 232 420 238 398 Z" />
        <path className="mag-flame mf4" d="M278 398 Q 283 418 278 438 Q 273 418 278 398 Z" />
        <path className="mag-flame mf5" d="M312 398 Q 316 416 312 434 Q 308 416 312 398 Z" />
      </g>

      {/* cooling tray */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <path d="M40 438 Q 40 490 110 490 L 210 490 Q 260 490 260 438 Z" />
        <line x1="40" y1="455" x2="260" y2="455" />
        <g className="mag-stirrer" style={{ transformOrigin: '150px 438px' }}>
          <line x1="150" y1="438" x2="150" y2="478" stroke="var(--ember)" strokeWidth="1.1" />
          <path d="M116 466 L184 466" stroke="var(--ember)" strokeWidth="1.1" />
        </g>
        <g fill="var(--paper)" stroke="none">
          <circle cx="82" cy="472" r="2" />
          <circle cx="102" cy="478" r="2" />
          <circle cx="198" cy="476" r="2" />
          <circle cx="220" cy="470" r="2" />
          <circle cx="128" cy="482" r="2" />
        </g>
      </g>

      {/* base frame */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <line x1="140" y1="490" x2="140" y2="535" />
        <line x1="385" y1="390" x2="385" y2="535" />
        <line x1="260" y1="490" x2="260" y2="535" />
        <line x1="20"  y1="535" x2="460" y2="535" />
      </g>

      {/* dimensions */}
      <g stroke="rgba(243,236,225,0.45)" strokeWidth="0.7" strokeDasharray="2 3">
        <line x1="405" y1="190" x2="448" y2="190" />
        <line x1="405" y1="390" x2="448" y2="390" />
        <line x1="443" y1="190" x2="443" y2="390" />
      </g>
      <text x="452" y="295" fill="rgba(243,236,225,0.55)" fontFamily="JetBrains Mono" fontSize="9">420</text>
    </svg>
  )
}

function RoastCurve() {
  const W = 900, H = 380
  const L = 70, R = 40, T = 40, B = 60
  const plotW = W - L - R
  const plotH = H - T - B
  const xMax = 14
  const yMin = 80, yMax = 220
  const xAt = (t) => L + (t / xMax) * plotW
  const yAt = (c) => T + plotH - ((c - yMin) / (yMax - yMin)) * plotH

  // bean-temp curve points (smoothed)
  const bean = [
    [0.00, 205], [0.40, 160], [1.00, 115], [1.50, 92], [2.30, 108],
    [3.40, 130], [5.00, 150], [7.00, 172], [8.40, 188], [9.50, 198],
    [10.80, 206], [11.80, 211], [12.25, 213],
  ]
  // environmental curve (higher, smoother)
  const env = [
    [0.00, 220], [0.70, 205], [1.50, 195], [2.50, 198], [4.00, 204],
    [6.00, 212], [8.50, 219], [10.50, 222], [12.25, 222],
  ]

  const toSmoothPath = (pts) => {
    const p = pts.map(([t, c]) => [xAt(t), yAt(c)])
    let d = `M ${p[0][0]} ${p[0][1]}`
    for (let i = 0; i < p.length - 1; i++) {
      const [x1, y1] = p[i], [x2, y2] = p[i + 1]
      const cx = (x1 + x2) / 2
      d += ` Q ${x1} ${y1}, ${cx} ${(y1 + y2) / 2} T ${x2} ${y2}`
    }
    return d
  }

  return (
    <div className="curve-plot">
      <div className="curve-frame" aria-hidden="true">
        <span className="corner tl mono">PLOT 041-A</span>
        <span className="corner tr mono">PROBE · BEAN · ENV</span>
        <span className="corner bl mono">KF-M12 &middot; BATCH 9.8 KG</span>
        <span className="corner br mono">4 HZ LOG · ARTISAN</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="curve-svg">
        {/* grid */}
        <g stroke="rgba(243,236,225,0.08)" strokeWidth="0.7">
          {Array.from({ length: 8 }, (_, i) => {
            const y = T + (i / 7) * plotH
            return <line key={`h${i}`} x1={L} y1={y} x2={L + plotW} y2={y} />
          })}
          {Array.from({ length: 8 }, (_, i) => {
            const x = L + (i / 7) * plotW
            return <line key={`v${i}`} x1={x} y1={T} x2={x} y2={T + plotH} />
          })}
        </g>

        {/* axes */}
        <g stroke="rgba(243,236,225,0.35)" strokeWidth="0.9">
          <line x1={L} y1={T} x2={L} y2={T + plotH} />
          <line x1={L} y1={T + plotH} x2={L + plotW} y2={T + plotH} />
        </g>

        {/* y ticks */}
        <g fill="rgba(243,236,225,0.55)" fontFamily="JetBrains Mono" fontSize="10">
          {[80, 120, 160, 200, 220].map(c => (
            <g key={c}>
              <line x1={L - 6} y1={yAt(c)} x2={L} y2={yAt(c)} stroke="rgba(243,236,225,0.35)" />
              <text x={L - 12} y={yAt(c) + 3} textAnchor="end">{c}°</text>
            </g>
          ))}
        </g>
        {/* x ticks */}
        <g fill="rgba(243,236,225,0.55)" fontFamily="JetBrains Mono" fontSize="10">
          {[0, 2, 4, 6, 8, 10, 12, 14].map(t => (
            <g key={t}>
              <line x1={xAt(t)} y1={T + plotH} x2={xAt(t)} y2={T + plotH + 6} stroke="rgba(243,236,225,0.35)" />
              <text x={xAt(t)} y={T + plotH + 20} textAnchor="middle">{t}:00</text>
            </g>
          ))}
        </g>

        {/* event lines */}
        <g>
          {EVENTS.map(e => (
            <g key={e.code}>
              <line x1={xAt(e.t)} y1={T} x2={xAt(e.t)} y2={T + plotH}
                    stroke="rgba(232,130,63,0.25)" strokeWidth="0.8" strokeDasharray="3 3" />
              <g transform={`translate(${xAt(e.t)}, ${T - 8})`}>
                <rect x="-18" y="-14" width="36" height="14" stroke="var(--ember)" fill="rgba(11,8,5,0.85)" strokeWidth="0.8" />
                <text x="0" y="-4" fill="var(--ember)" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">{e.code}</text>
              </g>
              <text x={xAt(e.t)} y={T + plotH + 38} textAnchor="middle"
                    fill="rgba(243,236,225,0.65)" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">
                {e.label.toUpperCase()}
              </text>
            </g>
          ))}
        </g>

        {/* environmental curve */}
        <motion.path
          d={toSmoothPath(env)}
          stroke="rgba(243,236,225,0.55)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />

        {/* bean curve */}
        <motion.path
          d={toSmoothPath(bean)}
          stroke="var(--ember)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(232,130,63,0.4))' }}
        />

        {/* drop marker */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          style={{ transformOrigin: `${xAt(12.25)}px ${yAt(213)}px` }}
        >
          <circle cx={xAt(12.25)} cy={yAt(213)} r="8" stroke="var(--ember)" strokeWidth="1" fill="none" />
          <circle cx={xAt(12.25)} cy={yAt(213)} r="3" fill="var(--ember)" />
        </motion.g>

        {/* legend */}
        <g transform={`translate(${L + 8}, ${T + 10})`} fontFamily="JetBrains Mono" fontSize="10">
          <line x1="0" y1="4" x2="18" y2="4" stroke="var(--ember)" strokeWidth="2" />
          <text x="24" y="8" fill="var(--paper)">Bean temp (BT)</text>
          <line x1="130" y1="4" x2="148" y2="4" stroke="rgba(243,236,225,0.55)" strokeWidth="1.2" strokeDasharray="3 2" />
          <text x="154" y="8" fill="var(--paper-dim)">Environmental (ET)</text>
        </g>
      </svg>
    </div>
  )
}

/* ————————————————————————— detail SVGs ————————————————————————— */

function DrumCutaway() {
  return (
    <svg viewBox="0 0 280 240" fill="none" strokeLinecap="round">
      <g stroke="var(--paper)" strokeWidth="1.1">
        <circle cx="140" cy="120" r="88" />
        <circle cx="140" cy="120" r="74" />
        <circle cx="140" cy="120" r="60" strokeDasharray="2 3" />
        <circle cx="140" cy="120" r="4" fill="var(--ember)" stroke="none" />
        {/* perforation dots */}
        {Array.from({ length: 40 }).map((_, i) => {
          const a = (i / 40) * Math.PI * 2
          return (
            <g key={i}>
              <circle cx={140 + Math.cos(a) * 80} cy={120 + Math.sin(a) * 80} r="1.3" fill="var(--paper)" stroke="none" />
              <circle cx={140 + Math.cos(a + 0.08) * 66} cy={120 + Math.sin(a + 0.08) * 66} r="1.1" fill="var(--paper)" stroke="none" />
            </g>
          )
        })}
      </g>
      {/* vanes */}
      <g stroke="var(--ember)" strokeWidth="1">
        <line x1="140" y1="60"  x2="140" y2="74" />
        <line x1="140" y1="166" x2="140" y2="180" />
        <line x1="80"  y1="120" x2="94"  y2="120" />
        <line x1="186" y1="120" x2="200" y2="120" />
      </g>
      {/* dimension */}
      <g stroke="rgba(243,236,225,0.4)" strokeWidth="0.6" strokeDasharray="2 2">
        <line x1="52" y1="120" x2="228" y2="120" />
      </g>
      <text x="140" y="224" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(243,236,225,0.55)" textAnchor="middle">Ø 420 mm · 6 mm skin · 3 mm pitch</text>
    </svg>
  )
}

function ControllerFace() {
  return (
    <svg viewBox="0 0 280 240" fill="none" strokeLinecap="round">
      <rect x="20" y="30" width="240" height="180" rx="4" stroke="var(--paper)" strokeWidth="1.2" />
      {/* digital readout */}
      <rect x="36" y="48" width="208" height="46" stroke="var(--ember)" strokeWidth="0.9" />
      <text x="48" y="78" fill="var(--ember)" fontFamily="JetBrains Mono" fontSize="22" letterSpacing="2">198.4°C</text>
      <text x="180" y="78" fill="var(--paper-dim)" fontFamily="JetBrains Mono" fontSize="11">ROR 8.2</text>
      {/* three gauges */}
      {[70, 140, 210].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="150" r="28" stroke="var(--paper)" strokeWidth="1" />
          <circle cx={cx} cy="150" r="22" stroke="rgba(243,236,225,0.25)" strokeWidth="0.6" strokeDasharray="2 2" />
          {Array.from({ length: 8 }).map((_, k) => {
            const a = (k / 8) * Math.PI * 2
            return <line key={k} x1={cx + Math.cos(a) * 22} y1={150 + Math.sin(a) * 22}
                         x2={cx + Math.cos(a) * 26} y2={150 + Math.sin(a) * 26} stroke="var(--paper)" strokeWidth="0.7" />
          })}
          <line x1={cx} y1="150" x2={cx + 12} y2={138 + i * 4} stroke="var(--ember)" strokeWidth="1.4" />
          <circle cx={cx} cy="150" r="2" fill="var(--ember)" stroke="none" />
        </g>
      ))}
      <text x="70"  y="196" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(243,236,225,0.55)" textAnchor="middle">GAS</text>
      <text x="140" y="196" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(243,236,225,0.55)" textAnchor="middle">AIR</text>
      <text x="210" y="196" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(243,236,225,0.55)" textAnchor="middle">DRUM</text>
    </svg>
  )
}

function TrierDetail() {
  return (
    <svg viewBox="0 0 280 240" fill="none" strokeLinecap="round">
      {/* drum wall cross-section */}
      <g stroke="var(--paper)" strokeWidth="1.1">
        <path d="M30 60 L30 210" />
        <path d="M50 60 L50 210" />
        <line x1="30" y1="80" x2="50" y2="80" />
        <line x1="30" y1="110" x2="50" y2="110" />
        <line x1="30" y1="140" x2="50" y2="140" />
        <line x1="30" y1="170" x2="50" y2="170" />
        <line x1="30" y1="200" x2="50" y2="200" />
      </g>
      {/* trier shaft */}
      <g stroke="var(--paper)" strokeWidth="1.2">
        <rect x="50" y="128" width="170" height="16" rx="2" />
        <line x1="80" y1="128" x2="80" y2="144" />
        <line x1="120" y1="128" x2="120" y2="144" />
        {/* handle */}
        <rect x="220" y="120" width="30" height="32" rx="4" />
        <line x1="228" y1="124" x2="228" y2="148" />
        <line x1="236" y1="124" x2="236" y2="148" />
        <line x1="244" y1="124" x2="244" y2="148" />
      </g>
      {/* scoop tip inside drum */}
      <g stroke="var(--ember)" strokeWidth="1.2">
        <path d="M50 132 L36 128 L34 144 L50 140 Z" fill="rgba(232,130,63,0.2)" />
      </g>
      {/* beans inside scoop */}
      <g fill="var(--paper)" stroke="none">
        <circle cx="40" cy="134" r="1.6" />
        <circle cx="44" cy="138" r="1.6" />
      </g>
      {/* spring coils */}
      <g stroke="var(--ember)" strokeWidth="0.9">
        <path d="M150 136 q 4 -6 8 0 q 4 6 8 0 q 4 -6 8 0 q 4 6 8 0" fill="none" />
      </g>
      {/* dimension */}
      <g stroke="rgba(243,236,225,0.4)" strokeWidth="0.6" strokeDasharray="2 2">
        <line x1="50" y1="80" x2="250" y2="80" />
      </g>
      <text x="150" y="220" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(243,236,225,0.55)" textAnchor="middle">Brass · sprung return · 210 mm reach</text>
    </svg>
  )
}

function SerialPlate({ cfg }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" strokeLinecap="round">
      {/* plate */}
      <rect x="30" y="40" width="220" height="160" rx="3" stroke="var(--paper)" strokeWidth="1.2"
            fill="rgba(243,236,225,0.02)" />
      <rect x="38" y="48" width="204" height="144" rx="1" stroke="rgba(243,236,225,0.22)" strokeWidth="0.6" />
      {/* mounting screws */}
      <g fill="var(--paper)">
        <circle cx="44" cy="54" r="2.4" />
        <circle cx="236" cy="54" r="2.4" />
        <circle cx="44" cy="186" r="2.4" />
        <circle cx="236" cy="186" r="2.4" />
      </g>
      <g fontFamily="JetBrains Mono">
        <text x="140" y="74" fontSize="13" fill="var(--ember)" textAnchor="middle" letterSpacing="3">KILNFORGE</text>
        <text x="140" y="88" fontSize="7"  fill="rgba(243,236,225,0.55)" textAnchor="middle" letterSpacing="4">FORGED INSTRUMENTS · TARRAGONA ES</text>
        <line x1="60" y1="98" x2="220" y2="98" stroke="rgba(243,236,225,0.25)" strokeWidth="0.5" />
        <text x="56"  y="118" fontSize="8"  fill="rgba(243,236,225,0.55)">MODEL</text>
        <text x="224" y="118" fontSize="11" fill="var(--paper)" textAnchor="end">{cfg.code}</text>
        <text x="56"  y="138" fontSize="8"  fill="rgba(243,236,225,0.55)">SERIAL</text>
        <text x="224" y="138" fontSize="11" fill="var(--paper)" textAnchor="end">№ 00041</text>
        <text x="56"  y="158" fontSize="8"  fill="rgba(243,236,225,0.55)">ASSEMBLED</text>
        <text x="224" y="158" fontSize="11" fill="var(--paper)" textAnchor="end">2026 · 04</text>
        <text x="56"  y="178" fontSize="8"  fill="rgba(243,236,225,0.55)">SIGNED</text>
        <text x="224" y="178" fontSize="10" fill="var(--ember)" textAnchor="end" fontStyle="italic">A. Folch</text>
      </g>
    </svg>
  )
}
