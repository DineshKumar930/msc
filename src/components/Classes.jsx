import './Classes.css'

const classes = [
  {
    level: 'Nursery – UKG',
    desc: 'Play-based, joyful early learning that builds curiosity, motor skills, and basic literacy.',
    color: '#f59e0b',
    icon: '🧸',
    points: ['Phonics & Storytelling', 'Numbers & Shapes', 'Fun Activities']
  },
  {
    level: 'Class 1 – 5',
    desc: 'Strong foundation in all subjects with personalized attention and daily practice.',
    color: '#10b981',
    icon: '📚',
    points: ['All Subjects', 'Homework Help', 'Weekly Tests']
  },
  {
    level: 'Class 6 – 8',
    desc: 'Concept clarity across Maths, Science, English & Social Science with regular assessments.',
    color: '#6366f1',
    icon: '🔬',
    points: ['Concept-Based', 'Doubt Sessions', 'Exam Prep']
  },
  {
    level: 'Class 9 – 10',
    desc: 'Focused board preparation for JAC, CBSE & ICSE with mock tests and revision plans.',
    color: '#ec4899',
    icon: '🎯',
    points: ['Board Focused', 'Mock Tests', 'Study Material']
  }
]

const Classes = () => {
  return (
    <section id="classes" className="classes">
      <div className="classes-container">
        <div className="classes-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Classes We <span className="highlight">Offer</span>
          </h2>
          <p className="classes-subtitle">
            Comprehensive coaching tailored to each stage of your child's academic journey.
          </p>
        </div>

        <div className="classes-grid">
          {classes.map((c, i) => (
            <div
              key={c.level}
              className="class-card"
              style={{ '--accent': c.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="class-icon">{c.icon}</div>
              <h3 className="class-level">{c.level}</h3>
              <p className="class-desc">{c.desc}</p>
              <ul className="class-points">
                {c.points.map((p) => (
                  <li key={p}>
                    <span className="check">✓</span> {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="class-link">Enquire →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes