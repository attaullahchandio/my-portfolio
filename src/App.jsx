import React from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Experience from './assets/components/Experience'
import Projects from './assets/components/Projects'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App