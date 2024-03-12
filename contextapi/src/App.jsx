// import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
<Login/>
<Profile/>
    </UserContextProvider>
  )
}

export default App
