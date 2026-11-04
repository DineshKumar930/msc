import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <a href="#home" className="logo">
          <img src="images/logo.png" alt="M.S Coaching Classes" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">M.S Coaching</span>
            <span className="logo-sub">Classes</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#classes" onClick={() => setIsOpen(false)}>Classes</a>
          <a href="#boards" onClick={() => setIsOpen(false)}>Boards</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>

        {/* CTA Button */}
        <a href="#contact" className="header-cta">Book a Demo</a>

        {/* Mobile Menu Toggle */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header