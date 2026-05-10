import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function NewArrivals() {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
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

  // Scroll Buttons
  const updateButtons = () => {
    const container = scrollRef.current;

    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5,
    );
  };

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    updateButtons();

    container.addEventListener("scroll", updateButtons);

    return () => {
      container.removeEventListener("scroll", updateButtons);
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Latest Collection
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-black md:text-5xl">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Explore newly released fashion essentials crafted for comfort and
              modern everyday style.
            </p>
          </div>

          {/* Buttons */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`rounded-full border p-3 transition ${
                canScrollLeft
                  ? "bg-white hover:bg-black hover:text-white"
                  : "cursor-not-allowed opacity-40"
              }`}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`rounded-full border p-3 transition ${
                canScrollRight
                  ? "bg-white hover:bg-black hover:text-white"
                  : "cursor-not-allowed opacity-40"
              }`}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="group h-auto relative min-w-100 snap-start overflow-hidden rounded-3xl bg-gray-50"
            >
              {/* Image */}
              <div>
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  className="h-95 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/products/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
