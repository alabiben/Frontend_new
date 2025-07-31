import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './auth/register'
import Login from './auth/login'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
function App () {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App