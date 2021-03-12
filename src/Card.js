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
                <h2>{name}</h2>
                <p>{dojo}</p>
                <h4>Sensei: {sensei}</h4>
            </div>
        </div>
    );
}

export default Card;