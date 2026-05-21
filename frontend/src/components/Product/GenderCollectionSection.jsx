import React from "react";
import { Link } from "react-router-dom";
import womenCollectionImage from "../../assets/images/womenCollection.jpg";
import menCollectionImage from "../../assets/images/menCollection.png";

export default function GenderCollectionSection() {
  const collections = [
    {
      title: "Women's Collection",
      image: womenCollectionImage,
      link: "/collections/all?gender=women",
    },
    {
      title: "Men's Collection",
      image: menCollectionImage,
      link: "/collections/all?gender=men",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Collections
          </span>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-gray-900 md:text-5xl">
            Shop By Style
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover premium fashion collections designed for comfort,
            confidence, and everyday elegance.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="h-150 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-10 text-center text-white">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {collection.title}
                </h2>

                <p className="mt-3 max-w-sm text-sm text-gray-200 md:text-base">
                  Explore timeless pieces crafted with modern style and premium
                  quality.
                </p>

                <Link
                  to={collection.link}
                  className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
