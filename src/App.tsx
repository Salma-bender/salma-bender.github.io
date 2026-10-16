import { About } from './components/About'
import { Certifications } from './components/Certifications'
import { Competitions } from './components/Competitions'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Github } from './components/Github'
import { Hero } from './components/Hero'
import { MatrixRain } from './components/MatrixRain'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <Cursor />
      <MatrixRain />
      <div className="scanlines" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Competitions />
        <Certifications />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
