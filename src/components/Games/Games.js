import React from "react";
import GameItem from "./GameItem";
import { Wrapper, Heading, Description, Container } from "./Games.styles";

const Games = ({ games, heading, desc }) => {
  return (
    <Container>
      <br />
      <Heading>{heading}</Heading>
      <Description>{desc}</Description>
      <Wrapper>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </Wrapper>
      <br />
      <br />
    </Container>
  );
};

export default Games;
