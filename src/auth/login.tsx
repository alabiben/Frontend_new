import React from 'react'
import axios from "axios"
import {useState} from "react"

function Login() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const submit = async (e:React.FormEvent<HTMLFormElement>) =>{
        try {
            e.preventDefault()
            console.log("password", password)
            console.log("email", email)

        } catch (error) {
            
        }
        
    }
  return (
     <div className="set mt-10 justify-self-center mx-auto">
          <h1 className="justify-self-center justify-center font-bold text-6xl">Mentorship Login Page</h1>
          <form className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg" onSubmit={submit}>
                <h1 className="text-xl font-bold text-center">Login to Your Account</h1>
                <div className="mb-4">
                    <label htmlfor="email" className="block text-grey-600 mb-2">
                        Email Address
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="type in a valid email address" required className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </input>
                    <div className="mt-5">
                        <label htmlfor="email" className="block text-grey-600 mb-5">
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