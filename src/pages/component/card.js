import React from "react";
import "./card.css"; // Make sure to have the Card.css file for styling

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button onClick={props.onApply}>
          <i className="fas fa-pen"> Apply </i>
        </button>
      </div>
    </div>
  );
};

export default Card;
