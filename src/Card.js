import React, { Component } from 'react';

const Card = (props) => {
    const {name, dojo, sensei, id } = props;
    return (
        <div className="tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5">
            <img 
             src={`https://robohash.org/${id}?200x200`}
             alt="profile"/>
            <div>
                <h3>{name}</h3>
                <p>{dojo}</p>
                <p>Sensei: {sensei}</p>
            </div>
        </div>
    );
}

export default Card;