import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import Reveal from './Reveal.jsx'

const STAGES = [
  { week: 'W 01', code: 'CUT',      title: 'Cut',      body: 'Sheet 316 water-jet cut to template in-house. Tolerance held under 0.05 mm.', Icon: CutIcon },
  { week: 'W 03', code: 'WELD',     title: 'Weld',     body: 'Drum seams TIG-welded by hand, then trued on a five-axis lathe.',              Icon: WeldIcon },
  { week: 'W 05', code: 'FIT',      title: 'Assemble', body: 'Drivetrain, burner array, and panel are fitted by the engineer who signs it.', Icon: FitIcon },
  { week: 'W 08', code: 'CAL',      title: 'Calibrate',body: 'Every probe is verified against a reference roast. Curves are logged.',       Icon: CalIcon },
  { week: 'W 10', code: 'SIGN',     title: 'Sign',     body: 'Serial plate struck, tapped flat, mounted. Signed, numbered, shipped.',        Icon: SignIcon },
]

const ZONES = [
  { x: 18,  y: 60, n: 1, label: 'Sheet-metal bay' },
  { x: 40,  y: 70, n: 2, label: 'Drum welding' },
  { x: 62,  y: 75, n: 3, label: 'Assembly floor' },
  { x: 82,  y: 55, n: 4, label: 'Calibration room' },
]

export default function Craft() {
  return (
    <section className="craft" id="craft">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">04 &mdash; The Foundry</span>
          <h2 className="section-title">Hand-built, <i>not</i> automated.</h2>
          <p className="section-kicker">We assemble every machine in a single workshop in Tarragona. One team, one building, one book of signatures.</p>
        </Reveal>

        <Reveal className="craft-grid">
          <span className="section-num">&mdash;</span>
          <div className="craft-col">
            <p>
              Kilnforge began in 2011 as a side project between an industrial
              metallurgist and a café owner who kept breaking his roaster.
              Fourteen years later we are still thirty-two people in one
              building, welding drums by hand, machining gauge faces in-house,
              and shipping one finished roaster every working day.
            </p>
            <p>
              We have deliberately not scaled. Every machine that leaves our
              floor has been assembled by an engineer who you can phone. Every
              serial plate is struck on a 1962 press we restored ourselves.
              The paint is mixed on Tuesdays.
            </p>
          </div>
          <div className="craft-col">
            <p>
              You will not find our catalog in a big-box distributor. You will
              find our machines in roasteries in forty-one countries, in the back
              rooms of cafes run by people who know the name of their farmer.
              That is the scale we trust, and the only scale we are interested
              in serving well.
            </p>
            <div className="craft-figures">
              <Fig to={32}  suffix="." label="Engineers on the floor" />
              <Fig to={41}  suffix=""  label="Countries shipped" />
              <Fig to={10}  suffix="yr" italicSuffix label="Standard warranty" />
              <Fig to={1}   suffix="/day" italicSuffix label="Finished machines" />
            </div>
          </div>
        </Reveal>

        {/* ——— pull quote ——— */}
        <Reveal className="craft-quote">
          <span className="q-mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            If you can&rsquo;t hear the <i>first crack</i>
            from the other side of the room, you shouldn&rsquo;t be building the
            machine that <i>makes it</i>.
          </blockquote>
          <cite>
            <span className="mono">Head Engineer</span>
            <b>Aleix Folch</b>
            <span className="mono">Tarragona, 2015</span>
          </cite>
        </Reveal>

        {/* ——— build process ——— */}
        <Reveal className="build">
          <div className="build-head">
            <span className="section-num">04.1 &mdash; The Build</span>
            <h3 className="build-title">Ten weeks, <i>one machine</i>, one signature.</h3>
            <p className="build-kicker">From water-jet to serial plate, every Magnum follows the same path &mdash; and the same engineer tails it from week one to the truck.</p>
          </div>

          <BuildTrack />
        </Reveal>

        {/* ——— atelier with zone markers ——— */}
        <Reveal className="atelier">
          <span className="section-num">&mdash;</span>
          <div className="atelier-image" aria-hidden="true">
            <svg className="silhouette" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" fill="none" strokeWidth="1">
              <line x1="0" y1="60" x2="1200" y2="60" />
              <line x1="0" y1="90" x2="1200" y2="90" />
              {[100, 260, 420, 580, 740, 900, 1060].map(x => (
                <line key={x} x1={x} y1="60" x2={x} y2="90" />
              ))}
              {[{ x: 200, y: 140 }, { x: 500, y: 160 }, { x: 820, y: 140 }].map((l, i) => (
                <g key={i}>
                  <line x1={l.x} y1="90" x2={l.x} y2={l.y} />
                  <path d={`M${l.x - 20} ${l.y} L${l.x + 20} ${l.y} L${l.x + 15} ${l.y + 20} L${l.x - 15} ${l.y + 20} Z`} fill="rgba(243,236,225,0.1)" />
                  <circle cx={l.x} cy={l.y + 15} r="4" fill="var(--ember)" stroke="none" />
                </g>
              ))}
              <line x1="0" y1="440" x2="1200" y2="440" />
              <g transform="translate(100,280)">
                <rect x="0" y="0" width="120" height="80" rx="4" />
                <circle cx="60" cy="40" r="26" />
                <path d="M40 -25 L80 -25 L72 0 L48 0 Z" />
                <line x1="0" y1="100" x2="120" y2="100" />
              </g>
              <g transform="translate(260,310)">
                <circle cx="10" cy="0" r="10" />
                <rect x="2" y="-6" width="16" height="8" fill="rgba(26,21,17,0.6)" />
                <path d="M10 10 L10 60 M10 30 L-8 45 M10 30 L28 45" />
                <path d="M10 60 L-2 95 M10 60 L22 95" />
                <circle cx="-10" cy="48" r="1.5" fill="var(--ember)" stroke="none" />
              </g>
              <g transform="translate(420,270)">
                <rect x="0" y="0" width="150" height="100" rx="4" />
                <circle cx="75" cy="50" r="30" />
                <rect x="110" y="-20" width="22" height="20" />
                <line x1="0" y1="120" x2="150" y2="120" />
              </g>
              <g transform="translate(640,380)">
                <line x1="0" y1="0" x2="180" y2="0" />
                <line x1="10" y1="0" x2="10" y2="40" />
                <line x1="170" y1="0" x2="170" y2="40" />
                <rect x="30" y="-24" width="40" height="24" />
                <rect x="90" y="-18" width="30" height="18" />
                <circle cx="150" cy="-12" r="8" />
              </g>
              <g transform="translate(820,330)">
                <circle cx="10" cy="0" r="10" />
                <path d="M10 10 L10 55 M10 25 L-6 40 M10 25 L28 40" />
                <path d="M10 55 L0 90 M10 55 L20 90" />
              </g>
              <g transform="translate(950,230)">
                <rect x="0" y="0" width="140" height="180" rx="4" />
                <circle cx="70" cy="80" r="40" />
                <path d="M30 -30 L110 -30 L100 0 L40 0 Z" />
                <rect x="115" y="-40" width="20" height="40" />
                <line x1="0" y1="200" x2="140" y2="200" />
              </g>
            </svg>

            {/* zone markers */}
            {ZONES.map((z, i) => (
              <motion.span
                key={z.n}
                className="zone"
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              >
                <span className="zone-dot">{z.n}</span>
                <span className="zone-label mono">{z.label}</span>
              </motion.span>
            ))}

            <span className="label">Kilnforge Atelier &mdash; Carrer del Taller 14, Tarragona &middot; Est. 2011</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ——— Counter figure ——— */
function Fig({ to, suffix, italicSuffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctl = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (x) => setV(to < 5 ? x.toFixed(0) : Math.round(x)),
    })
    return () => ctl.stop()
  }, [inView, to])
  return (
    <div className="figure" ref={ref}>
      <b>
        {v}
        {italicSuffix ? <i>{suffix}</i> : suffix}
      </b>
      <small>{label}</small>
    </div>
  )
}

/* ——— Build track ——— */
function BuildTrack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="build-track" ref={ref}>
      <div className="build-rail">
        <motion.div
          className="build-rail-fill"
          initial={{ width: '0%' }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: 2.2, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>

      <ol className="build-stages">
        {STAGES.map((s, i) => {
          const { Icon } = s
          return (
            <motion.li
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="stage-node">
                <span className="stage-ring" aria-hidden="true" />
                <span className="stage-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <span className="stage-week mono">{s.week}</span>
              <div className="stage-icon">
                <Icon />
              </div>
              <h4 className="stage-title">{s.title}</h4>
              <span className="stage-code mono">{s.code}</span>
              <p className="stage-body">{s.body}</p>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

/* ——— stage icons (compact SVGs) ——— */
function CutIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeWidth="1.2">
      <rect x="10" y="30" width="44" height="20" stroke="currentColor" />
      <line x1="10" y1="40" x2="54" y2="40" strokeDasharray="2 3" stroke="currentColor" opacity="0.5" />
      <line x1="32" y1="6" x2="32" y2="32" stroke="var(--ember)" strokeWidth="1.6" />
      <path d="M26 12 L32 6 L38 12" stroke="var(--ember)" />
      <circle cx="32" cy="40" r="2.5" fill="var(--ember)" />
      <path d="M24 52 L28 58 M40 52 L36 58" stroke="var(--ember)" opacity="0.8" />
    </svg>
  )
}
function WeldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeWidth="1.2">
      <rect x="10" y="40" width="44" height="4" stroke="currentColor" />
      <path d="M28 10 L40 10 L36 36 L32 36 Z" stroke="currentColor" />
      <line x1="34" y1="10" x2="34" y2="36" stroke="currentColor" />
      <circle cx="34" cy="40" r="3" fill="var(--ember)" />
      <path d="M30 48 L34 56 M34 52 L38 60 M28 52 L26 58" stroke="var(--ember)" strokeWidth="1" />
      <path d="M22 28 L26 30 M42 28 L46 30" stroke="var(--ember)" opacity="0.7" />
    </svg>
  )
}
function FitIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeWidth="1.2">
      <circle cx="32" cy="32" r="16" stroke="currentColor" />
      <circle cx="32" cy="32" r="4" fill="var(--ember)" />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2
        return (
          <rect key={i}
            x={32 + Math.cos(a) * 16 - 3}
            y={32 + Math.sin(a) * 16 - 3}
            width="6" height="6"
            transform={`rotate(${(i * 60)} ${32 + Math.cos(a) * 16} ${32 + Math.sin(a) * 16})`}
            stroke="currentColor" />
        )
      })}
      <path d="M48 16 L56 12 L58 20" stroke="var(--ember)" />
      <line x1="48" y1="16" x2="38" y2="26" stroke="var(--ember)" />
    </svg>
  )
}
function CalIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeWidth="1.2">
      <circle cx="32" cy="32" r="20" stroke="currentColor" />
      <circle cx="32" cy="32" r="15" stroke="currentColor" opacity="0.35" strokeDasharray="2 2" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2
        const x1 = 32 + Math.cos(a) * 14
        const y1 = 32 + Math.sin(a) * 14
        const x2 = 32 + Math.cos(a) * 18
        const y2 = 32 + Math.sin(a) * 18
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" />
      })}
      <line x1="32" y1="32" x2="42" y2="22" stroke="var(--ember)" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="2.5" fill="var(--ember)" />
    </svg>
  )
}
function SignIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeWidth="1.2">
      <rect x="10" y="14" width="44" height="30" stroke="currentColor" />
      <line x1="14" y1="20" x2="50" y2="20" stroke="currentColor" opacity="0.4" />
      <line x1="14" y1="26" x2="50" y2="26" stroke="currentColor" opacity="0.3" />
      <path d="M16 38 C 22 30, 28 44, 34 36 S 44 32, 48 40" stroke="var(--ember)" strokeWidth="1.5" />
      <path d="M44 50 L54 46 L54 58 L44 58 Z" stroke="currentColor" />
      <path d="M46 52 L50 56" stroke="var(--ember)" />
    </svg>
  )
}
