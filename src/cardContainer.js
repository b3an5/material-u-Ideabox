import React from "react";
import Card from "./card.js";

export default function CardContainer(props) {
  return (
    <div>
      {props.ideas.map((idea, key) => {
        return <Card {...idea} key={idea.id} />;
      })}
    </div>
  );
}
