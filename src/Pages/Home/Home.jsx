import React, { useState } from 'react'
import apple from '../../assets/Apple.png'
import playSotre from '../../assets/playStore.png'
import hero from '../../assets/hero.png'

import Card from '../../Components/Card/Card'
import { useEffect } from "react";



export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("Data.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error loading app data:", err));
    }, []);

    return (
        <div className=' text-center flex  flex-col justify-center items-center'>
            <p className='text-black text-6xl font-bold mt-15 '>We Build <br />
                <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span>  Apps</p>

            <p className='text-[#627382] my-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.</p>


            <div className='flex gap-4 my-4 text-center'>
                <button class="btn btn-outline font-bold border-gray-300"><img src={playSotre} alt="" className='w-6 h-6' />Google Play</button>

                <button class="btn btn-outline font-bold border-gray-300"><img src={apple} alt="" className='w-6 h-6' /> App Store</button>
            </div>

            <img src={hero} alt="" className='mt-3' />

            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full text-white '>

                <div className='py-20 max-w-6xl mx-auto'>

                    <p className='text-5xl font-bold  pb-10'>Trusted By Millions, Built For You</p>

                    <div className='flex flex-col md:flex-row lg:flex-row items-center justify-evenly'>

                        <div>
                            <p>Total Downloads</p>
                            <p className='my-3 font-bold text-6xl'>29.6M</p>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <p className='my-3 font-bold text-6xl'>906K</p>
                            <p>46% more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <p className='my-3 font-bold text-6xl'>132+</p>
                            <p>31 more will Launch</p>
                        </div>

                    </div>

                </div>

            </div>


            <div className='my-15 max-w-6xl mx-auto'>

                <p className='text-5xl font-bold mb-3'>Trending Apps</p>
                <p className='text-[#627382] text-2xl '>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid md:grid-cols-3 lg:grid-cols-4 my-8 gap-4'>

                    {data.map((data, index) => (
                        <Card key={index} data={data} />
                    ))}


                </div>
            </div>


        </div>
    )
}
