import React from "react";
import Card from "./card.js";
import Container from "@material-ui/core/Container";

export default function CardContainer(props) {
  return (
    <Container maxWidth="sm">
      {props.ideas.map((idea, key) => {
        return <Card {...idea} key={idea.id} />;
      })}
    </Container>
  );
}
