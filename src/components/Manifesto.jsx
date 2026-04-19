import Reveal from './Reveal.jsx'

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="wrap">
        <Reveal className="manifesto-body">
          <span className="section-num">01 &mdash; Statement</span>
          <div>
            <p>
              A roaster is a <i>time machine</i>. For twelve minutes it holds
              a green seed at the edge of becoming, then releases it into
              flavour. The instrument doing the holding matters more than
              anyone admits.
            </p>
            <p>
              We build for roasters who have stopped treating equipment as
              furniture &mdash; who profile, log, and argue about air&nbsp;flow
              the way sommeliers argue about oak. Kilnforge machines are
              engineered as instruments, not appliances.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
