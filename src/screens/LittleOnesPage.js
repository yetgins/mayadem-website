import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { littleones } from "../components/Games/data";
import Games from "../components/Games/Games";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { SliderLittleOnes } from "../components/ImageSlider/SliderData";
import { useHistory } from 'react-router-dom';

const LittleOnesPage = () => {
  const history = useHistory();
  const handleShowDetailClick = (game) => {
    history.push(`/littleones-oyunları/${game.id}`, { game });
  };
  return (
    <div>
      <NavBar />
      <ImageSlider slides={SliderLittleOnes} />
      <Games
        games={littleones}
        onShowDetail={handleShowDetailClick}
        heading="LİTTLEONES OYUNLARI"
        desc="Littleones oyun ve uygulamaları, sürekli keşfetmeye teşvik eder,
çocuklarda ‘öğrenme’ aşkının varolmasına imkan verir."
      />
      <Footer />
    </div>
  );
};

export default LittleOnesPage;
