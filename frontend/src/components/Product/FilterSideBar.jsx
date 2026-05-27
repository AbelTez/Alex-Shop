import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterSideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  // x.com/?a=1&b=2
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 500,
  });

  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = ["Top Wear", "Bottom Wear", "Accessories"];
  const genders = ["Men", "Women"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Pink",
    "Purple",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Wool"];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Classic Wear",
    "Beach Breeze",
    "Elegant Edge",
    "Sporty Vibes",
    "Denim Co",
    "Chic Comfort",
    "Bold Basics",
  ];

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
    setPriceRange([
      parseFloat(Params.minPrice) || 0,
      parseFloat(Params.maxPrice) || 500,
    ]);
  }, [searchParams]);



  const handleFilterChange = (e) => {
    // Note: Do not prevent default on input changes or radios/checkboxes won't toggle natively
    const { name, value, type, checked } = e.target;
    
    // FIX 1: Fixed typo from 'newFilter' to 'newFilters'
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    // FIX 2: Added URL Parameter syncing so 'useEffect' doesn't instantly overwrite your changes
    const updatedParams = new URLSearchParams(searchParams);
    if (type === "checkbox") {
      if (newFilters[name].length > 0) {
        updatedParams.set(name, newFilters[name].join(","));
      } else {
        updatedParams.delete(name);
      }
    } else {
      if (value) {
        updatedParams.set(name, value);
      } else {
        updatedParams.delete(name);
      }
    }

    setSearchParams(updatedParams);
    setFilters(newFilters);
    Navigate(`?${updatedParams.toString()}`);
  };






  return (
    <aside className="w-full md:w-72 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Filters</h3>
        <button onClick={() => setSearchParams({})} className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="pb-5 border-b border-gray-100">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Category
        </label>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center group cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={handleFilterChange}
                className="h-4 w-4 rounded-full text-blue-600 focus:ring-blue-500 border-gray-300 transition mr-3"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div className="pb-5 border-b border-gray-100">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Gender
        </label>
        <div className="grid grid-cols-2 gap-2">
          {genders.map((gender) => {
            const isSelected = filters.gender === gender;
            return (
              <label 
                key={gender} 
                className={`flex items-center justify-center py-2 px-3 border rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold" 
                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={isSelected}
                  className="sr-only"
                  onChange={handleFilterChange}
                />
                {gender}
              </label>
            );
          })}
        </div>
      </div>

      {/* Color Filter */}
      <div className="pb-5 border-b border-gray-100">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Color
        </label>
        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => {
            const isSelected = filters.color === color;
            const isWhite = color.toLowerCase() === "white";
            return (
              <button
                key={color}
                title={color}
                name="color"
                value={color}
                // Synthetic change mimicking input event structure
                onClick={() => handleFilterChange({ target: { name: "color", value: isSelected ? "" : color, type: "radio" } })}
                className={`w-7 h-7 rounded-full border cursor-pointer relative transition-transform duration-150 hover:scale-110 focus:outline-none ${
                  isSelected ? "ring-2 ring-offset-2 ring-blue-500 scale-105" : ""
                } ${isWhite ? "border-gray-300" : "border-transparent"}`}
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {isSelected && (
                  <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
                    isWhite ? "text-gray-800" : "text-white"
                  }`}>
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="pb-5 border-b border-gray-100 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Brand
        </label>
        <div className="space-y-2.5">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center group cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition">
              <input
                type="checkbox"
                name="brand"
                value={brand}
                checked={filters.brand.includes(brand)}
                onChange={handleFilterChange} // FIX 3: Added missing onChange
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 transition mr-3"
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="pb-5 border-b border-gray-100">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Size
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isSelected = filters.size.includes(size);
            return (
              <label 
                key={size}
                className={`w-11 h-11 flex items-center justify-center border text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                  isSelected 
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-100" 
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  name="size"
                  value={size}
                  checked={isSelected}
                  className="sr-only"
                  onChange={handleFilterChange} // FIX 4: Added missing onChange
                />
                {size}
              </label>
            );
          })}
        </div>
      </div>

      {/* Material Filter */}
      <div className="pb-5 border-b border-gray-100">
        <label className="block text-sm font-semibold text-gray-800 mb-3">
          Material
        </label>
        <div className="space-y-2.5">
          {materials.map((material) => (
            <label key={material} className="flex items-center group cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition">
              <input
                type="checkbox"
                name="material"
                value={material}
                onChange={handleFilterChange}
                checked={filters.material.includes(material)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 transition mr-3"
              />
              <span>{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Price Range
        </label>
        <div className="space-y-4">
          <input
            type="range"
            name="maxPrice" // FIX 5: Added missing name attribute
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={handleFilterChange}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex items-center justify-between text-xs font-medium text-gray-500">
            <span className="px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-100">${priceRange[0]}</span>
            <span>to</span>
            <span className="px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-100">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
