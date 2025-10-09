import React from 'react';
import { removeData } from '../../Utility/Utility';

export default function IntallationCard({ data, onUninstall }) {
  const { image, title, size, ratingAvg, downloads, id } = data;

  const handleClick = () => {
    removeData(id);       
    onUninstall(id);     
  };

  return (
    <div className='flex flex-col md:flex-row justify-between bg-white p-3 rounded-md items-center my-4'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
        <div>
          <img src={image} alt="" className='w-15 h-15 rounded-md' />
        </div>

        <div>
          <p className='text-2xl font-medium'>{title}</p>
          <div className='flex gap-3'>
            <p className='text-green-400'>{downloads}</p>
            <p className='text-yellow-400'>{ratingAvg}</p>
            <p>{size} MB</p>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={handleClick}
          className='btn border-none bg-[#00D390] px-8 rounded-md font-semibold text-white flex items-center gap-1 justify-center'
        >
          Uninstall
        </button>
      </div>
    </div>
  );
}
