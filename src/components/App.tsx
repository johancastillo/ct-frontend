import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Admin from '../pages/Admin';
import Header from './Header';
import AcountSidebar from './AcountSidebar';
import ProductCard from './ProductCard';


function App() {
  return (
    <>
      <Router>
        <Header />
        <AcountSidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/admin" component={Admin} />


          <Route exact path="/products">
            <h1>Products</h1>
            <ProductCard 
              image="http://image-galery.herokuapp.com/static/media/2.e07daa38.webp"
              title="Product one"
            />

          </Route>

          <Route exact path="/about-us">
            <h1>About us</h1>
          </Route>

          <Route exact path="/contact-us">
            <h1>Contact Us</h1>
          </Route>

          <Route component={PageNotFound} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
