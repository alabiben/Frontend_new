import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-400">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to your Dashboard!</h2>
        <p className="text-lg text-gray-700">Here you can manage your mentorship activities.</p>
      </div>
    </div>
  )
}

export default Dashboard