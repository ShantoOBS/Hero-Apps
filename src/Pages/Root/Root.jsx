import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';

export default function Root() {
  return (
    <div className=' text-black bg-[#f7f2f2]'>

        <div className='bg-white'><Navbar></Navbar></div>
        
        
          <Outlet></Outlet>
    
        
        <Footer></Footer>

         <ToastContainer />
    </div>
  )
}
