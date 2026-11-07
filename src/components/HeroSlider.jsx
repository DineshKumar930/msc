import { useState, useEffect } from 'react'
import './HeroSlider.css'

const slides = [
  {
    id: 1,
    title: 'Shaping Bright Futures',
    subtitle: 'Expert coaching from Nursery to Class 10',
    tag: 'JAC • CBSE • ICSE',
    image: 'images/sl1.jpeg',
    accent: 'Learn • Grow • Succeed'
  },
  {
    id: 2,
    title: 'Personalized Attention',
    subtitle: 'Small batches, big results with Munita Ma\'am',
    tag: 'B.Sc, DEIED Qualified',
    image: 'images/sl2.jpeg',
    accent: 'Every Child Matters'
  },
  {
    id: 3,
    title: 'Building Strong Foundations',
    subtitle: 'Concept-based learning that lasts a lifetime',
    tag: 'Kedua, Dhanbad',
    image: 'images/sl3.jpeg',
    accent: 'Where Learning Begins'
  },
  ,
  {
    id: 4,
    title: 'Building Strong Foundations',
    subtitle: 'Concept-based learning that lasts a lifetime',
    tag: 'Kedua, Dhanbad',
    image: 'images/sl4.jpeg',
    accent: 'Where Learning Begins'
  },
]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => setCurrent(i)

  return (
    <section id="home" className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay" />
          <div className="slide-content">
            <span className="slide-tag">{slide.tag}</span>
            <h1 className="slide-title">
              {slide.title.split(' ').map((word, idx) => (
                <span key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <div className="slide-actions">
              <a href="#contact" className="btn-primary">Enroll Now</a>
              <a href="#classes" className="btn-secondary">View Classes</a>
            </div>
            <span className="slide-accent">{slide.accent}</span>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="slider-progress">
        <div
          className="progress-bar"
          key={current}
          style={{ animationDuration: '5s' }}
        />
      </div>
    </section>
  )
}

export default HeroSlider