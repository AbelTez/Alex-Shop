import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

export default function CartContents() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 19.99,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 29.99,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Sneakers",
      size: "XXL",
      color: "White",
      quantity: 1,
      price: 49.99,
      image: "https://picsum.photos/200?random=3",
    },
  ];

  return (
    <div className="space-y-5">
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          {/* Left Section */}
          <div className="flex items-center gap-5">
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-28 w-24 object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <span className="rounded-full bg-gray-100 px-2 py-1">
                    Size: {product.size}
                  </span>

                  <span className="rounded-full bg-gray-100 px-2 py-1">
                    Color: {product.color}
                  </span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                  <button className="px-3 py-1 text-lg text-gray-600 transition hover:bg-gray-100">
                    -
                  </button>

                  <span className="px-4 text-sm font-medium">
                    {product.quantity}
                  </span>

                  <button className="px-3 py-1 text-lg text-gray-600 transition hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              <p className="pt-1 text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end justify-between gap-5 self-stretch">
            <button className="rounded-full p-2 text-red-500 transition hover:bg-red-50 hover:text-red-600">
              <RiDeleteBin3Line className="h-5 w-5" />
            </button>

            <div className="text-right">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="text-xl font-bold text-gray-900">
                ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}