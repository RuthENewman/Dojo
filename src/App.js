import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { fighters } from './fighters';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            fighters: fighters,
            searchField: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="tc">
                <h1 className="tc">Welcome to the Dojo</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList fighters={this.state.fighters} />
            </div>
        )
    }
}

export default App;