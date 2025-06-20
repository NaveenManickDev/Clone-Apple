import React from 'react'
import heroImage from './images/Hero/mac_for_students_hero__dbi4flqyio2u_mediumtall.jpg'; 

const Hero = () => {
  return (
    <section className='text-center text-white min-h-dvh flex flex-col items-center justify-center bg-cover mx-auto mt-3' 
        style={{backgroundImage: `url(${heroImage})`, }}>
        
    </section>
  )
}

export default Hero