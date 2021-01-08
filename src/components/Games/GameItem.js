import React from 'react'
import { ItemWrapper } from './Games.styles';

const GameItem = ({game,onShowDetail}) => {
    return (
        <ItemWrapper onClick={() => {
            onShowDetail && onShowDetail(game);
          }}>
            <img src={game.image} alt=''/>
        </ItemWrapper>
    )
}

export default GameItem
