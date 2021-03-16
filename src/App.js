import React from 'react';
import CardList from './CardList';
import { fighters } from './fighters';

const App = () => {
    return (
        <CardList fighters={fighters} />
    )
}

export default App;