import React , {useState , useEffect} from 'react'


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
  ],
  totalPrice: 99.97
    }

export default function Checkout() {

  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState(
    {
        first:"",
        lastName:"",
        address:"",
        city:"",
        postalCode:"",
        country:"",
        phone:""
    });
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
            <form action="">
                <h3 className="text-lg mb-6">checkout</h3>
                <div className="mb-4">
                    <label htmlFor="" clas></label>
                </div>
            </form>
        </div>
      
    </div>
  )
}
