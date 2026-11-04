import { useEffect, useState } from 'react'
import './Board.css'

const boards = [
  {
    code: 'JAC',
    full: 'Jharkhand Academic Council',
    desc: 'State board curriculum with focused guidance for local exams.',
    color: '#f59e0b',
    icon: '🏫'
  },
  {
    code: 'CBSE',
    full: 'Central Board of Secondary Education',
    desc: 'Nationwide syllabus taught with clarity and exam-ready practice.',
    color: '#3b82f6',
    icon: '🎓'
  },
  {
    code: 'ICSE',
    full: 'Indian Certificate of Secondary Education',
    desc: 'Detailed concept-driven approach for a strong academic base.',
    color: '#10b981',
    icon: '📚'
  }
]

function Board() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % boards.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="board" id="boards">
      <div className="board-header">
        <span className="board-tag">Boards We Cover</span>
        <h2>Trusted Across Every Board</h2>
        <p>Personalised coaching aligned with JAC, CBSE, and ICSE syllabi.</p>
      </div>

      <div className="board-card">
        <div className="board-badges">
          {boards.map((b, index) => (
            <button
              key={b.code}
              className={`board-badge ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
              style={{ '--accent': b.color }}
            >
              <span className="board-badge-icon">{b.icon}</span>
              <span className="board-badge-code">{b.code}</span>
            </button>
          ))}
        </div>

        <div className="board-display">
          {boards.map((b, index) => (
            <div
              key={b.code}
              className={`board-slide ${active === index ? 'active' : ''}`}
              style={{ '--accent': b.color }}
            >
              <div className="board-slide-icon">{b.icon}</div>
              <h3>{b.code}</h3>
              <h4>{b.full}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="board-dots">
          {boards.map((b, index) => (
            <button
              key={b.code}
              className={`board-dot ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Show ${b.code}`}
              style={{ '--accent': b.color }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Board