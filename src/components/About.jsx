import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-frame">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80"
              alt="Teacher Munita"
            />
          </div>
          <div className="about-badge">
            <span className="badge-number">10+</span>
            <span className="badge-text">Years<br/>Experience</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            Meet <span className="highlight">Munita Ma'am</span>
          </h2>
          <p className="about-para">
            With a <strong>B.Sc</strong> and <strong>DEIED</strong> qualification, Munita Ma'am brings
            years of teaching expertise to every classroom. Her mission is simple — to
            make learning joyful, clear, and confidence-building for every student.
          </p>
          <p className="about-para">
            At our center in <strong>Kedua, Dhanbad</strong>, we cater to students from
            <strong> Nursery to Class 10</strong>, following <strong>JAC, CBSE, and ICSE</strong> board
            curriculums with individual care and structured study plans.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Boards Covered</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About