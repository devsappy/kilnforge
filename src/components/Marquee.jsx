export default function Marquee() {
  const items = [
    'Drum Roasters', 'Afterburners', 'Destoners',
    'Green Handling', 'Silent Batch', 'Profile Capture',
    'Hand-built in Tarragona', 'Signed by the Engineer',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (<span key={i}>{t}</span>))}
      </div>
    </div>
  )
}
