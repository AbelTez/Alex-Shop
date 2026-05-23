import React from 'react'

export default function MyOrder() {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            const mockOrders =[
                {
                    _id: 123456,
                    createdAt: new Date().toISOString(),
                    shippingAddress: {
                        country: "123 Main St",
                        city: "New York",},
                    ordersItems: [
                        {
                            name: "Product 1",
                            price: 49.99,
                            quantity: 1,
                            image: "https://via.placeholder.com/150",
                        }],    
                    totalPrice: 99.99,
                    isPaid: true,
                  
                }
            ]
            setOrders(mockOrders);
        }, 1000);
    }, [])
  return (
    <div className="max-w-7xl max-auto p-4 sm:p-6">
      
    </div>
  )
}
