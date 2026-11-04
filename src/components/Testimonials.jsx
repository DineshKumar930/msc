import './Testimonials.css'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    text: 'Munita Ma\'am has a gift for making difficult topics feel simple. My daughter went from dreading Maths to actually enjoying it. Her board results speak for themselves.',
    rating: 5
  },
  {
    name: 'Rahul Kumar',
    role: 'Class 12 Student',
    text: 'The small batch size means I can ask questions without feeling embarrassed. Ma\'am always makes time to clear doubts, even after class hours.',
    rating: 5
  },
  {
    name: 'Anita Verma',
    role: 'Parent of Class 8 Student',
    text: 'The regular progress reports keep us informed about our son\'s growth. It feels like a partnership — we always know exactly where he stands.',
    rating: 5
  }
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <span className="testimonials-tag">Testimonials</span>
        <h2>What Parents & Students Say</h2>
        <p>Real words from the families who trust us with their learning.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials