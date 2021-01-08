import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { SliderTrtCocuk } from "../components/ImageSlider/SliderData";
import Games from "../components/Games/Games";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { trtcocuk } from "../components/Games/data";
import { useHistory } from 'react-router-dom';

const TrtCocukPage = () => {
  const history = useHistory();
  const handleShowDetailClick = (game) => {
    history.push(`/trt-cocuk-oyunları/${game.id}`, { game });
  };
  return (
    <div>
      <NavBar />
      <ImageSlider slides={SliderTrtCocuk} />
      <Games
        games={trtcocuk}
        onShowDetail={handleShowDetailClick}
        heading="TRT ÇOCUK OYUNLARI"
        desc="TRT Çocuk’un sevilen çizgi filmleri Mayadem deneyimi ve yaratıcılığıyla oyunlaştırıldı."
      />
      <Footer />
    </div>
  );
};

export default TrtCocukPage;
