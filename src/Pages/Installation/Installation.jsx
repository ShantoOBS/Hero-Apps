import React from 'react'

export default function Installation() {
  return (
    <div className='max-w-6xl mx-auto px-2 text-center'>

      <div className='my-10 '>

        <p className='text-5xl font-bold mb-3'>Your Installed Apps</p>
        <p>Explore All Trending Apps on the Market developed by us</p>

      </div>

      <div className='flex justify-between items-center mb-4'>
        <p>1 Apps Found</p>
        <select defaultValue="Sort By Size" className="p-2 border-1 border-gray-300 rounded-md">
          <option disabled={true}>Sort By Size</option>
          <option>Inter</option>
          <option>Poppins</option>
          <option>Raleway</option>
        </select>
      </div>

    </div>
  )
}
