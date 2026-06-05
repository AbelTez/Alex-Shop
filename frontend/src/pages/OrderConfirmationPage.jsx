import React from "react";

const checkout = {
  _id: "1234567890",
  createdAt: "2026-06-05T20:00:00.000Z",
  checkoutItems: [
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
      price: 39.99,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "Anytown",
    country: "Ethiopia",
    postalCode: "12345",
  },
};

const calculateEstimatedDeliveryDate = (createdAt) => {
  const orderDate = new Date(createdAt);
  const estimatedDeliveryDate = new Date(orderDate);
  estimatedDeliveryDate.setDate(orderDate.getDate() + 7);
  return estimatedDeliveryDate.toLocaleDateString();
};

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold ">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date().toLocaleDateString()}
              </p>
            </div>
            {/* estimated library */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated delivery date:{" "}
                {calculateEstimatedDeliveryDate(checkout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {checkout.checkoutItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="text-md font-semibold ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">
                    Size: {item.size} | {item.color}
                  </p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-500">Paid with PayPal</p>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-2">Shipping Address</h4>
                <p className="text-gray-500">
                  {checkout.shippingAddress.address}
                </p>
                <p className="text-gray-500">
                  {checkout.shippingAddress.city}, {checkout.shippingAddress.country} {checkout.shippingAddress.postalCode}
                </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
