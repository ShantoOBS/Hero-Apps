import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Error from '../../Components/Error/Error'

export default function ErrorElement() {
  return (
    <div className=' text-black bg-[#f7f2f2]'>
   
           <div className='bg-white'><Navbar></Navbar></div>
           
           
           <Error></Error>
       
           
           <Footer></Footer>
       </div>
  )
}
