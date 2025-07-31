import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShopContext } from '../context'
import axios from 'axios'

function Profile() {
  const navigate = useNavigate()
  const context = useShopContext()
  const backendUrl = context?.backendUrl || ""
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [skills, setSkills] = useState("")
  const [goals, setGoals] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    try {
      const token = localStorage.getItem('token')
      await axios.post(
        `${backendUrl}/api/profile`,
        { name, bio, skills, goals },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.response?.data?.message || "Profile update failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-400">
      <form className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Profile</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          placeholder="Bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={e => setSkills(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Goals"
          value={goals}
          onChange={e => setGoals(e.target.value)}
          required
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800 transition"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  )
}

export default Profile