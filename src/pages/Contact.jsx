import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  async function handleSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setServerError('')
    try {
  const apiBase = import.meta.env.VITE_API_URL || '';
  const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('error')
      setServerError('Failed to send. Please try again later.')
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h2>Contact</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
            />
            {errors.name && <em className="error">{errors.name}</em>}
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
            />
            {errors.email && <em className="error">{errors.email}</em>}
          </label>

          <label>
            <span>Message</span>
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={!!errors.message}
            />
            {errors.message && <em className="error">{errors.message}</em>}
          </label>

          <button type="submit" className="button primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send'}
          </button>
          {status === 'success' && <p>Thank you! I will reply shortly.</p>}
          {status === 'error' && <p className="error">{serverError}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact


