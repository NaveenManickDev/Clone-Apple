import React from 'react'
import heroImage from './images/Hero/mac_for_students_hero__dbi4flqyio2u_mediumtall.jpg'; 

const Hero = () => {
  return (
    <section className='text-center text-white h-96 flex flex-col items-center justify-center bg-cover mx-auto mt-3 cursor-pointer' 
        style={{backgroundImage: `url(${heroImage})`, }}>

            <button className='border py-2 px-4 rounded-3xl mt-96 text-black bg-white mb-20'>Learn more</button>
        
    </section>
  )
}

export default Hero