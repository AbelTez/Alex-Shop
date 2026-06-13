import React , {useState ,useEffect}from "react";
import { useNavigate } from "react-router-dom";
export default function MyOrder() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const mockOrders = [
        {
          _id: 123456,
          createdAt: new Date().toISOString(),
          shippingAddress: {
            address: "123 Main St",
            city: "New York",
          },
          ordersItems: [
            {
              name: "Product 1",
              price: 49.99,
              quantity: 1,
              image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80",
            },
          ],
          totalPrice: 99.99,
          isPaid: true,
        },
        {
          _id: 789012,
          createdAt: new Date().toISOString(),
          shippingAddress: {
            address: "456 Oak Ave",
            city: "Los Angeles",
          },
          ordersItems: [
            {
              name: "Product 2",
              price: 29.99,
              quantity: 2,
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80",
            },
          ],
          totalPrice: 59.98,
          isPaid: false,
        },
        {
          _id: 345678,
          createdAt: new Date().toISOString(),
          shippingAddress: {
            address: "789 Pine St",
            city: "Chicago",
          },
          ordersItems: [
            {
              name: "Product 3",
              price: 19.99,
              quantity: 1,
              image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&q=80",
            },
          ],
          totalPrice: 19.99,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const handleRowClick = (orderId) => {
    // Navigate to order details page
    navigate(`/order/${orderId}`);
  };
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            My Orders
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Check the status of recent orders, manage returns, and view
            receipts.
          </p>
        </div>
      </div>

      {isLoading ? (
        /* Loading Skeleton State */
        <div className="w-full flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
          <p className="text-gray-500 text-sm">
            Fetching your order history...
          </p>
        </div>
      ) : orders.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg font-medium">No orders found</p>
          <p className="text-gray-400 text-sm mt-1">
            Looks like you haven't placed any orders yet.
          </p>
        </div>
      ) : (
        /* Data Table State */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm text-gray-500">
              <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase font-semibold text-gray-600 tracking-wider">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Date Purchased</th>
                  <th className="px-6 py-4">Ship To</th>
                  <th className="px-6 py-4 text-center">Items</th>
                  <th className="px-6 py-4">Total Amount</th>
                  <th className="px-6 py-4">Payment Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 bg-white">
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    onClick={() => handleRowClick(order._id)}
                    className="hover:bg-gray-50/70 cursor-pointer transition-colors"
                  >
                    {/* Image & Product Name Column */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {order.ordersItems?.[0] && (
                          <img
                            src={order.ordersItems[0].image}
                            alt={order.ordersItems[0].name}
                            className="h-12 w-12 object-cover rounded-xl border border-gray-100 bg-gray-50 shrink-0"
                          />
                        )}
                        <span className="font-medium text-gray-900 max-w-45 truncate">
                          {order.ordersItems?.[0]?.name || "Package Item"}
                        </span>
                      </div>
                    </td>

                    {/* Order ID */}
                    <td className="px-6 py-4 font-mono text-xs text-gray-400 tracking-wider">
                      #{order._id}
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    {/* Shipping Address */}
                    <td className="px-6 py-4 max-w-50 truncate text-gray-600">
                      <div>{order.shippingAddress.address}</div>
                      <div className="text-xs text-gray-400">
                        {order.shippingAddress.city}
                      </div>
                    </td>

                    {/* Items Count */}
                    <td className="px-6 py-4 text-center font-medium text-gray-700">
                      {order.ordersItems.length}
                    </td>

                    {/* Total Price */}
                    <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      ${order.totalPrice.toFixed(2)}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.isPaid ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                          Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
                          Pending Payment
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
