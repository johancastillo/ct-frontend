import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// Components
import Navegation from '../components/navegation/Navegation';
// Pages
import Home from '../pages/home/Home';
import PageNotFound from '../pages/page-not-found/PageNotFound';


function App() {
  return (
    <>
      <Router>
        <Navegation />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/products">
            <h1>Products</h1>
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
