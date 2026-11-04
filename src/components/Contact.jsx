import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-tag">Get In Touch</span>
          <h2>Ready to Enroll?</h2>
          <p className="contact-intro">
            Have questions about classes, timings, or fees? Reach out and we'll
            get back to you quickly.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Call / WhatsApp</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>hello@munitaclasses.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Ranchi, Jharkhand</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <h4>Class Hours</h4>
                <p>Mon–Sat, 4:00 PM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you're looking for..."
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

            {submitted && (
              <p className="contact-success">
                ✅ Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact