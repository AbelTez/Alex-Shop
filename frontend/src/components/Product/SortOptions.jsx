import React from 'react'
import { useSearchParams } from 'react-router-dom';




export default function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);

  }
  
  return (
    <div className='mb-4 items-center justify-end'>
        <select onChange={handleSortChange} value={searchParams.get("sortBy") || ""} name="" id="sort" className='border p-2 rounded-md focus:outline-none'>
            <option value="">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest Arrivals</option>
        </select>
    </div>
  )
}
