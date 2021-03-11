import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { fighters } from './fighters';

ReactDOM.render(
  <div>
    <Card 
      id={fighters[0].id} 
      name={fighters[0].name}
      dojo={fighters[0].dojo}
      sensei={fighters[0].sensei}
    />
    <Card 
       id={fighters[1].id} 
       name={fighters[1].name}
       dojo={fighters[1].dojo}
       sensei={fighters[1].sensei}
    />
    <Card
      id={fighters[2].id} 
      name={fighters[2].name}
      dojo={fighters[2].dojo}
      sensei={fighters[2].sensei}
    />
  </div>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
