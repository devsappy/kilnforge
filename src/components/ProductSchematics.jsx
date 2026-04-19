// Large technical-drawing style SVGs for the catalog stage.
// Each stands alone at viewBox 600×520 and is hand-tuned with embedded
// animations (CSS keyframes declared in styles.css: .psch-*).

const refGrey = 'rgba(243,236,225,0.22)'
const dim     = 'rgba(243,236,225,0.55)'
const paper   = 'var(--paper)'
const ember   = 'var(--ember)'

// ———————————————————————————————————————————— 01  SHOP ROASTER
export function Roaster() {
  return (
    <svg className="psch psch-roaster" viewBox="0 0 600 520" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* reference frame */}
      <g stroke={refGrey} strokeWidth="0.8" strokeDasharray="3 4">
        <line x1="20"  y1="270" x2="580" y2="270" />
        <line x1="300" y1="20"  x2="300" y2="500" />
        <circle cx="300" cy="270" r="230" />
      </g>

      {/* chimney + rising smoke */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M360 50 L360 160 L420 160 L420 50 Z" />
        <line x1="375" y1="50" x2="375" y2="160" />
        <line x1="405" y1="50" x2="405" y2="160" />
        <path d="M350 50 L430 50 L425 32 L355 32 Z" />
      </g>
      <g className="psch-smoke" stroke={ember} fill="none" strokeWidth="1">
        <path d="M380 30 C 376 18, 390 12, 382 0"  opacity="0.7" />
        <path d="M392 30 C 398 16, 384 8,  395 -4" opacity="0.45"/>
        <path d="M368 30 C 362 20, 374 10, 366 -2" opacity="0.3" />
      </g>

      {/* hopper */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M150 40 L280 40 L258 155 L182 155 Z" />
        <line x1="162" y1="58" x2="268" y2="58" />
        <path d="M205 155 L205 185 L245 185 L245 155" />
        {/* beans sliding down */}
        <circle className="psch-bean-a" cx="222" cy="170" r="2.2" fill={paper} stroke="none" />
        <circle className="psch-bean-b" cx="228" cy="175" r="2.2" fill={paper} stroke="none" />
      </g>

      {/* drum housing */}
      <rect x="130" y="180" width="340" height="190" rx="6" stroke={paper} strokeWidth="1.2" />
      <rect x="138" y="188" width="324" height="174" rx="4" stroke={refGrey} strokeWidth="0.8" strokeDasharray="2 3" />

      {/* spinning drum assembly */}
      <g className="psch-drum" style={{ transformOrigin: '300px 275px' }}>
        <circle cx="300" cy="275" r="90" stroke={ember} strokeWidth="1.2" />
        <circle cx="300" cy="275" r="72" stroke={ember} strokeWidth="0.7" opacity="0.55" />
        <line x1="300" y1="185" x2="300" y2="365" stroke={ember} strokeWidth="0.8" opacity="0.5" />
        <line x1="210" y1="275" x2="390" y2="275" stroke={ember} strokeWidth="0.8" opacity="0.5" />
        <line x1="236" y1="211" x2="364" y2="339" stroke={ember} strokeWidth="0.6" opacity="0.35" />
        <line x1="364" y1="211" x2="236" y2="339" stroke={ember} strokeWidth="0.6" opacity="0.35" />
        {/* interior vanes */}
        <path d="M300 215 L308 222" stroke={paper} strokeWidth="1" />
        <path d="M360 265 L352 258" stroke={paper} strokeWidth="1" />
        <path d="M300 335 L292 328" stroke={paper} strokeWidth="1" />
        <path d="M240 285 L248 292" stroke={paper} strokeWidth="1" />
        {/* beans tumbling inside (follow drum rotation) */}
        <circle cx="280" cy="320" r="2.2" fill={paper} stroke="none" />
        <circle cx="315" cy="315" r="2"   fill={paper} stroke="none" />
        <circle cx="332" cy="298" r="2.2" fill={paper} stroke="none" />
        <circle cx="270" cy="298" r="1.8" fill={paper} stroke="none" />
        <circle cx="295" cy="330" r="1.8" fill={paper} stroke="none" />
        <circle cx="250" cy="280" r="2"   fill={paper} stroke="none" />
        <circle cx="258" cy="260" r="1.8" fill={paper} stroke="none" />
        <circle cx="340" cy="275" r="1.8" fill={paper} stroke="none" />
        <circle cx="300" cy="275" r="3" fill={ember} stroke="none" />
      </g>

      {/* viewing trier */}
      <g stroke={paper} strokeWidth="1.2">
        <rect x="150" y="253" width="20" height="45" rx="2" />
        <line x1="130" y1="275" x2="150" y2="275" />
        <circle cx="125" cy="275" r="5" />
      </g>

      {/* control panel */}
      <g transform="translate(360,310)">
        <rect x="0" y="0" width="96" height="50" rx="2" stroke={paper} strokeWidth="1.2" />
        <g stroke={paper} strokeWidth="0.9">
          <circle cx="18" cy="25" r="10" />
          <circle cx="48" cy="25" r="10" />
          <circle cx="78" cy="25" r="10" />
        </g>
        <line className="psch-needle-a" x1="18" y1="25" x2="24" y2="18" stroke={ember} strokeWidth="1.2" />
        <line className="psch-needle-b" x1="48" y1="25" x2="44" y2="16" stroke={ember} strokeWidth="1.2" />
        <line className="psch-needle-c" x1="78" y1="25" x2="84" y2="28" stroke={ember} strokeWidth="1.2" />
        <circle cx="18" cy="25" r="1.4" fill={paper} />
        <circle cx="48" cy="25" r="1.4" fill={paper} />
        <circle cx="78" cy="25" r="1.4" fill={paper} />
      </g>

      {/* burner flames */}
      <g fill={ember} stroke="none">
        <path className="psch-flame psch-f1" d="M214 378 Q 219 396 214 414 Q 209 396 214 378 Z" />
        <path className="psch-flame psch-f2" d="M248 378 Q 253 398 248 418 Q 243 398 248 378 Z" />
        <path className="psch-flame psch-f3" d="M288 378 Q 294 400 288 420 Q 282 400 288 378 Z" />
        <path className="psch-flame psch-f4" d="M328 378 Q 333 398 328 418 Q 323 398 328 378 Z" />
        <path className="psch-flame psch-f5" d="M362 378 Q 367 396 362 414 Q 357 396 362 378 Z" />
      </g>

      {/* cooling tray with stirrer */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M80 415 Q 80 465 145 465 L 240 465 Q 285 465 285 415 Z" />
        <line x1="80" y1="432" x2="285" y2="432" />
        <g className="psch-stirrer" style={{ transformOrigin: '182px 415px' }}>
          <line x1="182" y1="415" x2="182" y2="455" stroke={ember} strokeWidth="1.1" />
          <path d="M150 445 L214 445" stroke={ember} strokeWidth="1.1" />
        </g>
        <circle cx="120" cy="450" r="2" fill={paper} stroke="none" />
        <circle cx="138" cy="456" r="2" fill={paper} stroke="none" />
        <circle cx="218" cy="453" r="2" fill={paper} stroke="none" />
        <circle cx="240" cy="448" r="2" fill={paper} stroke="none" />
        <circle cx="158" cy="460" r="2" fill={paper} stroke="none" />
      </g>

      {/* frame legs */}
      <g stroke={paper} strokeWidth="1.2">
        <line x1="160" y1="465" x2="160" y2="505" />
        <line x1="470" y1="370" x2="470" y2="505" />
        <line x1="310" y1="465" x2="310" y2="505" />
        <line x1="60"  y1="505" x2="550" y2="505" />
      </g>

      {/* dimension callouts */}
      <g stroke={dim} strokeWidth="0.7" strokeDasharray="2 3">
        <line x1="490" y1="180" x2="540" y2="180" />
        <line x1="490" y1="370" x2="540" y2="370" />
        <line x1="535" y1="180" x2="535" y2="370" />
      </g>
      <text x="544" y="278" fill={dim} fontFamily="JetBrains Mono" fontSize="9">420</text>

      {/* heat shimmer */}
      <g className="psch-shimmer" stroke={ember} strokeWidth="0.8" fill="none" opacity="0.5">
        <path d="M200 180 Q 210 172 200 165 Q 190 158 200 150" />
        <path d="M300 180 Q 310 172 300 165 Q 290 158 300 150" />
        <path d="M400 180 Q 410 172 400 165 Q 390 158 400 150" />
      </g>
    </svg>
  )
}

// ———————————————————————————————————————————— 02  AFTERBURNER
export function Afterburner() {
  return (
    <svg className="psch psch-afterburner" viewBox="0 0 600 520" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* reference */}
      <g stroke={refGrey} strokeWidth="0.8" strokeDasharray="3 4">
        <line x1="300" y1="20"  x2="300" y2="500" />
        <line x1="20"  y1="260" x2="580" y2="260" />
      </g>

      {/* dirty inlet duct (left) */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M20 200 L180 200 L180 320 L20 320 Z" />
        <line x1="20"  y1="260" x2="180" y2="260" />
        <path d="M180 240 L215 240 L215 280 L180 280" />
      </g>
      {/* dirty particles flowing in */}
      <g fill={dim}>
        <circle className="psch-dirty d1" cx="40"  cy="255" r="2" />
        <circle className="psch-dirty d2" cx="70"  cy="262" r="2.4" />
        <circle className="psch-dirty d3" cx="100" cy="253" r="1.8" />
        <circle className="psch-dirty d4" cx="130" cy="265" r="2" />
      </g>

      {/* tower body */}
      <rect x="235" y="60" width="130" height="380" rx="6" stroke={paper} strokeWidth="1.2" />
      <rect x="243" y="68" width="114" height="364" rx="4" stroke={refGrey} strokeWidth="0.8" strokeDasharray="2 3" />
      {/* insulation hatches */}
      <g stroke={refGrey} strokeWidth="0.7">
        {Array.from({ length: 18 }, (_, i) => (
          <line key={i} x1={243} y1={72 + i * 20} x2={253} y2={82 + i * 20} />
        ))}
        {Array.from({ length: 18 }, (_, i) => (
          <line key={i + 100} x1={347} y1={72 + i * 20} x2={357} y2={82 + i * 20} />
        ))}
      </g>

      {/* dome top */}
      <path d="M235 60 Q 300 20 365 60" stroke={paper} strokeWidth="1.2" />

      {/* clean outlet */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M300 20 L300 -10" />
        <path d="M286 -10 L314 -10 L308 -28 L292 -28 Z" />
      </g>
      <g className="psch-clean" stroke={paper} fill="none" strokeWidth="1" opacity="0.7">
        <path d="M300 -30 C 295 -45, 305 -55, 298 -70" />
      </g>

      {/* catalytic matrix honeycomb (middle) */}
      <g stroke={ember} strokeWidth="0.9">
        <rect x="255" y="180" width="90" height="80" rx="2" />
        {Array.from({ length: 4 }).map((_, r) => (
          Array.from({ length: 5 }).map((__, c) => {
            const x = 262 + c * 16
            const y = 188 + r * 18 + (c % 2 ? 9 : 0)
            return <polygon key={`${r}-${c}`} points={`${x},${y} ${x + 8},${y - 4} ${x + 16},${y} ${x + 16},${y + 8} ${x + 8},${y + 12} ${x},${y + 8}`} opacity="0.65" />
          })
        ))}
      </g>

      {/* heat-exchanger coil above matrix */}
      <g stroke={paper} strokeWidth="1.1" fill="none">
        <path d="M260 120 Q 280 100 300 120 Q 320 140 340 120" />
        <path d="M260 140 Q 280 120 300 140 Q 320 160 340 140" />
        <path d="M260 160 Q 280 140 300 160 Q 320 180 340 160" />
      </g>

      {/* burner at bottom */}
      <g>
        <rect x="260" y="340" width="80" height="30" rx="3" stroke={paper} strokeWidth="1.2" />
        <circle cx="285" cy="355" r="3" fill={ember} stroke="none" className="psch-pilot" />
        <circle cx="315" cy="355" r="3" fill={ember} stroke="none" className="psch-pilot" />
        {/* gas feed */}
        <path d="M300 370 L300 410 L360 410" stroke={paper} strokeWidth="1.2" />
        <circle cx="360" cy="410" r="4" stroke={paper} strokeWidth="1" />
      </g>

      {/* sensor probes */}
      <g stroke={paper} strokeWidth="1">
        <path d="M365 100 L410 100" />
        <circle cx="420" cy="100" r="10" />
        <line x1="420" y1="100" x2="424" y2="94" stroke={ember} />
        <path d="M365 220 L410 220" />
        <circle cx="420" cy="220" r="10" />
        <line x1="420" y1="220" x2="424" y2="215" stroke={ember} />
      </g>

      {/* flow arrows */}
      <g stroke={ember} strokeWidth="1" fill="none">
        <path d="M200 260 L222 260" />
        <path d="M218 256 L222 260 L218 264" />
        <path d="M300 440 L300 420" />
        <path d="M296 424 L300 420 L304 424" />
        <path d="M300 60 L300 40" />
        <path d="M296 44 L300 40 L304 44" />
      </g>

      {/* stand */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M225 440 L375 440 L375 460 L225 460 Z" />
        <line x1="245" y1="460" x2="245" y2="495" />
        <line x1="355" y1="460" x2="355" y2="495" />
        <line x1="220" y1="495" x2="380" y2="495" />
      </g>

      {/* dimension */}
      <g stroke={dim} strokeWidth="0.7" strokeDasharray="2 3">
        <line x1="365" y1="60"  x2="495" y2="60" />
        <line x1="365" y1="440" x2="495" y2="440" />
        <line x1="490" y1="60"  x2="490" y2="440" />
      </g>
      <text x="500" y="253" fill={dim} fontFamily="JetBrains Mono" fontSize="9">2950</text>
    </svg>
  )
}

// ———————————————————————————————————————————— 03  DESTONER
export function Destoner() {
  return (
    <svg className="psch psch-destoner" viewBox="0 0 600 520" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* reference */}
      <g stroke={refGrey} strokeWidth="0.8" strokeDasharray="3 4">
        <line x1="300" y1="20"  x2="300" y2="500" />
        <line x1="20"  y1="260" x2="580" y2="260" />
      </g>

      {/* top hopper with beans */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M160 40 L440 40 L400 140 L200 140 Z" />
        <line x1="180" y1="70" x2="420" y2="70" />
        <line x1="200" y1="100" x2="400" y2="100" />
      </g>
      {/* beans inside hopper */}
      <g fill={paper} stroke="none">
        {Array.from({ length: 22 }).map((_, i) => (
          <circle key={i}
            cx={210 + (i % 7) * 26 + (i % 2 ? 4 : 0)}
            cy={55 + Math.floor(i / 7) * 14}
            r="2" opacity={0.75 - (i % 3) * 0.08} />
        ))}
      </g>

      {/* separation column */}
      <g stroke={paper} strokeWidth="1.2">
        <rect x="230" y="140" width="140" height="220" rx="3" />
        {/* mesh divisions */}
        <line x1="230" y1="190" x2="370" y2="190" strokeDasharray="2 2" />
        <line x1="230" y1="240" x2="370" y2="240" strokeDasharray="2 2" />
        <line x1="230" y1="290" x2="370" y2="290" strokeDasharray="2 2" />
        <line x1="230" y1="340" x2="370" y2="340" strokeDasharray="2 2" />
      </g>

      {/* vibration indicators */}
      <g className="psch-vibrate" stroke={ember} strokeWidth="0.8">
        <path d="M220 220 L215 220 M220 230 L215 230 M220 240 L215 240" />
        <path d="M380 220 L385 220 M380 230 L385 230 M380 240 L385 240" />
      </g>

      {/* internal falling beans (good) */}
      <g fill={paper} stroke="none">
        <circle className="psch-fall f1" cx="275" cy="170" r="2" />
        <circle className="psch-fall f2" cx="290" cy="200" r="1.8" />
        <circle className="psch-fall f3" cx="310" cy="230" r="2" />
        <circle className="psch-fall f4" cx="325" cy="260" r="1.8" />
        <circle className="psch-fall f5" cx="295" cy="290" r="2" />
        <circle className="psch-fall f6" cx="310" cy="320" r="2.2" />
        <circle className="psch-fall f7" cx="280" cy="340" r="1.8" />
      </g>

      {/* stones (irregular, rejected) */}
      <g fill="var(--deep)" stroke={paper} strokeWidth="0.6">
        <polygon className="psch-stone s1" points="360,200 368,196 372,204 365,208" />
        <polygon className="psch-stone s2" points="365,270 374,266 370,278 362,276" />
      </g>

      {/* reject chute */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M370 215 L470 215 L470 265 L370 265" />
        <path d="M470 240 L510 240 L510 320 L490 320" stroke={ember} />
        <path d="M500 312 L490 320 L500 324" stroke={ember} fill="none"/>
      </g>
      {/* stones in reject path */}
      <g fill="var(--deep)" stroke={paper} strokeWidth="0.5">
        <polygon points="430,232 438,228 440,240 432,242" />
        <polygon points="458,234 466,230 468,242 460,244" />
        <polygon points="500,298 508,294 506,306 498,304" />
      </g>

      {/* fan at bottom */}
      <g>
        <circle cx="300" cy="400" r="28" stroke={paper} strokeWidth="1.2" />
        <g className="psch-fan" style={{ transformOrigin: '300px 400px' }}>
          <path d="M300 372 Q 312 384 300 400 Q 288 384 300 372" stroke={ember} fill="none" strokeWidth="1" />
          <path d="M328 400 Q 316 412 300 400 Q 316 388 328 400" stroke={ember} fill="none" strokeWidth="1" />
          <path d="M300 428 Q 288 416 300 400 Q 312 416 300 428" stroke={ember} fill="none" strokeWidth="1" />
          <path d="M272 400 Q 284 388 300 400 Q 284 412 272 400" stroke={ember} fill="none" strokeWidth="1" />
        </g>
        <circle cx="300" cy="400" r="4" fill={ember} stroke="none" />
      </g>

      {/* airflow arrows (upward) */}
      <g stroke={ember} strokeWidth="0.9" fill="none" opacity="0.7">
        <path d="M260 380 L260 360" /><path d="M256 364 L260 360 L264 364" />
        <path d="M340 380 L340 360" /><path d="M336 364 L340 360 L344 364" />
      </g>

      {/* output funnel + clean beans */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M240 440 L360 440 L335 485 L265 485 Z" />
      </g>
      <g fill={paper} stroke="none">
        <circle cx="285" cy="475" r="2" />
        <circle cx="300" cy="479" r="2" />
        <circle cx="315" cy="472" r="2" />
      </g>

      {/* readout panel */}
      <g transform="translate(20,360)">
        <rect x="0" y="0" width="90" height="56" rx="3" stroke={paper} strokeWidth="1.2" />
        <rect x="8" y="8" width="74" height="20" stroke={ember} strokeWidth="0.8" />
        <text x="14" y="22" fill={ember} fontFamily="JetBrains Mono" fontSize="11">1620 kg/h</text>
        <circle cx="16" cy="42" r="5" stroke={ember} strokeWidth="0.8" />
        <circle cx="16" cy="42" r="1.5" fill={ember} />
        <circle cx="36" cy="42" r="5" stroke={paper} strokeWidth="0.8" />
        <text x="50" y="45" fill={dim} fontFamily="JetBrains Mono" fontSize="8">AUTO</text>
      </g>

      {/* frame */}
      <g stroke={paper} strokeWidth="1.2">
        <line x1="220" y1="485" x2="220" y2="505" />
        <line x1="380" y1="485" x2="380" y2="505" />
        <line x1="200" y1="505" x2="400" y2="505" />
      </g>
    </svg>
  )
}

// ———————————————————————————————————————————— 04  GREEN HANDLING
export function Silos() {
  return (
    <svg className="psch psch-silos" viewBox="0 0 600 520" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* reference */}
      <g stroke={refGrey} strokeWidth="0.8" strokeDasharray="3 4">
        <line x1="20" y1="420" x2="580" y2="420" />
      </g>

      {/* Silo A */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M60 80 L180 80 L180 320 L160 345 L80 345 L60 320 Z" />
        <line x1="60" y1="110" x2="180" y2="110" />
        <line x1="60" y1="180" x2="180" y2="180" />
        <line x1="60" y1="250" x2="180" y2="250" />
        {/* level window */}
        <rect x="70" y="130" width="10" height="180" stroke={ember} strokeWidth="0.9" />
        <rect x="70" y="210" width="10" height="100" fill={ember} stroke="none" opacity="0.85" />
      </g>
      {/* beans inside Silo A */}
      <g fill={paper} stroke="none">
        {Array.from({ length: 28 }).map((_, i) => (
          <circle key={i}
            cx={92 + (i % 6) * 14}
            cy={280 + Math.floor(i / 6) * 11}
            r="1.8" opacity="0.82" />
        ))}
      </g>
      {/* inlet A */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M120 80 L120 50 L90 50" />
        <path d="M90 40 L60 40 L60 60 L90 60 Z" />
      </g>
      <circle className="psch-drop da" cx="120" cy="92" r="2" fill={ember} stroke="none" />

      {/* Silo B */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M230 80 L350 80 L350 320 L330 345 L250 345 L230 320 Z" />
        <line x1="230" y1="110" x2="350" y2="110" />
        <line x1="230" y1="180" x2="350" y2="180" />
        <line x1="230" y1="250" x2="350" y2="250" />
        <rect x="240" y="130" width="10" height="180" stroke={ember} strokeWidth="0.9" />
        <rect x="240" y="250" width="10" height="60" fill={ember} stroke="none" opacity="0.85" />
      </g>
      <g fill={paper} stroke="none">
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={i}
            cx={262 + (i % 6) * 14}
            cy={300 + Math.floor(i / 6) * 11}
            r="1.8" opacity="0.82" />
        ))}
      </g>
      <g stroke={paper} strokeWidth="1.2">
        <path d="M290 80 L290 50 L260 50" />
        <path d="M260 40 L230 40 L230 60 L260 60 Z" />
      </g>
      <circle className="psch-drop db" cx="290" cy="92" r="2" fill={ember} stroke="none" />

      {/* drop valves */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M110 345 L130 345 L120 365 Z" />
        <path d="M280 345 L300 345 L290 365 Z" />
      </g>

      {/* auger conveyor */}
      <g stroke={paper} strokeWidth="1.2">
        <rect x="60" y="365" width="460" height="28" rx="3" />
        {/* spiral inside (animated) */}
        <g className="psch-auger" style={{ transformOrigin: 'center' }}>
          {Array.from({ length: 22 }).map((_, i) => (
            <path key={i}
              d={`M${76 + i * 20} 368 Q ${86 + i * 20} 379 ${76 + i * 20} 390`}
              stroke={ember} strokeWidth="0.9" fill="none" opacity="0.7" />
          ))}
        </g>
        {/* motor */}
        <rect x="520" y="362" width="40" height="34" rx="3" />
        <circle cx="540" cy="379" r="9" />
        <line x1="540" y1="379" x2="545" y2="375" stroke={ember} />
      </g>

      {/* de-bagger station */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M400 150 L480 150 L500 260 L380 260 Z" />
        <line x1="400" y1="180" x2="480" y2="180" />
        <line x1="390" y1="220" x2="490" y2="220" />
        {/* jute bag silhouette */}
        <path d="M420 110 L460 110 L466 150 L414 150 Z" />
        <line x1="420" y1="120" x2="460" y2="120" />
        <line x1="430" y1="100" x2="450" y2="100" />
        {/* blades */}
        <path d="M410 260 L390 280 L400 290 L420 272" stroke={ember} />
        <path d="M470 260 L490 280 L480 290 L460 272" stroke={ember} />
      </g>

      {/* frame legs */}
      <g stroke={paper} strokeWidth="1.2">
        <line x1="60"  y1="395" x2="60"  y2="420" />
        <line x1="200" y1="395" x2="200" y2="420" />
        <line x1="380" y1="395" x2="380" y2="420" />
        <line x1="520" y1="395" x2="520" y2="420" />
        <line x1="40"  y1="420" x2="540" y2="420" />
      </g>

      {/* capacity plate */}
      <g transform="translate(380,60)">
        <rect x="0" y="0" width="90" height="36" rx="2" stroke={paper} strokeWidth="1" />
        <text x="8"  y="14" fill={dim}   fontFamily="JetBrains Mono" fontSize="8">LOT A · COLOMBIA</text>
        <text x="8"  y="28" fill={ember} fontFamily="JetBrains Mono" fontSize="11">2,450 KG</text>
      </g>
    </svg>
  )
}

// ———————————————————————————————————————————— 05  ACCESSORIES
export function Accessories() {
  return (
    <svg className="psch psch-access" viewBox="0 0 600 520" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* ruler top */}
      <g stroke={refGrey} strokeWidth="0.7">
        <line x1="20" y1="40" x2="580" y2="40" />
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={i} x1={40 + i * 20} y1="40" x2={40 + i * 20} y2={i % 5 === 0 ? 54 : 48} />
        ))}
      </g>
      <text x="40" y="70" fill={dim} fontFamily="JetBrains Mono" fontSize="9">SCALE · 1:1 mm</text>

      {/* TRIER — laid across */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M60 170 L470 140" />
        <path d="M60 178 L468 148" />
        <path d="M470 135 L500 140 L498 158 L468 152 Z" />
        <line x1="485" y1="138" x2="483" y2="156" />
        <rect x="40" y="165" width="22" height="20" rx="2" />
        <line x1="46" y1="170" x2="46" y2="182" />
        <line x1="55" y1="170" x2="55" y2="182" />
      </g>
      <text x="60" y="200" fill={dim} fontFamily="JetBrains Mono" fontSize="9">KF-TR-004  ·  SAMPLE TRIER · OLIVE</text>

      {/* DIAL THERMOMETER */}
      <g stroke={paper} strokeWidth="1.2">
        <circle cx="110" cy="280" r="40" />
        <circle cx="110" cy="280" r="33" stroke={refGrey} strokeWidth="0.6" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2
          const x1 = 110 + Math.cos(a) * 30
          const y1 = 280 + Math.sin(a) * 30
          const x2 = 110 + Math.cos(a) * 35
          const y2 = 280 + Math.sin(a) * 35
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" />
        })}
        <line className="psch-dialhand" x1="110" y1="280" x2="128" y2="262" stroke={ember} strokeWidth="1.4" style={{ transformOrigin: '110px 280px' }} />
        <circle cx="110" cy="280" r="3" fill={ember} stroke="none" />
        {/* probe stem */}
        <line x1="110" y1="320" x2="110" y2="400" />
        <circle cx="110" cy="403" r="2" fill={paper} stroke="none" />
      </g>
      <text x="60" y="430" fill={dim} fontFamily="JetBrains Mono" fontSize="9">KF-TH-018 · BRASS DIAL THERMOMETER</text>

      {/* OLIVE-WOOD SAMPLE CUP */}
      <g stroke={paper} strokeWidth="1.2">
        <ellipse cx="290" cy="280" rx="36" ry="8" />
        <path d="M254 280 L262 335 L318 335 L326 280" />
        {/* grain */}
        <path d="M260 295 Q 290 303 320 292" stroke={refGrey} strokeWidth="0.7" fill="none" />
        <path d="M262 308 Q 290 315 318 308" stroke={refGrey} strokeWidth="0.7" fill="none" />
        <path d="M266 322 Q 290 328 314 322" stroke={refGrey} strokeWidth="0.7" fill="none" />
        <path d="M325 298 Q 338 300 338 314 Q 338 326 326 326" />
        {/* steam */}
        <path className="psch-steam s1" d="M278 272 C 274 260 286 250 280 238" stroke={ember} opacity="0.6" fill="none" />
        <path className="psch-steam s2" d="M294 272 C 300 260 290 250 296 238" stroke={ember} opacity="0.4" fill="none" />
        <path className="psch-steam s3" d="M308 272 C 304 260 314 250 308 238" stroke={ember} opacity="0.35" fill="none" />
      </g>
      <text x="254" y="360" fill={dim} fontFamily="JetBrains Mono" fontSize="9">KF-CP-001 · CUPPING BOWL · 220 ML</text>

      {/* BAR SCALE */}
      <g stroke={paper} strokeWidth="1.2">
        <rect x="390" y="240" width="160" height="70" rx="3" />
        <rect x="402" y="252" width="136" height="22" stroke={ember} strokeWidth="0.9" />
        <text x="410" y="268" fill={ember} fontFamily="JetBrains Mono" fontSize="13">0.0148 kg</text>
        <circle cx="408" cy="294" r="5" />
        <circle cx="408" cy="294" r="1.5" fill={paper} />
        <line x1="425" y1="294" x2="455" y2="294" strokeWidth="0.9" />
        <line x1="470" y1="294" x2="530" y2="294" strokeWidth="0.9" />
        <rect x="540" y="288" width="8" height="12" stroke={ember} fill="none" strokeWidth="0.8" />
      </g>
      <text x="390" y="330" fill={dim} fontFamily="JetBrains Mono" fontSize="9">KF-SC-007 · BAR SCALE · 3 KG / 0.1 G</text>

      {/* SAMPLE SCOOP */}
      <g stroke={paper} strokeWidth="1.2">
        <path d="M390 410 Q 390 455 440 455 Q 490 455 490 410 Z" />
        <path d="M490 420 L560 410" />
        <rect x="555" y="404" width="14" height="14" rx="2" />
        {/* beans in scoop */}
        <g fill={paper} stroke="none">
          <circle cx="410" cy="438" r="2" />
          <circle cx="425" cy="444" r="2" />
          <circle cx="440" cy="440" r="2" />
          <circle cx="455" cy="446" r="2" />
          <circle cx="470" cy="440" r="2" />
        </g>
      </g>
      <text x="390" y="485" fill={dim} fontFamily="JetBrains Mono" fontSize="9">KF-SS-012 · SAMPLE SCOOP · 316 STAINLESS</text>

      {/* corner stamp */}
      <g transform="translate(480,60)">
        <circle cx="40" cy="40" r="38" stroke={ember} strokeWidth="0.8" fill="none" />
        <circle cx="40" cy="40" r="32" stroke={ember} strokeWidth="0.4" strokeDasharray="2 3" />
        <text x="40" y="36" fill={ember} fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">KILNFORGE</text>
        <text x="40" y="48" fill={ember} fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">WORKS · ES</text>
      </g>
    </svg>
  )
}
