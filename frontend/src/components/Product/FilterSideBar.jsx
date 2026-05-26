import React , {useEffect, useState} from 'react'

export default function FilterSideBar() {
    const [searchParams, setSearchParams] = useSearchParams();
  // x.com/?a=1&b=2
     const [filters, setFilters] = useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material:[],
        brand:[],
        minPrice:0,
        maxPrice:500,
     });

     const [priceRange, setPriceRange] = useState([0, 500]);
    
     const categories = ["Top Wear", "Bottom Wear", "Accessories"];
     const genders = ["Men", "Women", "Unisex"];
     const colors = ["Red", "Blue", "Green", "Black", "White" , "Yellow" , "Pink", "Purple"];
     const sizes = ["S", "M", "L", "XL" , "XXL"];
     const materials = ["Cotton", "Polyester", "Wool"];
     const brands = ["Urban Threads", "Modern Fit", "Street Style", "Classic Wear","Beach Breeze","Elegant Edge","Sporty Vibes","Denim Co","Chic Comfort","Bold Basics"];
    
    
    useEffect(() => {
        const Params = Object.fromEntries([...searchParams]);
        setFilters({
            category: Params.category || "",
            gender: Params.gender || "",
            color: Params.color || "",
            size: Params.size ? Params.size.split(",") : [],
            material: Params.material ? Params.material.split(",") : [],
            brand: Params.brand ? Params.brand.split(",") : [],
            minPrice: parseFloat(Params.minPrice) || 0,
            maxPrice: parseFloat(Params.maxPrice) || 500,
        });
        setPriceRange([parseFloat(Params.minPrice) || 0, parseFloat(Params.maxPrice) || 500]);
    }, [searchParams]);

     return (
    <div>
      side bar example
    </div>
  )
}
