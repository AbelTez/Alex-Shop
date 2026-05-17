import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 160,
  description:
    "A stylish jacket perfect for any occasion. Made from high-quality materials to keep you warm and fashionable.",
  brand: "FashionCo",
  materials: "100% Polyester",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Navy", "Gray"],
  category: "Outerwear",
  stock: 5,
  images: [
    {
      url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      altText: "Stylish Jacket",
    },
    {
      url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
      altText: "Stylish Jacket Back",
    },
  ],
};
const similarProducts = [
  {
    _id: "1",
    name: "product 1",
    price: 80,
    images: [
      {
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        altText: "Product 1"
      }
    ]
  },
  {
    _id: "2",
    name: "product 2",
    price: 90,
    images: [
      {
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        altText: "Product 2"
      }
    ]
  },
  {
    _id: "3",
    name: "product 3",
    price: 100,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        altText: "Product 3"
      }
    ]
  },
  {
    _id: "4",
    name: "product 4",
    price: 110,
    images: [
      {
        url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06",
        altText: "Product 4"
      }
    ]
  }
]
export default function ProductDetails() {
  const [mainImage, setMainImage] = useState(
    selectedProduct.images[0]?.url || "",
  );
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => {
      if (prev + delta > selectedProduct.stock || prev + delta < 1) {
        return prev; // Don't allow increasing beyond stock or decreasing below 1
      }
      const newQuantity = prev + delta;
      return Math.max(1, newQuantity);
    });
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Please select a color and size.");
      toast.error("Please select a color and size.");
      return;
    }
    if (quantity < 1) {
      setErrorMessage("Please select a quantity.");
      toast.error("Please select a quantity.");
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
      toast.success("Item added to cart!");
    }, 1000);
  };

  const handleWishlistToggle = () => {
    setIsInWishlist((prev) => {
      const updated = !prev;
     setTimeout(() => {
      toast.success(updated ? "Added to wishlist!" : "Removed from wishlist!");
      }, 10);
      return updated;
    });
  };

  return (
    <div className="bg-[#f8f8f8] py-14">
      <div className="mx-auto max-w-7xl rounded-4xl bg-white p-6 shadow-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="flex gap-5">
            {/* Desktop Thumbnails */}
            <div className="hidden flex-col gap-4 md:flex">
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${index}`}
                  className="h-24 w-24 cursor-pointer rounded-2xl border border-gray-200 object-cover transition-all duration-300 hover:scale-105 hover:border-black"
                  onClick={() => setMainImage(img.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="overflow-hidden rounded-[28px] bg-gray-100">
                <img
                  src={mainImage}
                  alt={selectedProduct.images[0].altText || "Main Product"}
                  className="h-125 lg:h-162.5 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Mobile Thumbnails */}
              <div className="mt-4 flex gap-4 overflow-x-auto md:hidden">
                {selectedProduct.images.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={img.altText || `Thumbnail ${index}`}
                    className={`h-20 w-20 min-w-20 cursor-pointer rounded-2xl border border-gray-200 object-cover transition-all duration-300 hover:scale-105 hover:border-black 
                    ${
                      mainImage === img.url ? "border-black" : "border-gray-200"
                    }`}
                    onClick={() => setMainImage(img.url)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            {/* Product Title */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {selectedProduct.brand}
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900">
                {selectedProduct.name}
              </h1>

              {/* Price */}
              <div className="mt-4 flex items-center gap-4">
                <p className="text-3xl font-bold text-black">
                  ${selectedProduct.price}
                </p>

                <p className="text-lg text-gray-400 line-through">
                  ${selectedProduct.originalPrice}
                </p>

                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  SALE
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-gray-600">
                {selectedProduct.description}
              </p>
            </div>

            {/* Colors */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Colors
              </p>

              <div className="flex gap-3">
                {selectedProduct.colors.map((color) => (
                  <button
                    aria-label={`Select ${color} color`}
                    key={color}
                    className={`h-10 w-10 rounded-full border-2 border-gray-200 transition hover:scale-110 hover:border-black ${selectedColor === color ? "border-4 border-red-500" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Sizes
              </p>

              <div className="flex flex-wrap gap-3">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white ${selectedSize === size ? "border-black bg-black text-white" : "border-gray-300"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-2xl border border-gray-300">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className={`px-5 py-3 text-lg transition hover:bg-gray-100 ${quantity === 1 ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  -
                </button>

                <span className="px-6 text-lg font-semibold">{quantity}</span>

                <button
                  onClick={() => handleQuantityChange(1)}
                  className={`px-5 py-3 text-lg transition hover:bg-gray-100 ${quantity >= selectedProduct.stock ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`flex-1 rounded-2xl bg-black py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-gray-800
                   ${isButtonDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              >
               {isButtonDisabled ? "Adding..." : "Add to Cart"}
              </button>

              <button
                onClick={handleWishlistToggle}
                className={`flex-1 rounded-2xl border border-gray-300 py-4 text-sm font-semibold uppercase tracking-wide text-gray-900 transition hover:border-black hover:bg-black hover:text-white
              ${
                isInWishlist
                  ? "border-black bg-black text-white"
                  : "border-gray-300 text-gray-900 hover:border-black hover:bg-black hover:text-white"
              }`}
              >
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Characteristics */}
            <div className="mt-12 rounded-3xl bg-gray-50 p-6">
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Characteristics
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span>Brand</span>
                  <span className="font-medium text-gray-900">
                    {selectedProduct.brand}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span>Material</span>
                  <span className="font-medium text-gray-900">
                    {selectedProduct.materials}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span>Category</span>
                  <span className="font-medium text-gray-900">
                    {selectedProduct.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Stock</span>
                  <span className="font-medium text-green-600">
                    {selectedProduct.stock} Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">You may also like</h2>
            <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
}
