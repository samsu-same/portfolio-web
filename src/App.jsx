
import './App.css'
import AboutMe from './components/AboutMe'
import About from './components/AboutUs'
import Awards from './components/AwardsCertification'
import Blog from './components/Blog'
import CallToAction from './components/CalltoAction'


import Contact from './components/Contact'
import Education from './components/Education'
import ExperienceTimeline from './components/ExperinceTimeLine'

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Hobbies from './components/MyHobbies'
import Projects from './components/Projeect'
import Skills from './components/Skills'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonial'

function App() {


  return (
    <>
      <Header />
      <Hero />

      <AboutMe />
      <Skills />
      <Projects />
      {/* <Statistics /> */}
      <ExperienceTimeline />
      <Education />
      <Testimonials />
      {/* <Blog /> */}
      {/* <Awards /> */}
      <Hobbies />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  )
}

export default App
