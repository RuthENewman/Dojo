import React from 'react';
import './Card.css';

const Card = (props) => {
    const {name, dojo, sensei, imageURL, jpegURL } = props;
    return (
        <div className="tc bg-light-green dib ma3 grow bw2 shadow-5">
            {/* <img 
            src={`${jpegURL}`}
            alt="static profile"
            className="static"
            /> */}
            <img 
             src={`${imageURL}`}
             alt="profile"
             className="active"
             />
            <div>
                <h3>{name}</h3>
                <p>{dojo}</p>
                <p>Sensei: {sensei}</p>
            </div>
        </div>
    );
}

export default Card;