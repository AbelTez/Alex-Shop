import React from "react";
import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((item, index) => (
        <Link
          to={`/product/${item.id}`}
          key={`${item.id ?? "product"}-${index}`}
          className="rounded-lg  border-gray-200 p-4 transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="rounded-lg bg-white p-4">
            <div className="mb-4 h-50 w-full overflow-hidden rounded-lg">
              <img
                src={item.images[0].url}
                alt={item.images[0].altText || item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mb-2 text-sm font-medium">
              {item.name}
            </h3>

            <p className="text-sm font-medium tracking-tight text-gray-500">
              ${item.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}