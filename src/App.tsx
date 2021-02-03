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


const App = () => {
  return (
    <Router>
      <Header />
      <AcountSidebar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/product-details" component={ProductDetails} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  )
}

export default App;
