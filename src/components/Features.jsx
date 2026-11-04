import './Features.css'

const features = [
  {
    icon: '👩‍🏫',
    title: 'Expert Guidance',
    desc: 'Taught personally by Munita Ma\'am (B.Sc, DEIED) with years of proven experience.'
  },
  {
    icon: '📖',
    title: 'Board-Aligned',
    desc: 'Curriculum designed for JAC, CBSE, and ICSE — so students never miss a beat.'
  },
  {
    icon: '👥',
    title: 'Small Batches',
    desc: 'Limited class sizes ensure every student gets personal attention and support.'
  },
  {
    icon: '💡',
    title: 'Concept-First Learning',
    desc: 'We build strong fundamentals before drills, so understanding lasts beyond exams.'
  },
  {
    icon: '📝',
    title: 'Regular Assessments',
    desc: 'Weekly tests and progress reports keep students sharp and parents informed.'
  },
  {
    icon: '🎯',
    title: 'Doubt Clearing',
    desc: 'Dedicated doubt sessions and one-on-one help whenever a topic feels stuck.'
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="features-tag">Why Choose Us</span>
        <h2>Learning That Actually Works</h2>
        <p>Everything we do is built around one goal — helping your child succeed.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features