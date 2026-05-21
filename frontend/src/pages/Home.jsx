import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Product/GenderCollectionSection";
import NewArrivals from "./../components/Product/NewArrivals";
import ProductDetails from "../components/Product/ProductDetails";
import ProductGrid from "../components/Product/ProductGrid";
import FeaturedCollection from "../components/Product/FeaturedCollection";

const womenproducts = [
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

export default function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best sellers section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={womenproducts} />
      </div>
      <FeaturedCollection />
    </div>
  );
}
