import React from 'react';
import { Route, Link } from 'wouter';

// Pages
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Admin from './admin/admin-home/Admin';
import Header from './components/header/Header';
import AcountSidebar from './components/acount-sidebar/AcountSidebar';
import Products from './pages/products/Products';
import AboutUs from './pages/about-us/AboutUS';
import ContactUs from './pages/contact-us/ContactUs';
import ProductDetails from './pages/single-product/SingleProduct';
import Favorites from './pages/favorites/Favorites';
import HomeTwo from './pages/home-two/HomeTwo';


const App = () => {
  return (
    <>
      <Header />
      <AcountSidebar />

      <Link href="/">
        <a>Home</a>
      </Link>

      <Route path="/" component={Home} />
      <Route path="/home" component={HomeTwo} />
      <Route path="/products" component={Products} />
      <Route path="/favoritos" component={Favorites} />
      <Route path="/product-details" component={ProductDetails} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/ct-admin" component={Admin} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={PageNotFound} />

    </>
  )
}

export default App;
