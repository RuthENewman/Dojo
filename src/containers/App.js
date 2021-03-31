import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import NoFightersFound from '../components/NoFightersFound';
import ErrorBoundary from '../components/ErrorBoundary';
import { fighters } from '../fighters';
import './App.css';
// import { render } from '@testing-library/react';


function App(){
    // constructor() {
    //     super();
        
    //     this.state = {
    //         fighters: [],
    //         searchField: ''
    //     }
    // }

    // componentDidMount() {
    //     // TODO fetch from fighters API 
    //     this.setState({ fighters: fighters });
    // }

    const onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }


    const { fighters, searchField } = this.state;
    const filteredFighters = fighters.filter((fighter) => {
        return fighter.name.toLowerCase().includes(searchField.toLowerCase());
        });
    if (!fighters.length) {
        return <h2>Loading...</h2>
    }
    if (!filteredFighters.length) {
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
                    <ErrorBoundary>
                        <CardList fighters={filteredFighters} />
                    </ErrorBoundary>
                </Scroll>
                </div>
            )
        }
}

export default App;