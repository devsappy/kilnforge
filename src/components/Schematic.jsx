export default function Schematic() {
  return (
    <svg viewBox="0 0 560 520" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <g stroke="rgba(243,236,225,0.18)" strokeDasharray="3 4">
        <line x1="30" y1="260" x2="530" y2="260" />
        <line x1="278" y1="30" x2="278" y2="500" />
        <circle cx="278" cy="260" r="220" />
      </g>
      <g>
        <path d="M330 60 L330 150 L380 150 L380 60 Z" />
        <line x1="340" y1="60" x2="340" y2="150" />
        <line x1="370" y1="60" x2="370" y2="150" />
        <path d="M320 60 L390 60 L385 45 L325 45 Z" />
        <path d="M355 42 C 350 30, 365 20, 355 10" stroke="var(--ember)" opacity="0.5" />
        <path d="M340 42 C 345 28, 335 18, 342 8" stroke="var(--ember)" opacity="0.3" />
      </g>
      <g>
        <path d="M160 55 L260 55 L240 150 L180 150 Z" />
        <line x1="170" y1="70" x2="250" y2="70" />
        <path d="M195 150 L195 175 L225 175 L225 150" />
      </g>
      <rect x="120" y="170" width="320" height="180" rx="6" />
      <g className="drum-inner">
        <circle cx="278" cy="260" r="80" stroke="var(--ember)" />
        <line x1="278" y1="180" x2="278" y2="340" stroke="var(--ember)" opacity="0.5" />
        <line x1="198" y1="260" x2="358" y2="260" stroke="var(--ember)" opacity="0.5" />
        <line x1="225" y1="207" x2="331" y2="313" stroke="var(--ember)" opacity="0.3" />
        <line x1="331" y1="207" x2="225" y2="313" stroke="var(--ember)" opacity="0.3" />
        <circle cx="278" cy="260" r="4" fill="var(--ember)" stroke="none" />
      </g>
      <g>
        <rect x="140" y="240" width="16" height="40" rx="2" />
        <line x1="124" y1="260" x2="140" y2="260" />
        <circle cx="120" cy="260" r="4" />
      </g>
      <g transform="translate(340,300)">
        <rect x="0" y="0" width="80" height="40" rx="2" />
        <circle cx="16" cy="20" r="8" />
        <line x1="16" y1="20" x2="21" y2="14" stroke="var(--ember)" />
        <circle cx="40" cy="20" r="8" />
        <line x1="40" y1="20" x2="36" y2="13" stroke="var(--ember)" />
        <circle cx="64" cy="20" r="8" />
        <line x1="64" y1="20" x2="70" y2="22" stroke="var(--ember)" />
      </g>
      <g fill="var(--ember)" stroke="none">
        <path className="ember-dot" d="M210 355 Q 214 370 210 385 Q 206 370 210 355 Z" />
        <path className="ember-dot" d="M240 355 Q 244 372 240 388 Q 236 372 240 355 Z" />
        <path className="ember-dot" d="M278 355 Q 283 375 278 392 Q 273 375 278 355 Z" />
        <path className="ember-dot" d="M316 355 Q 320 372 316 388 Q 312 372 316 355 Z" />
        <path className="ember-dot" d="M346 355 Q 350 370 346 385 Q 342 370 346 355 Z" />
      </g>
      <g>
        <path d="M90 395 Q 90 440 135 440 L 215 440 Q 260 440 260 395 Z" />
        <line x1="90" y1="410" x2="260" y2="410" />
        <line x1="175" y1="395" x2="175" y2="430" stroke="var(--ember)" />
        <path d="M155 420 L195 420" stroke="var(--ember)" />
        <circle cx="120" cy="425" r="2" fill="var(--paper)" stroke="none" />
        <circle cx="140" cy="432" r="2" fill="var(--paper)" stroke="none" />
        <circle cx="200" cy="428" r="2" fill="var(--paper)" stroke="none" />
        <circle cx="230" cy="425" r="2" fill="var(--paper)" stroke="none" />
      </g>
      <g>
        <line x1="140" y1="440" x2="140" y2="495" />
        <line x1="440" y1="350" x2="440" y2="495" />
        <line x1="280" y1="440" x2="280" y2="495" />
        <line x1="90" y1="495" x2="500" y2="495" />
      </g>
      <g stroke="rgba(243,236,225,0.35)" strokeDasharray="2 3" fill="none">
        <line x1="460" y1="170" x2="510" y2="170" />
        <line x1="460" y1="350" x2="510" y2="350" />
        <line x1="505" y1="170" x2="505" y2="350" />
      </g>
      <text x="515" y="265" fill="var(--paper-dim)" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">420</text>
    </svg>
  )
}
