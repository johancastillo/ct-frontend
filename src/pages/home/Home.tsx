import React, {Component} from 'react'
import axios from 'axios'
import MainContent from '../../components/main-content/MainContent'
import Footer from '../../components/footer/Footer'
import GoToTop from '../../components/go-to-top/GoToTop'

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
