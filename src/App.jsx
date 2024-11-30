import React from 'react'
import About from './Pages/About'
import Experience from './Pages/Experience'
import Skill from './Pages/Skill'
import Project from './Pages/Project'
import Responses from './Pages/Responses'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Audio from './Components/Audio'

function App() {
  return (
    <main>
      <Audio/>
      <Navbar/>
      <About/>
      <Experience/>
      <Skill/>
      <Project/>
      <Responses/>
      <Contact/>

    </main>
  )
}

export default App