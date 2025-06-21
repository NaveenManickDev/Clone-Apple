import React from 'react'
import heroImage from './images/Products/hero_macbook_air_avail__fpm99qgohx2e_mediumtall.jpg'; 

const Hero2 = () => {
  return (
    <section className='text-center text-black h-96 flex flex-col items-center justify-center bg-cover mx-auto mt-3 cursor-pointer' 
        style={{backgroundImage: `url(${heroImage})`, }}>

          <div className='mb-56'>
            <h1 className='text-3xl'>MacBook Air</h1>
          <p className='text-xl'>Sky blue Colour</p>
          <p className='text-xl'>Sky high performance with M4</p>

            <div className='mt-2 space-x-4'>
              <button className='border py-2 px-4 rounded-3xl bg-blue-500 text-white'>Learn more</button>
              <button className='border border-blue-400 py-2 px-4 rounded-3xl  hover:bg-blue-500 hover:text-white text-blue-500 '>Buy</button>
            </div>
          </div>
        
    </section>
  )
}

export default Hero2


// import React from 'react';
// import heroImage from './images/Products/hero_macbook_air_avail__fpm99qgohx2e_mediumtall.jpg'; 

// const Hero2 = () => {
//   return (
//     <section
//       className="text-center text-black h-[75vh] sm:h-[85vh] md:h-[95vh] flex flex-col items-center justify-center bg-cover bg-center rounded-xl mx-2 sm:mx-4 mt-4"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="bg-white/80 p-4 sm:p-6 rounded-2xl max-w-lg w-full m-4">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">MacBook Air</h1>
//         <p className="text-base sm:text-lg md:text-xl mt-2">Sky blue Colour</p>
//         <p className="text-base sm:text-lg md:text-xl">Sky high performance with M4</p>

//         <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button className="py-2 px-6 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
//             Learn more
//           </button>
//           <button className="py-2 px-6 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
//             Buy
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero2;