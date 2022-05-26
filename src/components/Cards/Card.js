import React from "react";
import "./Card.css";

const Card = ({ title, content, button }) => {
  return (
    <>
      <div className="card">
        <div className="CardTitle">{title}</div>
        <div className="CardContent">{content}</div>
        <button className="CardButton">{button}</button>
      </div>
    </>
  );
};

export default Card;
