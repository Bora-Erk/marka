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
import ProductDescription from './components/ProductDescription';
import ProductBestSeller from './components/ProductBestSeller';
import Contact from './components/Contact';
import ContactCall from './components/ContactCall';
import ContactTalk from './components/ContactTalk';
import TeamHeader from './components/TeamHeader';
import TeamHero from './components/TeamHero';
import Team from './components/Team';
import TeamCTA from './components/TeamCTA';
import AboutUsHeader from './components/AboutUsHeader';
import AboutUsText from './components/AboutUsText';
import AboutUsNumbers from './components/AboutUsNumbers';
import VideoThumbnail from './components/AboutUsVideo';
import Brands2 from './components/Brands2';
import AboutUsTestimonial from './components/AboutUsTestimonial';

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
          <ProductDescription/>
          <ProductBestSeller/>
          <Brands/>
        </Route>
      
        <Route path='/contact'>
          <Contact/>
          <ContactCall/>
          <ContactTalk/>
        </Route>

        <Route path='/team'>
          <TeamHeader/>
          <TeamHero/>
          <Team/>
          <TeamCTA/>
        </Route>

        <Route path='/about'>
          <AboutUsHeader/>
          <AboutUsText/>
          <AboutUsNumbers/>
          <VideoThumbnail/>
          <Team/>
          <Brands2/>
          <AboutUsTestimonial/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  )
}

export default App

