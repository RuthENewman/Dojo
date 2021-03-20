import React, { Component } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import NoFightersFound from './NoFightersFound';
import { fighters } from './fighters';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            fighters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // TODO fetch from fighters API 
        this.setState({ fighters: fighters });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredFighters = this.state.fighters.filter((fighters) => {
            return fighters.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.fighters.length === 0) {
            return <h2>Loading...</h2>
        }
        if (filteredFighters.length === 0) {
            return (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={this.onSearchChange}/>
                    <NoFightersFound />
                </div>
            )
        } else {
            return (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList fighters={filteredFighters} />
                </Scroll>
                </div>
            )
        }
    }
}

export default App;