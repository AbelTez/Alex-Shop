import React from 'react'

export default function Login() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  return (
    <div className='w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12'>
        <form className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
            <div className="flex justify-center mb-6">
                <h2 className="text-xl font-medium">Rabbit</h2>

            </div>
            <h2 className="text-2xl font-bold mb-6">Hey there! 🙌</h2>
            <p className="text-center mb-6">Welcome back! Please enter your details to log in.</p>
        <div className="mb-4 ">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
            </label>
            <input
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-4 ">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        </form>
      
    </div>
  )
}
