import React from 'react';
import { Route, Link, Switch } from 'wouter';
import makeMatcher from "wouter/matcher";
import { pathToRegexp } from "path-to-regexp";

// Pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header';
import AcountSidebar from './components/AcountSidebar';
import Products from './pages/Products';
import AboutUs from './pages/AboutUS';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/SingleProduct';
import Favorites from './pages/Favorites';
import HomeTwo from './pages/HomeTwo';
import AdminHome from './admin/admin-home/AdminHome';

const customMatcher = makeMatcher((path) => {
  let keys = [];
  const regexp = pathToRegexp(path, keys, { strict: true });
  return { keys, regexp };
});

const App = () => {
  return (
    <>
      <Header />
      <AcountSidebar />

      <Switch matcher={customMatcher}>
        <Route path="/" component={Home} />
        <Route path="/home" component={HomeTwo} />
        <Route path="/products" component={Products} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/ct-admin" component={AdminHome} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>

    </>
  )
}

export default App;
