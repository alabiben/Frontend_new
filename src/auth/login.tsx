import React from 'react'
import axios from "axios"
import {useState} from "react"
import { useShopContext } from '../context.tsx'
import { useNavigate } from 'react-router-dom'
    interface Loginresponse {
        token: string,
        user: {
            id: string,
            email: string,
            name: string,
            role: string
        }   
    }
function Login() {
    const navigate = useNavigate()
    const context = useShopContext()
    const backendUrl = context?.backendUrl || ""
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)
  setError("")
  try {
    const response = await axios.post<Loginresponse>(`${backendUrl}/api/auth/login`, { email, password })
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token)
      if (response.data.user.bio && response.data.user.skills && response.data.user.goals) {
        navigate('/dashboard')
      } else {
        navigate('/profile')
      }
    }
  } catch (error: any) {
    setError(error?.response?.data?.message || "Login failed")
    console.log(error)
  } finally {
    setIsLoading(false)
  }
}

  return (
     <div className="set mt-10 justify-self-center mx-auto">
          <h1 className="justify-self-center justify-center font-bold text-6xl">Mentorship Login Page</h1>
          <form className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg" onSubmit={submit}>
                <h1 className="text-xl font-bold text-center">Login to Your Account</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-grey-600 mb-2">
                        Email Address
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="type in a valid email address" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </input>
                    <div className="mt-5">
                        <label htmlFor="email" className="block text-grey-600 mb-5">
                        Password
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="type in a valid password" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </input>
                    <div className="mt-5">
                    </div>
                    <button type="submit" className="right-3 top-9 mt-5 text-2xl bg-amber-400 p-5 rounded-2xl focus:outline-none hover:bg-amber-800">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login