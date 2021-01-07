import React from 'react'

const GameItem = ({game,onShowDetail}) => {
    return (
        <div onClick={() => {
            onShowDetail && onShowDetail(game);
          }}>
            <img src={game.image} alt=''/>
        </div>
    )
}

export default GameItem
