import mobileImages from ".//images/mobile/hero_macbook_air_avail__fpm99qgohx2e_small.jpg"
import desktopImages from "./images/desktop/hero_macbook_air_avail__fpm99qgohx2e_largetall.jpg"

const Hero2 = () => {
  const isDesktop = window.innerWidth >= 768;
  const bgImage = isDesktop ? desktopImages : mobileImages;
  return (
    <section className="text-center text-white h-[70vh] sm:h-[80vh] md:h-[90vh] flex flex-col items-center justify-end bg-cover bg-center mt-4 cursor-pointer"
        style={{backgroundImage: `url(${bgImage})`, }}>

          <div className='mb-96'>
            <h1 className='text-3xl text-black'>MacBook Air</h1>
          <p className='text-xl text-black'>Sky blue Colour</p>
          <p className='text-xl text-black'>Sky high performance with M4</p>

            <div className='mt-2 space-x-4'>
              <button className='border py-2 px-4 rounded-3xl bg-blue-500 text-white'>Learn more</button>
              <button className='border border-blue-400 py-2 px-4 rounded-3xl  hover:bg-blue-500 hover:text-white text-blue-500 '>Buy</button>
            </div>
          </div>
        
    </section>
  )
}

export default Hero2