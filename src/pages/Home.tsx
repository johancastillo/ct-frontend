import React, {Component} from 'react';
import axios from 'axios';
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
              <MainContent />
              <Footer />
              <AcountSidebar />
              <GoToTop />
            </>
        )
    }
}

export default Home;
