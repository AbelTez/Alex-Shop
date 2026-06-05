import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
  cartProducts: [
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
      size: "32",
      color: "Blue",
      quantity: 1,
      price: 49.99,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  totalPrice: 99.97,
};

export default function Checkout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Fixed typo: hundle -> handle
  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId("1234567890");
  };

  const handlePaypalSuccess = (detail) => {
    console.log("Payment successful!", detail);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
        {/* Removed max-w-md to allow the form to fill its grid space properly */}
        <form onSubmit={handleCreateCheckout} className="w-full">
          <h3 className="text-lg mb-6 capitalize font-medium">Checkout</h3>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value="user@example.com"
              disabled
              className="w-full border border-gray-300 bg-gray-50 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <h3 className="text-lg mb-4 font-medium">Delivery</h3>

          {/* Grid layout for the inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Address made to span across both columns */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                required
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="postalCode" className="block text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Continue to Payment
              </button>
            ) : (
              <div className="p-4 bg-gray-50 border rounded-md text-center">
                <p className="text-sm text-gray-500 mt-1">Pay with PayPal</p>
                <PaypalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaypalSuccess}
                  onError={(err) => alert("Payment failed please try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right side - order summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.cartProducts.map((product, index) => (
            <div
              key={index}
              className="flex item-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">
                    Color: {product.color}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Size: {product.size}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between item-center text-lg mb-4">
          <p>subtotal</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between item-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between item-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
