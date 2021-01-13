import React, {Component} from 'react';
import axios from 'axios';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';

class Home extends Component {

    componentDidMount(){
        
    }

    render(){
        return (
            <>
              <MainContent />
              <Footer />
              <GoToTop />
            </>
        )
    }
}

export default Home;
