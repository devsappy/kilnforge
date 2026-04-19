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
  { x: 14.2, y: 50.5, n: 1, label: 'Sheet-metal bay', sub: 'W 01 \u00b7 Cut' },
  { x: 35.8, y: 50.5, n: 2, label: 'Drum welding',    sub: 'W 03 \u00b7 Weld' },
  { x: 60.0, y: 50.5, n: 3, label: 'Assembly floor',  sub: 'W 05 \u00b7 Fit' },
  { x: 85.0, y: 34.3, n: 4, label: 'Calibration room', sub: 'W 08 \u00b7 Cal' },
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
            <svg className="silhouette" viewBox="0 0 1200 525" preserveAspectRatio="xMidYMid slice" fill="none" strokeWidth="1">
              <defs>
                <radialGradient id="lampGlow" cx="50%" cy="0%" r="80%">
                  <stop offset="0%" stopColor="rgba(255,184,120,0.35)" />
                  <stop offset="60%" stopColor="rgba(232,130,63,0.08)" />
                  <stop offset="100%" stopColor="rgba(232,130,63,0)" />
                </radialGradient>
                <radialGradient id="forgeGlow">
                  <stop offset="0%" stopColor="rgba(255,170,90,0.75)" />
                  <stop offset="55%" stopColor="rgba(232,130,63,0.2)" />
                  <stop offset="100%" stopColor="rgba(232,130,63,0)" />
                </radialGradient>
                <linearGradient id="floorSheen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(232,130,63,0.12)" />
                  <stop offset="100%" stopColor="rgba(232,130,63,0)" />
                </linearGradient>
                <pattern id="bpGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(243,236,225,0.035)" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* ——— blueprint grid & sheet corner ticks ——— */}
              <rect x="0" y="0" width="1200" height="525" fill="url(#bpGrid)" />
              <g stroke="rgba(243,236,225,0.35)" strokeWidth="1">
                <path d="M14 14 L14 36 M14 14 L36 14" />
                <path d="M1186 14 L1186 36 M1186 14 L1164 14" />
                <path d="M14 511 L14 489 M14 511 L36 511" />
                <path d="M1186 511 L1186 489 M1186 511 L1164 511" />
              </g>

              {/* ——— ceiling truss ——— */}
              <line x1="0" y1="52" x2="1200" y2="52" />
              <line x1="0" y1="84" x2="1200" y2="84" />
              {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200].map(x => (
                <line key={`tv-${x}`} x1={x} y1="52" x2={x} y2="84" />
              ))}
              {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map(x => (
                <g key={`tx-${x}`} opacity="0.4">
                  <line x1={x} y1="52" x2={x + 120} y2="84" />
                  <line x1={x + 120} y1="52" x2={x} y2="84" />
                </g>
              ))}

              {/* ——— overhead lamps (cable + hood + cone beam) ——— */}
              {[180, 440, 720, 1020].map((lx, i) => (
                <g key={`lamp-${i}`}>
                  <line x1={lx} y1="84" x2={lx} y2="138" />
                  <path d={`M${lx - 22} 138 L${lx + 22} 138 L${lx + 15} 162 L${lx - 15} 162 Z`} fill="rgba(16,11,8,0.95)" stroke="currentColor" />
                  <ellipse cx={lx} cy="163" rx="13" ry="2.4" fill="rgba(255,170,90,0.9)" stroke="none" />
                  {/* cone */}
                  <path d={`M${lx - 13} 163 L${lx - 120} 420 L${lx + 120} 420 L${lx + 13} 163 Z`} fill="url(#lampGlow)" stroke="none" />
                </g>
              ))}

              {/* ——— floor plane ——— */}
              <rect x="0" y="420" width="1200" height="105" fill="url(#floorSheen)" stroke="none" />
              <line x1="0" y1="420" x2="1200" y2="420" />
              <line x1="0" y1="422" x2="1200" y2="422" opacity="0.25" />
              {/* perspective tick marks on floor */}
              {Array.from({ length: 48 }).map((_, i) => (
                <line key={`ft-${i}`} x1={i * 25} y1="420" x2={i * 25} y2="428" opacity="0.18" />
              ))}
              {/* baseboard */}
              <line x1="0" y1="460" x2="1200" y2="460" opacity="0.15" strokeDasharray="6 6" />

              {/* ═══════════ STATION 1 — Sheet-metal bay (water-jet CNC) ═══════════ */}
              <g>
                {/* cut bed */}
                <rect x="40" y="358" width="210" height="62" stroke="currentColor" fill="rgba(18,13,9,0.55)" />
                <line x1="40" y1="374" x2="250" y2="374" opacity="0.3" />
                <line x1="40" y1="390" x2="250" y2="390" opacity="0.3" />
                <line x1="40" y1="406" x2="250" y2="406" opacity="0.3" />
                {/* steel sheet with cut paths */}
                <rect x="80" y="351" width="130" height="10" stroke="var(--ember)" strokeWidth="1.2" opacity="0.85" />
                <path d="M96 355 L120 355 M140 355 L170 355 M188 355 L204 355" stroke="var(--ember)" strokeWidth="0.6" strokeDasharray="1 2" />
                {/* gantry posts */}
                <line x1="60" y1="358" x2="60" y2="228" />
                <line x1="60" y1="358" x2="62" y2="228" opacity="0.4" />
                <line x1="230" y1="358" x2="230" y2="228" />
                <line x1="230" y1="358" x2="232" y2="228" opacity="0.4" />
                {/* gantry beam */}
                <rect x="52" y="222" width="186" height="12" stroke="currentColor" fill="rgba(16,11,8,0.9)" />
                <line x1="60" y1="228" x2="230" y2="228" opacity="0.4" />
                {/* cutting head */}
                <rect x="132" y="234" width="22" height="26" stroke="currentColor" fill="rgba(16,11,8,0.95)" />
                <line x1="143" y1="260" x2="143" y2="354" stroke="var(--ember)" strokeWidth="1.2" />
                <circle cx="143" cy="355" r="2.4" fill="var(--ember)" stroke="none" />
                <circle cx="143" cy="355" r="10" fill="url(#forgeGlow)" stroke="none" opacity="0.5" />
                {/* rail markings on gantry */}
                {[80, 100, 120, 170, 190, 210].map(x => (
                  <line key={`rm-${x}`} x1={x} y1="232" x2={x} y2="234" opacity="0.6" />
                ))}
                {/* control console */}
                <rect x="260" y="344" width="22" height="76" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <rect x="264" y="350" width="14" height="8" stroke="var(--ember)" opacity="0.6" />
                <circle cx="267" cy="368" r="1.6" fill="var(--ember)" />
                <circle cx="275" cy="368" r="1.6" stroke="currentColor" opacity="0.6" />
                {/* legs + feet */}
                <line x1="55" y1="420" x2="55" y2="420" />
              </g>
              {/* worker S1 */}
              <g transform="translate(310,360)">
                <circle cx="0" cy="-2" r="7" />
                <line x1="0" y1="5" x2="0" y2="34" />
                <line x1="0" y1="14" x2="-12" y2="22" />
                <line x1="0" y1="14" x2="14" y2="6" />
                <line x1="0" y1="34" x2="-6" y2="60" />
                <line x1="0" y1="34" x2="6" y2="60" />
                {/* clipboard */}
                <rect x="-18" y="20" width="10" height="12" stroke="currentColor" opacity="0.7" />
              </g>

              {/* ═══════════ STATION 2 — Drum welding rig ═══════════ */}
              <g>
                {/* rotator base */}
                <rect x="360" y="378" width="130" height="14" stroke="currentColor" fill="rgba(18,13,9,0.6)" />
                <line x1="360" y1="392" x2="360" y2="420" />
                <line x1="490" y1="392" x2="490" y2="420" />
                {/* support rollers */}
                <circle cx="385" cy="370" r="10" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <circle cx="465" cy="370" r="10" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <circle cx="385" cy="370" r="2" fill="currentColor" opacity="0.5" />
                <circle cx="465" cy="370" r="2" fill="currentColor" opacity="0.5" />
                {/* drum cylinder (perspective) */}
                <ellipse cx="370" cy="350" rx="12" ry="18" stroke="currentColor" fill="rgba(20,14,10,0.9)" />
                <rect x="370" y="332" width="110" height="36" stroke="currentColor" fill="rgba(20,14,10,0.75)" />
                <ellipse cx="480" cy="350" rx="12" ry="18" stroke="currentColor" fill="rgba(16,11,8,0.7)" />
                {/* seam band */}
                <line x1="370" y1="340" x2="480" y2="340" stroke="var(--ember)" opacity="0.5" strokeDasharray="3 2" />
                <line x1="370" y1="360" x2="480" y2="360" opacity="0.4" />
                {/* rotation arrow */}
                <path d="M370 320 A14 14 0 0 1 380 314" stroke="currentColor" opacity="0.45" />
                <path d="M380 314 L378 310 M380 314 L376 316" stroke="currentColor" opacity="0.45" />

                {/* welding arm gantry */}
                <line x1="430" y1="84" x2="430" y2="230" opacity="0.5" />
                <line x1="430" y1="230" x2="430" y2="295" />
                <rect x="424" y="228" width="12" height="14" stroke="currentColor" fill="rgba(16,11,8,0.9)" />
                <line x1="430" y1="295" x2="455" y2="335" />
                <line x1="430" y1="295" x2="428" y2="302" opacity="0.4" />
                {/* torch tip + arc */}
                <circle cx="456" cy="338" r="2.4" fill="var(--ember)" stroke="none" />
                <circle cx="456" cy="338" r="22" fill="url(#forgeGlow)" stroke="none" />
                {/* sparks */}
                {[[470, 352], [478, 356], [448, 360], [485, 345], [442, 354], [490, 352], [436, 344]].map(([sx, sy], i) => (
                  <line key={`sp-${i}`} x1="456" y1="338" x2={sx} y2={sy} stroke="var(--ember)" opacity="0.75" strokeWidth="0.8" />
                ))}
                {/* cable feed to torch */}
                <path d="M430 242 Q446 270 456 338" stroke="currentColor" opacity="0.4" />
                {/* gas cylinders beside rig */}
                <rect x="332" y="368" width="12" height="52" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <rect x="346" y="362" width="12" height="58" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <line x1="332" y1="374" x2="358" y2="374" opacity="0.3" />
              </g>
              {/* welder with mask */}
              <g transform="translate(520,360)">
                <rect x="-10" y="-12" width="20" height="15" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <line x1="-10" y1="-5" x2="10" y2="-5" stroke="var(--ember)" opacity="0.7" strokeWidth="1.4" />
                <line x1="0" y1="3" x2="0" y2="34" />
                <line x1="0" y1="12" x2="-16" y2="20" />
                <line x1="-16" y1="20" x2="-36" y2="12" opacity="0.85" />
                <line x1="0" y1="12" x2="14" y2="20" />
                <line x1="0" y1="34" x2="-6" y2="60" />
                <line x1="0" y1="34" x2="6" y2="60" />
              </g>

              {/* ═══════════ STATION 3 — Assembly floor ═══════════ */}
              <g>
                {/* cradle */}
                <line x1="625" y1="420" x2="625" y2="372" />
                <line x1="775" y1="420" x2="775" y2="372" />
                <line x1="620" y1="372" x2="780" y2="372" />
                <line x1="640" y1="372" x2="640" y2="420" opacity="0.35" />
                <line x1="760" y1="372" x2="760" y2="420" opacity="0.35" />
                {/* roaster body (partial build) */}
                <rect x="645" y="296" width="115" height="76" stroke="currentColor" fill="rgba(20,14,10,0.78)" />
                <line x1="645" y1="312" x2="760" y2="312" opacity="0.4" />
                {/* drum window */}
                <circle cx="702" cy="334" r="22" stroke="currentColor" />
                <circle cx="702" cy="334" r="13" stroke="var(--ember)" opacity="0.45" />
                <circle cx="702" cy="334" r="4" fill="var(--ember)" opacity="0.6" stroke="none" />
                <circle cx="702" cy="334" r="30" fill="url(#forgeGlow)" opacity="0.35" stroke="none" />
                {/* hopper */}
                <path d="M672 268 L744 268 L734 296 L682 296 Z" stroke="currentColor" fill="rgba(16,11,8,0.75)" />
                {/* chimney stub */}
                <rect x="748" y="262" width="14" height="34" stroke="currentColor" fill="rgba(16,11,8,0.8)" />
                {/* side panel gauges */}
                <circle cx="755" cy="330" r="4" stroke="currentColor" />
                <rect x="745" y="340" width="12" height="3" stroke="currentColor" opacity="0.5" />
                <rect x="745" y="347" width="8" height="3" stroke="currentColor" opacity="0.5" />

                {/* workbench + tools + parts */}
                <rect x="510" y="380" width="100" height="12" stroke="currentColor" fill="rgba(16,11,8,0.7)" />
                <line x1="520" y1="392" x2="520" y2="420" />
                <line x1="600" y1="392" x2="600" y2="420" />
                {/* pegboard */}
                <rect x="516" y="330" width="90" height="48" stroke="currentColor" opacity="0.45" />
                <line x1="528" y1="342" x2="540" y2="342" opacity="0.5" />
                <line x1="552" y1="344" x2="552" y2="360" opacity="0.5" />
                <circle cx="570" cy="350" r="4" stroke="currentColor" opacity="0.5" />
                <path d="M585 338 L595 348 L588 355 L578 345 Z" stroke="currentColor" opacity="0.5" />
                {/* tools on bench */}
                <rect x="520" y="372" width="20" height="8" stroke="currentColor" />
                <rect x="550" y="368" width="8" height="12" stroke="currentColor" />
                <line x1="570" y1="378" x2="594" y2="368" stroke="var(--ember)" opacity="0.7" />
                {/* parts crate on floor */}
                <rect x="790" y="402" width="46" height="18" stroke="currentColor" fill="rgba(16,11,8,0.75)" />
                <line x1="790" y1="410" x2="836" y2="410" opacity="0.4" />
                <line x1="800" y1="402" x2="800" y2="420" opacity="0.3" />
                <line x1="812" y1="402" x2="812" y2="420" opacity="0.3" />
                <line x1="824" y1="402" x2="824" y2="420" opacity="0.3" />
              </g>
              {/* assembler worker reaching into roaster */}
              <g transform="translate(620,340)">
                <circle cx="0" cy="-2" r="7" />
                <line x1="0" y1="5" x2="0" y2="32" />
                <line x1="0" y1="12" x2="26" y2="8" />
                <line x1="0" y1="12" x2="-12" y2="26" />
                <line x1="0" y1="32" x2="-6" y2="60" />
                <line x1="0" y1="32" x2="6" y2="60" />
              </g>

              {/* ═══════════ STATION 4 — Calibration room ═══════════ */}
              <g>
                {/* room enclosure hint */}
                <line x1="920" y1="170" x2="920" y2="420" opacity="0.2" strokeDasharray="4 4" />
                {/* finished roaster — larger, more refined */}
                <rect x="940" y="236" width="158" height="184" stroke="currentColor" fill="rgba(22,16,11,0.82)" />
                <line x1="940" y1="256" x2="1098" y2="256" opacity="0.35" />
                <line x1="940" y1="400" x2="1098" y2="400" opacity="0.35" />
                {/* drum door */}
                <circle cx="1020" cy="320" r="44" stroke="currentColor" />
                <circle cx="1020" cy="320" r="34" stroke="currentColor" opacity="0.4" strokeDasharray="2 3" />
                <circle cx="1020" cy="320" r="20" stroke="var(--ember)" opacity="0.6" />
                <circle cx="1020" cy="320" r="8" fill="var(--ember)" opacity="0.75" stroke="none" />
                <circle cx="1020" cy="320" r="60" fill="url(#forgeGlow)" opacity="0.55" stroke="none" />
                {/* door handle */}
                <line x1="1062" y1="320" x2="1072" y2="320" />
                <circle cx="1074" cy="320" r="3" stroke="currentColor" />
                {/* panel face with gauges */}
                <rect x="952" y="250" width="32" height="140" stroke="currentColor" fill="rgba(16,11,8,0.85)" />
                <circle cx="968" cy="270" r="9" stroke="currentColor" />
                <line x1="968" y1="270" x2="974" y2="264" stroke="var(--ember)" strokeWidth="1.2" />
                <circle cx="968" cy="270" r="1.2" fill="var(--ember)" stroke="none" />
                <circle cx="968" cy="294" r="6" stroke="currentColor" opacity="0.6" />
                <rect x="958" y="308" width="20" height="3" stroke="var(--ember)" opacity="0.85" />
                <rect x="958" y="316" width="14" height="3" stroke="currentColor" opacity="0.5" />
                <rect x="958" y="324" width="18" height="3" stroke="currentColor" opacity="0.5" />
                <rect x="958" y="338" width="20" height="30" stroke="currentColor" opacity="0.5" />
                {/* hopper */}
                <path d="M982 198 L1080 198 L1066 236 L996 236 Z" stroke="currentColor" fill="rgba(16,11,8,0.7)" />
                <line x1="1000" y1="216" x2="1062" y2="216" opacity="0.3" />
                {/* chimney */}
                <rect x="1082" y="174" width="20" height="62" stroke="currentColor" fill="rgba(16,11,8,0.75)" />
                <rect x="1080" y="170" width="24" height="6" stroke="currentColor" />
                {/* steam wisp */}
                <path d="M1092 170 Q1086 152 1094 134 Q1102 118 1090 100" stroke="rgba(243,236,225,0.22)" />
                <path d="M1088 168 Q1082 148 1088 130" stroke="rgba(243,236,225,0.14)" />

                {/* calibration lectern */}
                <rect x="1128" y="332" width="40" height="28" stroke="currentColor" fill="rgba(16,11,8,0.88)" />
                <rect x="1133" y="337" width="30" height="18" stroke="var(--ember)" opacity="0.55" />
                {/* waveform on screen */}
                <path d="M1135 348 L1139 344 L1143 350 L1147 343 L1151 349 L1155 345 L1159 348" stroke="var(--ember)" opacity="0.85" strokeWidth="0.8" />
                <line x1="1140" y1="360" x2="1156" y2="360" />
                <line x1="1148" y1="360" x2="1148" y2="420" />
                {/* probe wire from lectern into roaster */}
                <path d="M1128 345 Q1115 336 1100 320" stroke="currentColor" opacity="0.5" />
                <circle cx="1100" cy="320" r="1.8" fill="var(--ember)" stroke="none" />
              </g>

              {/* ═══════════ leader lines from zone markers to machines ═══════════ */}
              <g strokeDasharray="2 3">
                <path d="M170 268 L170 330 L150 346" stroke="var(--ember)" opacity="0.6" />
                <circle cx="170" cy="268" r="2" fill="var(--ember)" stroke="none" />
                <path d="M430 268 L430 310 L452 334" stroke="var(--ember)" opacity="0.6" />
                <circle cx="430" cy="268" r="2" fill="var(--ember)" stroke="none" />
                <path d="M720 268 L710 300 L702 322" stroke="var(--ember)" opacity="0.6" />
                <circle cx="720" cy="268" r="2" fill="var(--ember)" stroke="none" />
                <path d="M1020 180 L1020 238 L1020 292" stroke="var(--ember)" opacity="0.6" />
                <circle cx="1020" cy="180" r="2" fill="var(--ember)" stroke="none" />
              </g>

              {/* ═══════════ technical drawing marginalia ═══════════ */}
              <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="rgba(243,236,225,0.45)" stroke="none" letterSpacing="1.2">
                <text x="26" y="32">PLOT 14 / TARRAGONA</text>
                <text x="26" y="46" opacity="0.6">PLAN &middot; 1:200</text>
                <text x="1174" y="32" textAnchor="end">SHEET 04 / 09</text>
                <text x="1174" y="46" textAnchor="end" opacity="0.6">REV B</text>
              </g>
              {/* scale bar bottom-right */}
              <g stroke="rgba(243,236,225,0.45)">
                <line x1="1050" y1="498" x2="1174" y2="498" />
                <line x1="1050" y1="494" x2="1050" y2="502" />
                <line x1="1081" y1="495" x2="1081" y2="501" />
                <line x1="1112" y1="495" x2="1112" y2="501" />
                <line x1="1143" y1="495" x2="1143" y2="501" />
                <line x1="1174" y1="494" x2="1174" y2="502" />
              </g>
              <text x="1050" y="489" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="8" fill="rgba(243,236,225,0.45)" stroke="none" letterSpacing="1.2">0   5   10 m</text>
              {/* north arrow bottom-left */}
              <g transform="translate(44,490)" stroke="rgba(243,236,225,0.45)">
                <circle cx="0" cy="0" r="10" />
                <path d="M0 -12 L3 0 L0 4 L-3 0 Z" fill="rgba(243,236,225,0.55)" stroke="none" />
                <text x="0" y="-14" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="8" fill="rgba(243,236,225,0.55)" stroke="none" textAnchor="middle" letterSpacing="1.2">N</text>
              </g>
            </svg>

            {/* zone markers */}
            {ZONES.map((z, i) => (
              <motion.span
                key={z.n}
                className="zone"
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="zone-dot">{z.n}</span>
                <span className="zone-label mono">
                  <b>{z.label}</b>
                  <em>{z.sub}</em>
                </span>
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
const RAIL_DURATION = 2.6
const STAGE_COUNT = STAGES.length
const nodeArrival = (i) => (i / (STAGE_COUNT - 1)) * RAIL_DURATION

function BuildTrack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <div className="build-track" ref={ref}>
      <div className="build-rail">
        <motion.div
          className="build-rail-fill"
          initial={{ width: '0%' }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: RAIL_DURATION, ease: [0.2, 0.7, 0.2, 1] }}
        />
        <motion.span
          className="build-rail-pulse"
          aria-hidden="true"
          initial={{ left: '0%', opacity: 0 }}
          animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: RAIL_DURATION, ease: [0.2, 0.7, 0.2, 1], times: [0, 0.08, 0.92, 1] }}
        />
      </div>

      <ol className="build-stages">
        {STAGES.map((s, i) => {
          const { Icon } = s
          const arrival = nodeArrival(i)
          return (
            <li key={s.code}>
              <motion.div
                className="stage-node"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: arrival, type: 'spring', stiffness: 420, damping: 14, mass: 0.6 }}
              >
                <motion.span
                  className="stage-ring"
                  aria-hidden="true"
                  initial={{ boxShadow: '0 0 0 rgba(232,130,63,0)' }}
                  animate={inView ? {
                    boxShadow: [
                      '0 0 0 rgba(232,130,63,0)',
                      '0 0 18px rgba(232,130,63,0.9)',
                      '0 0 6px rgba(232,130,63,0.4)',
                    ],
                  } : {}}
                  transition={{ delay: arrival, duration: 0.9, times: [0, 0.35, 1] }}
                />
                <motion.span
                  className="stage-num"
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: arrival + 0.15, duration: 0.45 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
              </motion.div>

              <motion.div
                className="stage-content"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: arrival + 0.2, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="stage-week mono">{s.week}</span>
                <motion.div
                  className="stage-icon"
                  initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ delay: arrival + 0.25, type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Icon />
                </motion.div>
                <h4 className="stage-title">{s.title}</h4>
                <span className="stage-code mono">{s.code}</span>
                <p className="stage-body">{s.body}</p>
              </motion.div>
            </li>
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
