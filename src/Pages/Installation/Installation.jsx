import React, { useEffect, useState } from 'react'
import IntallationCard from '../../Components/InstallationCard/IntallationCard'
import { getData } from '../../Utility/Utility'
import { useLoaderData } from 'react-router';

export default function Installation() {
  const [InstallApp, setInstallApp] = useState([]);
  const allData = useLoaderData();

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
        <select defaultValue="Sort By Size" className="p-2 border-1 border-gray-300 rounded-md">
          <option disabled={true}>Sort By Size</option>
          <option>Inter</option>
          <option>Poppins</option>
          <option>Raleway</option>
        </select>
      </div>

      <div>
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
