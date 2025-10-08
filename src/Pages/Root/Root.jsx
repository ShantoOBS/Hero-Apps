import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

export default function Root() {
  return (
    <div className='bg-white text-black'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
