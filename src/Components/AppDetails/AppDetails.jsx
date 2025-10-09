import React, { useState } from 'react'
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'

import AppChart from '../AppChart/AppChart'
import { useLoaderData, useParams } from 'react-router'
import { SaveData } from '../../Utility/Utility'


export default function AppDetails() {

    const [Flag, setFlag] = useState(true);
   

    const { id } = useParams();
    const ID = parseInt(id);
    const allData = useLoaderData();

    

    const needData = allData.find((d) => d.id === ID);

    

    const {image,downloads,ratingAvg,reviews,ratings,companyName,title,description,size}=needData;

    return (
        <div className=' max-w-6xl mx-auto py-12 '>

            <div className='flex flex-col lg:flex-row gap-8  items-center px-2'>

                <div className='w-[30%]'>
                    <img src={image} alt="" className='cover' />
                </div>

                <div>
                    <p className='text-4xl font-bold '>{title}</p>
                    <p>Developed by {companyName}</p>

                    <div className='border-1 border-gray-200 my-5 '></div>


                    <div className='flex flex-col items-center md:flex-row gap-10 '>
                        <div>
                            <img src={download} alt="" />
                            <p className='my-2'>Downloads</p>
                            <p className='text-6xl font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img src={rating} alt="" />
                            <p className='my-2'>Average Ratings</p>
                            <p className='text-6xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={review} alt="" />
                            <p className='my-2'>Total Reviews</p>
                            <p className='text-6xl font-bold'>{reviews}</p>
                        </div>
                    </div>

                    <button onClick={()=>SaveData(ID)} 
                    className='my-8 btn border-none bg-[#00D390] px-8 py-2 rounded-md font-semibold
                     text-white flex items-center gap-1 justify-center'> Install Now ({size} MB) </button>


                </div>

            </div>


            <div className='border-1 border-gray-200 my-5 '></div>

            <p className='my-5 text-2xl font-bold'>Ratings</p>

            <AppChart ratings={ratings}></AppChart>


            <div className='border-1 border-gray-200 my-5 '></div>

            <p className='my-5 text-2xl font-bold'>Description</p>

            <p className='text-[#627382]'>{description}</p>
        </div>
    )
}
