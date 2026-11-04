import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]

const classLinks = [
  'Class 6–8 Foundation',
  'Class 9–10 Board Prep',
  'Class 11–12 Science',
  'Doubt Clearing Sessions'
]

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          {/* Logo Section - Matched to Header */}
          <a href="#home" className="footer-logo">
            <img src="images/logo.png" alt="M.S Coaching Classes" className="footer-logo-img" />
            <div className="footer-logo-text">
              <span className="footer-logo-title">M.S Coaching</span>
              <span className="footer-logo-sub">Classes</span>
            </div>
          </a>

          <p>
            Personalised coaching for JAC, CBSE, and ICSE students — built on
            strong concepts, small batches, and genuine care.
          </p>
          
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="WhatsApp">💬</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Our Classes</h4>
          <ul>
            {classLinks.map((item) => (
              <li key={item}>
                <a href="#classes">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>📍 Ranchi, Jharkhand</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 hello@munitaclasses.com</li>
            <li>🕒 Mon–Sat, 4–8 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Munita's Classes. All rights reserved.</p>
        <p className="developer-credit">
          Developed & designed by{' '}
          <a 
            href="https://dineshroy.online" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Dinesh Roy
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer