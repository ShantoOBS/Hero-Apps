import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../../Components/Card/Card';
import CardNotFound from '../../Components/Error/CardNotFound';

import LoaderSearch from '../../Components/Loader/LoaderSearch';

export default function App() {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const all = useLoaderData();

  useEffect(() => {
    setData(all);
  }, [all]);


  useEffect(() => {
    if (search === '') return; //
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

 
  const filteredData = Data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  if (!loading && filteredData.length === 0) return <CardNotFound />;

  return (
    <div className='max-w-6xl mx-auto px-2 text-center'>
      <div className='my-10'>
        <p className='text-5xl font-bold mb-3'>Our All Applications</p>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className='flex justify-between items-center mb-6'>
        <p className='font-bold'>{filteredData.length} Apps Found</p>

        <input
          type="search"
          placeholder="Search"
          className="input bg-[#f7f2f2] border-gray-300 p-2 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <LoaderSearch />
      ) : (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6'>
          {filteredData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}
