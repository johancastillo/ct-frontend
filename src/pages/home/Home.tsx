import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {

    componentDidMount(){
        axios.get('localhost:4000/api/products')
        .then(
            response => console.log(response.data)             
        ).catch(
            e => console.log(e)
        )
    }

    render(){
        return (
            <h1>Home</h1>
        )
    }
}

export default Home;