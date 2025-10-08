import React, { useState } from 'react'

import image from './../../assets/demo-app (3).webp'
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'

import AppChart from '../AppChart/AppChart'


export default function AppDetails() {

    const [Flag, setFlag] = useState(true);

    return (
        <div className=' max-w-6xl mx-auto py-12  '>

            <div className='flex flex-col lg:flex-row gap-8  items-center px-2'>

                <div>
                    <img src={image} alt="" className='w-full h-full cover' />
                </div>

                <div>
                    <p className='text-4xl font-bold '>SmPlan:ToDo List with Reminder</p>
                    <p>Developed by productive.io</p>

                    <div className='border-1 border-gray-200 my-5 '></div>


                    <div className='flex gap-10 '>
                        <div>
                            <img src={download} alt="" />
                            <p className='my-2'>Downloads</p>
                            <p className='text-6xl font-bold'>8M</p>
                        </div>
                        <div>
                            <img src={ratings} alt="" />
                            <p className='my-2'>Average Ratings</p>
                            <p className='text-6xl font-bold'>8M</p>
                        </div>
                        <div>
                            <img src={review} alt="" />
                            <p className='my-2'>Total Reviews</p>
                            <p className='text-6xl font-bold'>8M</p>
                        </div>
                    </div>

                    <button className='my-8 bg-[#00D390] px-8 py-2 rounded-md font-semibold text-white flex items-center gap-1 justify-center'> Install Now (291 MB) </button>


                </div>

            </div>


            <div className='border-1 border-gray-200 my-5 '></div>

            <p className='my-5 text-2xl font-bold'>Ratings</p>

            <AppChart></AppChart>


            <div className='border-1 border-gray-200 my-5 '></div>

            <p className='my-5 text-2xl font-bold'>Description</p>

            <p className='text-[#627382]'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.

                A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.

                For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>

        </div>
    )
}
