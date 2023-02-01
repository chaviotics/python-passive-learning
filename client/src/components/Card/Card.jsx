import React from 'react';
import CardCSS from './Card.module.css';

function Card(props) {
  return (
    <div className={CardCSS.container}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
