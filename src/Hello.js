import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    constructor() {
        super();
        this.state = {
            location: ' there!'
        }
    }

    async componentDidMount() {
        const response = await fetch('https://extreme-ip-lookup.com/json/')
        const json = await response.json();
        const city = json.city;
        console.log(city);
        if (city) {
            this.setState({location: ` there in ${city}!`});
        }
    }
    
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello {this.state.location}</h1>
                <h2>{this.props.greeting}</h2>
            </div>
        );
    }
}

export default Hello;