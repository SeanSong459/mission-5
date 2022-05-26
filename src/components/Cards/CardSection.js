import React from "react";
import Card from "./Card";
import "./CardSection.css";

const cards = [
  {
    id: "1",
    title: "Third party",
    content:
      "Basic cover for you if you damage someone else's property with your car",
    button: "More info",
  },
  {
    id: "2",
    title: "Third party, Fire & Theft",
    content:
      "Cover for your car if it is damaged by fire, stolen, or you accidentally damage someone else's property with your car",
    button: "More info",
  },
  {
    id: "3",
    title: "Comprehensive",
    content:
      "Keep yourself fully protected with our most popular cover. We'll cover damage to your car, as well as damage you might cause to someone else's car or property",
    button: "More info",
  },
];

const CardSection = () => {
  return (
    <div className="CardContainer">
      <div className="CardWrapper">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              button={card.button}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
