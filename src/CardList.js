import React from 'react';
import Card from './Card';

const CardList = ({ fighters }) => {
    return (
        <div>
            {
              fighters.map((user, i) => {
                return (
                        <Card 
                        key={i}
                        id={fighters[i].id} 
                        name={fighters[i].name}
                        imageURL={fighters[i].imageURL}
                        dojo={fighters[i].dojo}
                        sensei={fighters[i].sensei}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;