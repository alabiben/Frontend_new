import React from 'react'
import { useNavigate } from 'react-router-dom'
import learner from '../assets/learner.png.jpg'

function Home() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
  const token = localStorage.getItem('token')
  if (token) {
    navigate('/login')
  } else {
    navigate('/register')
  }
}

  return (
    <div className="bg-gradient-to-br from-cyan-200 to-blue-400 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-12 flex flex-col items-center max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center">
          Welcome to the Mentorship Website
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Connect, learn, and grow with mentors and peers. Join our community to unlock your full potential!
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-200 flex flex-col items-center"
          onClick={handleGetStarted}
        >
          Get Started
          <div>
            <img src={learner} alt="Learner" className="w-16 h-16 rounded-full mt-4" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Home