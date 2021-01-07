import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { littleones } from "../components/Games/data";
import Games from "../components/Games/Games";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { SliderLittleOnes } from "../components/ImageSlider/SliderData";

const LittleOnesPage = () => {
  return (
    <div>
      <NavBar />
      <ImageSlider slides={SliderLittleOnes} />
      <Games
        games={littleones}
        heading="LİTTLEONES OYUNLARI"
        desc="Littleones oyun ve uygulamaları, sürekli keşfetmeye teşvik eder,
çocuklarda ‘öğrenme’ aşkının varolmasına imkan verir."
      />
      <Footer />
    </div>
  );
};

export default LittleOnesPage;
