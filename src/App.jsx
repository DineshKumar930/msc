import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import About from './components/About'
import Classes from './components/Classes'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Board from './components/Board'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Board />
        <Classes />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App