import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="section-num">05 &mdash; Contact</span>
          <h2 className="section-title">Start the <i>conversation</i>.</h2>
          <p className="section-kicker">We reply to every message, personally, within two working days. No auto-responders. No CRM funnels.</p>
        </Reveal>

        <Reveal className="contact-grid">
          <span className="section-num">&mdash;</span>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <Field id="f1" label="Your name" />
            <Field id="f2" label="Email" type="email" />
            <Field id="f3" label="Roastery / company" />
            <Field id="f4" label="Batch size you're considering (kg)" />
            <Field id="f5" label="Tell us what you're building" textarea />
            <button type="submit" className="btn btn-ember">
              {sent ? 'Received — we will reply personally' : 'Send to Tarragona'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 11L11 3M11 3H5M11 3V9" />
              </svg>
            </button>
          </form>

          <aside className="contact-details">
            <Block title="Foundry">
              Carrer del Taller 14<br />
              43001 Tarragona, Spain
              <small>Visits by appointment · Mon–Fri 08:00–17:00</small>
            </Block>
            <Block title="General">
              <a href="#">hello@kilnforge.es</a><br />
              <a href="#">+34 977 000 000</a>
            </Block>
            <Block title="Service & Parts">
              <a href="#">service@kilnforge.es</a>
              <small>24&thinsp;h response for installed machines</small>
            </Block>
            <Block title="Distribution">
              <a href="#">distribution@kilnforge.es</a>
              <small>Regional partners in 41 countries</small>
            </Block>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ id, label, type = 'text', textarea }) {
  const [v, setV] = useState('')
  const props = {
    id,
    value: v,
    placeholder: ' ',
    onChange: (e) => setV(e.target.value),
  }
  return (
    <div className="field">
      {textarea ? <textarea {...props} /> : <input type={type} {...props} />}
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <div className="contact-block">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}
