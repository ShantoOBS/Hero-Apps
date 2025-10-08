import React from 'react'
import { Link } from 'react-router'
import image from '../../assets/error-404.png'

export default function Error() {
  return (
    <div>

        <div className='py-8 flex flex-col justify-center items-center'>

             <img src={image} alt="" className='my-4' />

             <p className='text-4xl font-bold my-3'>Oops, page not found!</p>
             <p className='text-[#627382]'>The page you are looking for is not available.</p>
               <Link to="/" className='mt-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-8 rounded-md font-semibold text-white flex items-center gap-1 justify-center'>Go Back!</Link>


        </div>
      
         

    </div>
  )
}
