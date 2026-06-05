import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id || "ORD-987654321",
      createdAt: new Date().toISOString(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard Shipping",
      shippingAddress: {
        city: "Addis Ababa",
        country: "Ethiopia",
        postalCode: "1000",
        addressLine: "456 Bole Road",
      },
      orderItems: [
        {
          productId: 1,
          name: "T-shirt",
          size: "M",
          quantity: 2,
          price: 29.99,
          image: "https://picsum.photos/200?random=1",
        },
        {
          productId: 2,
          name: "Jeans",
          size: "L",
          quantity: 1,
          price: 59.99,
          image: "https://picsum.photos/200?random=2",
        },
        {
          productId: 3,
          name: "Sneakers",
          size: "9",
          quantity: 1,
          price: 89.99,
          image: "https://picsum.photos/200?random=3",
        },
      ],
      totalPrice: 199.97,
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-white text-gray-800">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8 border-b pb-4">
        Order Details
      </h2>

      {!orderDetails ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-gray-500 animate-pulse text-lg">
            Loading order details...
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Top Meta Section */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Order Reference
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                #{orderDetails._id}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Placed on{" "}
                {new Date(orderDetails.createdAt).toLocaleDateString(
                  undefined,
                  { dateStyle: "long" },
                )}
              </p>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm ${
                  orderDetails.isPaid
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full mr-2 ${orderDetails.isPaid ? "bg-emerald-500" : "bg-amber-500"}`}
                ></span>
                {orderDetails.isPaid ? "Paid" : "Awaiting Payment"}
              </span>
              <span
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm ${
                  orderDetails.isDelivered
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full mr-2 ${orderDetails.isDelivered ? "bg-emerald-500" : "bg-blue-500"}`}
                ></span>
                {orderDetails.isDelivered ? "Delivered" : "In Transit"}
              </span>
            </div>
          </div>

          {/* Shipping & Payment Grid Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Address Card */}
            <div className="border border-gray-100 rounded-xl p-6 shadow-sm bg-white">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Shipping Address
              </h4>
              <div className="text-gray-600 text-sm space-y-1">
                <p className="font-medium text-gray-900">
                  {orderDetails.shippingAddress.addressLine ||
                    "Main Street Route"}
                </p>
                <p>
                  {orderDetails.shippingAddress.city},{" "}
                  {orderDetails.shippingAddress.postalCode}
                </p>
                <p className="text-gray-500 font-medium mt-1">
                  {orderDetails.shippingAddress.country}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-50 text-xs text-gray-400">
                  Method:{" "}
                  <span className="font-semibold text-gray-600">
                    {orderDetails.shippingMethod}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Info Card */}
            <div className="border border-gray-100 rounded-xl p-6 shadow-sm bg-white flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  Payment Information
                </h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>
                    Gateway Processor:{" "}
                    <span className="font-semibold text-gray-900">
                      {orderDetails.paymentMethod}
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs">
                    Transaction system status secure.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-baseline">
                <span className="text-sm font-medium text-gray-500">
                  Total Order Amount:
                </span>
                <span className="text-2xl font-black text-emerald-600">
                  ${orderDetails.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Product List Table Section */}
          <div className="border border-gray-100 rounded-xl shadow-sm overflow-hidden bg-white">
            <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100">
              <h4 className="text-lg font-bold text-gray-900">Items Ordered</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100 align-middle">
                <thead className="bg-gray-50/40">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      Size
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-center text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm">
                  {orderDetails.orderItems.map((item) => (
                    <tr
                      key={item.productId}
                      className="hover:bg-gray-50/60 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-14 w-14 rounded-lg object-cover border border-gray-100 shadow-sm"
                            src={item.image}
                            alt={item.name}
                          />
                          <span className="ml-4 font-semibold text-gray-900 block max-w-xs truncate">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-600">
                        <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded text-xs">
                          {item.size}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-medium text-gray-700">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-gray-500">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50/50 font-semibold text-gray-900 border-t border-gray-200">
                  <tr>
                    {/* colSpan="3" merges the Product, Size, and Quantity columns together */}
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-left text-gray-500 text-sm"
                    >
                      Order Summary
                    </td>
                    <td className="px-6 py-4 text-right text-gray-500 text-sm">
                      Total Amount:
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-black text-emerald-600 whitespace-nowrap">
                      ${orderDetails.totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
