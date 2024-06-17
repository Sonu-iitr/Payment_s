import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SignUp} from "./components/SignUp";
import {SignIn} from './components/SignIn';
import {BrowserRouter , Route , Routes, Switch} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element = { <SignUp />} />
      <Route path='/signin' element = { <SignIn />} />
    </Routes>
    </BrowserRouter>
    </>
)
}

export default App;
 