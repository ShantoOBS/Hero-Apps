import React, { useEffect, useState } from 'react'
import IntallationCard from '../../Components/InstallationCard/IntallationCard'
import { getData } from '../../Utility/Utility'
import { useLoaderData } from 'react-router';

export default function Installation() {
  const [InstallApp, setInstallApp] = useState([]);
  const [sortValue, setSortValue] = useState("Sort By Size"); 

  const allData = useLoaderData();
  function convertToNumber(value) {
  const num = parseFloat(value);
  
  return num * 1_000_000;

}
  const handleChange = (e) => {
    setSortValue(e.target.value); 
    if(sortValue==="high-low"){

       const arr=InstallApp.sort((a,b)=>convertToNumber(a.downloads)-convertToNumber(b.downloads));
       setInstallApp(arr);

    }else{

       const arr=InstallApp.sort((a,b)=>convertToNumber(b.downloads)-convertToNumber(a.downloads));
       setInstallApp(arr);

    }
  };

  useEffect(() => {
    const local = getData();
    const data = allData.filter(app => local.includes(app.id));
    setInstallApp(data);
  }, [allData]);

  const handleUninstall = (id) => {
    setInstallApp(prev => prev.filter(app => app.id !== id));
  };

  return (
    <div className='max-w-6xl mx-auto px-2 text-center'>
      <div className='my-10'>
        <p className='text-5xl font-bold mb-3'>Your Installed Apps</p>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className='flex justify-between items-center mb-6'>
        <p className='font-bold'>{InstallApp.length} Apps Found</p>

       <select
        value={sortValue}         
        onChange={handleChange}    
        className="p-2 border-1 border-gray-300 rounded-md font-bold"
      >
        <option disabled>Sort By Size</option>
        <option value="high-low">High-Low</option>
        <option value="low-high">Low-High</option>
      </select>
      </div>

       <div className='border-1 border-gray-200 my-5'></div>



      <div className=''>
        {InstallApp.map((data) => (
          <IntallationCard
            key={data.id}
            data={data}
            onUninstall={handleUninstall}
          />
        ))}
      </div>
    </div>
  );
}
