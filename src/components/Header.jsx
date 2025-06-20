import heroImage from './images/Products/hero_bts_2025__kjxalx8t7ia2_mediumtall.jpg'; 

const Header = () => {
  return (
    <header className='text-center text-white'>
        <div style={{backgroundImage: `url(${heroImage})`, }} className='mx-auto' >
          <div className=' bg-blue-500 rounded-lg w-36 mx-auto p-4'>
            <h1 className='text-white text-sm font-semibold'>Buy Mac or iPad for college</h1>
          </div>          
        <div className=' bg-blue-500 rounded-lg w-36 mx-auto p-4 mt-10'>
            <p className='text-white'>with education savings</p>
        </div>
        <div className=' bg-blue-500 rounded-lg w-36 mx-auto p-4 mt-10'>
            <h1 className='text-white'>Choose Airpods or an eligible accessory</h1>
        </div>
        <button className='border border-blue-400 py-2 px-4 rounded-3xl  hover:bg-blue-500 hover:text-white text-blue-500 mt-4'>Shop</button>
        
        </div>
        
    </header>
  )
}

export default Header