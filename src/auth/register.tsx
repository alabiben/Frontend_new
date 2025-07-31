import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useShopContext } from '../context'

function Register() {
  const navigate = useNavigate()
  const context = useShopContext()
  const backendUrl = context?.backendUrl || ""
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("mentee") // or "mentor"
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    try {
      await axios.post(`${backendUrl}/api/auth/register`, { name, email, password, role })
      navigate('/login')
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-400">
      <form className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <select
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option value="mentee">Mentee</option>
          <option value="mentor">Mentor</option>
        </select>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Register