import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Partners from './components/Partners'
import EmergencyBar from './components/EmergencyBar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Booking />
        <Testimonials />
        <Blog />
        <Partners />
      </main>
      <EmergencyBar />
      <Footer />
    </div>
  )
}
