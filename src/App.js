import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { fighters } from './fighters';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            fighters: [],
            searchField: ''
        }
        console.log('one');
    }

    componentDidMount() {
        console.log('two');
        this.setState({ fighters: fighters });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredFighters = this.state.fighters.filter((fighters) => {
            return fighters.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        console.log('three');
        return (
            <div className="tc">
                <h1 className="tc">Welcome to the Dojo</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList fighters={filteredFighters} />
            </div>
        )
    }
}

export default App;