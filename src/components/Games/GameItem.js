import React from 'react'

const GameItem = ({game}) => {
    return (
        <div>
            <img src={game.image} alt=''/>
        </div>
    )
}

export default GameItem
