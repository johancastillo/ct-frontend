import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Components
import Navegation from './components/navegation/Navegation';

function App() {
  return (
    <>
      <Router>
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
      

        <Route exact path="/">
          <Navegation />
          <h1>Hello World</h1>
        </Route>

        <Route exact path="/products">
          <h1>Products</h1>
        </Route>

        <Route exact path="/about-us">
          <h1>About us</h1>
        </Route>

        <Route exact path="/contact-us">
          <h1>Contact Us</h1>
        </Route>


      </Router>
    </>
  );
}

export default App;
