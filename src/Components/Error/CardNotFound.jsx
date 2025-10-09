import React from 'react'
import { Link } from 'react-router'
import image from '../../assets/App-Error.png'

export default function CardNotFound() {
  return (
    <div>

        <div className='py-8 flex flex-col justify-center items-center'>

             <img src={image} alt="" className='my-4' />

             <p className='text-4xl font-bold my-3'>OPPS!! APP NOT FOUND</p>
             <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
               <Link to="/" className='mt-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-8 rounded-md font-semibold text-white flex items-center gap-1 justify-center'>Go Back!</Link>


        </div>
      
         

    </div>
  )
}
