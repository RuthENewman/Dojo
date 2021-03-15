import React from 'react';
import Card from './Card';

const CardList = ({ fighters }) => {
    const cardComponent = fighters.map((user, i) => {
        return <Card 
        key={i}
        id={fighters[i].id} 
        name={fighters[i].name}
        imageURL={fighters[i].imageURL}
        dojo={fighters[i].dojo}
        sensei={fighters[i].sensei}
        />
    });
    return (
        <div>
            <h1 className="tc">Welcome to the Dojo</h1>
            {cardComponent}
        </div>
    );
}

export default CardList;