import React from "react";
import { useLocation } from "react-router-dom";
import {
  GameContainer,
  GameDesc,
  GameHeading,
  GameLinks,
  GameImg,
  GameLink
} from "./GameDetail.styles";

const GameDetail = () => {
  
  const { state } = useLocation();

  return (
    <GameContainer>
        <br/>
        <br/>
      <GameHeading>{state.game.name}</GameHeading>
      <GameDesc>{state.game.desc1}</GameDesc>
      <GameDesc>{state.game.desc2}</GameDesc>
      <GameDesc>{state.game.desc3}</GameDesc>
      <GameLinks>
        <GameLink href={state.game.applink}>
          <img
            src="https://www.mayadem.com/wp-content/uploads/2015/12/appstore.png"
            alt=""
          />
        </GameLink>
        <GameLink href={state.game.playlink}>
          <img
            src="https://www.mayadem.com/wp-content/uploads/2015/12/googleplay.png"
            alt=""
          />
        </GameLink>
      </GameLinks>
      <GameImg src={state.game.image} alt="" />
    </GameContainer>
  );
};

export default GameDetail;
