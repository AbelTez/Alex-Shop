import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Product/FilterSideBar";
import SortOptions from "../components/Product/SortOptions";
import ProductGrid from "../components/Product/ProductGrid";
export default function Collection() {
  const [products, setProducts] = useState([]);
  const sideBarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  useEffect(() => {
    // 1. Add the listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // 2. Return a cleanup function to remove it when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Elegant Dress",
          price: 80,
          images: [
            {
              url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
              altText: "Elegant Dress",
            },
          ],
        },
        {
          id: 2,
          name: "Stylish Jacket",
          price: 90,
          images: [
            {
              url: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          id: 3,
          name: "Casual Shirt",
          price: 100,
          images: [
            {
              url: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
              altText: "Casual Shirt",
            },
          ],
        },
        {
          id: 4,
          name: "Formal Pants",
          price: 120,
          images: [
            {
              url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
              altText: "Formal Pants",
            },
          ],
        },
        {
          id: 5,
          name: "Summer Skirt",
          price: 70,
          images: [
            {
              url: "https://images.unsplash.com/photo-1544867560-96287521d7b9",
              altText: "Summer Skirt",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, [1000]);
    return () => clearTimeout();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* mobile filter button     */}
        <button
          onClick={toggleSideBar}
          className="lg:hidden border p-2 flex justify-center items-center"
        >
          <FaFilter className="mr-2" />
        </button>
        {/* filter the side bar */}
        <div
          ref={sideBarRef}
          className={`${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} 
          sticky inset-y-0 z-50 left-0  lg:translate-x-0  lg:static w-64 max-w-sm bg-white transition-transform duration-300`}
        >
          <FilterSideBar />
        </div>
        <div className="grow p-4">
          <h2 className="text-2xl uppercase mb-4">All Collections</h2>
          {/* sort options */}
          <SortOptions />
          {/* product grid */}
          <ProductGrid products={products} />
        </div>
      </div>
    </>
  );
}
