import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Admin from './admin/admin-home/Admin';
import Header from './components/header/Header';
import AcountSidebar from './components/acount-sidebar/AcountSidebar';
import Products from './pages/products/Products';


function App() {
  return (
    <>
      <Router>
        <Header />
        <AcountSidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/products" component={Products} />
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
