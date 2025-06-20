import React from 'react'
import {FaApple, FaSearch, FaShoppingBag} from "react-icons/fa"

const Navbar = () => {
  return (
    <>
    <nav className='container bg-gray-50 p-4 mx-auto'>
        <ul className='flex justify-between text-sm text-center'>

            <li>
                <a href=""><FaApple/> </a>
            </li>
            <li >                 
                <a href="">Store</a>
            </li>
            <li>
                <a href="">Mac</a>
            </li>
            <li>
                <a href="">iPad</a>
            </li>
            <li>
                <a href="">iPhone</a>
            </li>
            <li>
                <a href="">Watch</a>
            </li>
            <li>
                <a href="">Airpods</a>
            </li>
            <li>
                <a href="">TV & Home</a>
            </li>
            <li>
                <a href="">Entertainment</a>
            </li>
            <li>
                <a href="">Accessories</a>
            </li>
            <li>
                <a href="">Support</a>
            </li>
            <li>
                <a href=""><FaSearch/></a>
            </li>
             <li>
                <a href=""><FaShoppingBag/></a>
            </li>
        </ul>                
   </nav>
    <p className='text-center pt-2'>Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 
        instant cashback‡ on selected products with eligible cards. 
        <a className='text-blue-500 hover:underline' href="#">Shop</a> 
    </p>
    </>
   
  )
}

export default Navbar