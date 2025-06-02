import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import CustomCarousel from './components/CustomCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CustomCarousel/>
    </>
  )
}

export default App
