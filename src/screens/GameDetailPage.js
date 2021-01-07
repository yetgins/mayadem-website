import React from 'react';
import Footer from '../components/Footer/Footer'
import GameDetail from '../components/GameDetail/GameDetail';
import NavBar from '../components/NavBar/NavBar'

const GameDetailPage = () => {
    return (
        <div>
            <NavBar />
            <GameDetail />
            <Footer />
        </div>
    )
}

export default GameDetailPage
