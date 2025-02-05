
import './App.css'
import About from './components/AboutUs'
import Contact from './components/Contact'
import Education from './components/Education'
import ExperienceTimeline from './components/ExperinceTimeLine'

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projeect'
import Skills from './components/Skills'

function App() {


  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ExperienceTimeline/>
      <Education/>

      <Contact/>
      <Footer/>
    </>
  )
}

export default App
