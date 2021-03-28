import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, dojo, sensei, imageURL } = props;
    return (
        <div className="tc bg-light-green dib ma3 grow bw2 shadow-5">
            <img 
             src={`${imageURL}`}
             alt="profile"
             className="active"
             />
            <div>
                <h2>{name}</h2>
                <h2>{dojo}</h2>
                <h3>Sensei: {sensei}</h3>
            </div>
        </div>
    );
}

export default Card;