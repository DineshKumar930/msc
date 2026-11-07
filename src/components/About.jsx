import { useEffect, useRef } from 'react'
import './About.css'

const profiles = [
  {
    name: 'Munita Ma\'am',
    image: 'images/muneeta.jpeg',
    alt: 'Teacher Munita',
    role: 'Founder & Head Teacher',
    badgeNumber: '10+',
    badgeText: ['Years', 'Experience'],
    tag: 'About Us',
    titlePrefix: 'Meet',
    highlight: 'Munita Ma\'am',
    paragraphs: [
      <>
        With a <strong>B.Sc</strong> and <strong>DEIED</strong> qualification, Munita Ma'am brings
        years of teaching expertise to every classroom. Her mission is simple — to make learning
        joyful, clear, and confidence-building for every student.
      </>,
      <>
        At our center in <strong>Kedua, Dhanbad</strong>, we cater to students from{' '}
        <strong>Nursery to Class 10</strong>, following <strong>JAC, CBSE, and ICSE</strong> board
        curriculums with individual care and structured study plans.
      </>
    ],
    stats: [
      { num: '500+', label: 'Happy Students' },
      { num: '3', label: 'Boards Covered' },
      { num: '100%', label: 'Dedication' }
    ]
  },
  {
    name: 'Sujeet Sir',
    image: 'images/sujeet.jpeg',
    alt: 'Co-ordinator Sujeet',
  
    badgeNumber: '5+',
    badgeText: ['Years', 'Coordination'],
    tag: 'Our Co-ordinator',
    titlePrefix: 'Meet',
    highlight: 'Sujeet Sir',
    paragraphs: [
      <>
       As the <strong>Co-ordinator</strong> at our center, Sujeet Sir ensures every student's
        journey runs smoothly — from admission to exam preparation. He manages schedules,
        communicates with parents, and keeps the entire academic system organized.
      </>,
      <>
         He holds a <strong>Diploma in Mechanical Engineering</strong> and a{' '}
        <strong>Graduation in History (Honours)</strong> — a unique blend of technical precision
        and deep understanding of people, which makes him exceptionally skilled at handling both
        academics and administration.
      </>
    ],
    stats: [
      { num: '500+', label: 'Students Guided' },
      { num: '24/7', label: 'Parent Support' },
      { num: '100%', label: 'Commitment' }
    ]
  }
]

const ProfileBlock = ({ data, reverse = false }) => (
  <div className={`about-profile ${reverse ? 'reverse' : ''}`}>
    <div className="about-image-wrapper">
      <div className="about-image-frame">
        <img src={data.image} alt={data.alt} loading="lazy" />
      </div>
      <div className="about-badge">
        <span className="badge-number">{data.badgeNumber}</span>
        <span className="badge-text">
          {data.badgeText[0]}
          <br />
          {data.badgeText[1]}
        </span>
      </div>
    </div>

    <div className="about-content">
      <span className="section-tag">{data.tag}</span>
      <h2 className="section-title">
        {data.titlePrefix} <span className="highlight">{data.highlight}</span>
      </h2>
      <p className="about-role">{data.role}</p>

      {data.paragraphs.map((p, i) => (
        <p key={i} className="about-para">
          {p}
        </p>
      ))}

      <div className="about-stats">
        {data.stats.map((s, i) => (
          <div key={i} className="stat">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

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
        {profiles.map((profile, index) => (
          <ProfileBlock
            key={index}
            data={profile}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}

export default About