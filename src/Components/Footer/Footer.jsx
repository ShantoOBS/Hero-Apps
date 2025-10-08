import React from 'react'
import icon from '../../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className='bg-[#001931] text-white '>

       <div className=' max-w-6xl mx-auto px-2 py-10'>

         <div className='flex justify-between items-center '>

             <div className='flex gap-2 items-center '>
           <img src={icon} alt="" className='w-8 h-8' />
           <p>HERO.IO</p>
         </div>

         <div>
             
             <p>Social Links</p>
             <div className='flex gap-2 my-3'> 

              <FaSquareXTwitter />

              <FaLinkedin />

              <FaFacebookSquare />

          </div>



         </div>

         </div>

      

      
          <div className='border-1 border-[#E5E7EB] my-4'></div>

          <p className='text-center'>Copyright © 2025 - All right reserved</p>

         
         
       </div>


      
        

    </div>
  )
}
