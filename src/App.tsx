import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Router>
      <Header />
      <AcountSidebar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={HomeTwo} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/favoritos" component={Favorites} />
        <Route exact path="/product-details" component={ProductDetails} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/ct-admin" component={Admin} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  )
}

export default App;
