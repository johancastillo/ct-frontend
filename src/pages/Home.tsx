import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import AcountSidebar from '../components/AcountSidebar';
import GoToTop from '../components/GoToTop';

class Home extends Component {

    componentDidMount(){
        
    }

    render(){
        return (
            <>
              <Header />
              <MainContent />
              <Footer />
              <AcountSidebar />
              <GoToTop />
            </>
        )
    }
}

export default Home;
