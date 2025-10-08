import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

export default function Card({data}) {
    const {image,ratingAvg,downloads,title,id}=data;
  return (
    <Link to={`/AppDetails/${id}`} className='shadow-sm bg-white rounded-md text-start transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
         
            <div className='p-4'> 

                  <img src={image} alt="" className='rounded-md w-full'/>
                  <p className='my-3 text-2xl font-semibold'>{title}</p>
                  <div className='flex justify-between'>

                        <div className='bg-[#F1F5E8] p-2 rounded-md' >
                            <p className='text-[#00D390] font-semibold flex gap-2 items-center '><FiDownload /> {downloads}</p>
                        </div>
                        <div className='bg-[#FFF0E1] p-2 rounded-md' >
                            <p className='text-[#FF8811] font-semibold flex gap-2 items-center '><FaStar /> {ratingAvg}</p>
                        </div>
                  </div>
            </div>
    </Link>
  )
}
