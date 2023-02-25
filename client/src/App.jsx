import { useState } from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Register/>
    </div>
  )
}

export default App
