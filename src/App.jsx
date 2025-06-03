import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import CustomCarousel from './components/CustomCarousel'
import Card from './components/Card'
import BestsellerProducts from './components/BestSellerProducts';
import MostPopular from './components/MostPopular';
import BestsellerProducts2 from './components/BestSellerProducts2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CustomCarousel/>
      <Card/>
      <BestsellerProducts/>
      <MostPopular/>
      <BestsellerProducts2/>
    </>
  )
}

export default App
