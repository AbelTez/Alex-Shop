import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function NewArrivals() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Hoodie",
      price: 85,
      images: [
        {
          url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
          altText: "Classic Hoodie",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual T-Shirt",
      price: 40,
      images: [
        {
          url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
          altText: "Casual T-Shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Denim Jeans",
      price: 95,
      images: [
        {
          url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "5",
      name: "Summer Shorts",
      price: 55,
      images: [
        {
          url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
          altText: "Summer Shorts",
        },
      ],
    },
    {
      _id: "6",
      name: "Leather Boots",
      price: 160,
      images: [
        {
          url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          altText: "Leather Boots",
        },
      ],
    },
    {
      _id: "7",
      name: "Elegant Coat",
      price: 210,
      images: [
        {
          url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
          altText: "Elegant Coat",
        },
      ],
    },
    {
      _id: "8",
      name: "Sport Sneakers",
      price: 130,
      images: [
        {
          url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          altText: "Sport Sneakers",
        },
      ],
    },
    {
      _id: "9",
      name: "Minimal Watch",
      price: 180,
      images: [
        {
          url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          altText: "Minimal Watch",
        },
      ],
    },
    {
      _id: "10",
      name: "Travel Backpack",
      price: 145,
      images: [
        {
          url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          altText: "Travel Backpack",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              New Collection
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Discover the latest trends and premium fashion pieces curated for
              modern style and everyday comfort.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-gray-300 bg-white p-3 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-gray-300 bg-white p-3 text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="group min-w-[280px] overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Product Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xl font-bold text-black">
                    ${product.price.toFixed(2)}
                  </p>

                  <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}