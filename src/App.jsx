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
import Popular from './components/Popular';
import Products from './components/Products';
import Brands from './components/Brands';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ShopHeader from './components/ShopHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShopCards from './components/ShopCards';
import ProductList from './components/ProductList';
import FilterRow from './components/FilterRow';
import ProductHeader from './components/ProductHeader';
import ProductMain from './components/ProductMain';

function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path="/">
          <CustomCarousel/>
          <Card/>
          <BestsellerProducts/>
          <MostPopular/>
          <BestsellerProducts2/>
          <Popular/>
          <Products/>
          <Brands/>
          <Blog/>
        </Route>

        <Route path="/shop">
          <ShopHeader/>
          <ShopCards/>
          <ProductList/>
        </Route>

        <Route path='/product'>
          <ProductHeader/>
          <ProductMain/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  )
}

export default App

