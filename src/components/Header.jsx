import heroImage from './images/Products/hero_bts_2025__kjxalx8t7ia2_mediumtall.jpg'; 

const Header = () => {
  return (
    <header className='text-center text-white h-screen flex flex-col items-center justify-center bg-cover mx-auto mt-3' 
    style={{backgroundImage: `url(${heroImage})`, }}>

      <h1 className='text-3xl font-bold w-60 bg-blue-500 p-5 rounded-3xl cursor-pointer'>
        Buy Mac or iPad for college</h1>

      <p className='text-xl font-bold w-60 bg-blue-500 p-2 rounded-3xl mt-5 cursor-pointer'>
        with education savings</p>

      <p className='text-3xl font-bold w-60 bg-blue-500 p-5 rounded-3xl mt-5 cursor-pointer'>
        Choose Airpods or an eligible accessory</p>

      <button className='border border-blue-400 py-2 px-4 rounded-3xl  hover:bg-blue-500 hover:text-white text-blue-500 mt-4'>
        Shop</button>  
        
    </header>
  )
}

export default Header