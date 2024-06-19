import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Helmet } from 'react-helmet'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Landing from './components/LandingPage'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
    </Helmet>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element = { <SignUp />} />
      <Route path='/signin' element = { <SignIn />} />
      <Route path='/' element = { <Landing/>} />
      <Route path='/dashboard' element = { <Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
)
}

export default App;
 