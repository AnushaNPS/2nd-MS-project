import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="app-page">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home'element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
