import React from "react";
import { Link } from "react-router-dom";
import {
  IntroContainer,
  IntroHeading,
  IntroImg,
  IntroPrg,
  IntroLinks,
  IntroImage,
} from "./Intro.styles";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroImg
        src="https://www.mayadem.com/wp-content/uploads/2015/08/mainpage-kid2.png"
        alt=""
      />
      <IntroHeading>MAYADEM</IntroHeading>
      <IntroPrg>
        <div>
          Mayadem, çocuklara yenilikçi teknolojilerle en iyi eğitim pratiklerini
        </div>
        <div>
          birleştirerek ‘oyun’ tabanlı uygulamalar üreten dijital eğitim ve
          eğlence
        </div>
        <div>enstitüsüdür.</div>
      </IntroPrg>
      <IntroPrg>
        <div>
          Mayadem, çocukların farklı zihinsel ve duygusal gelişim ihtiyaçlarını,
        </div>
        <div>
          ürettiği dijital uygulama ve oyunlarla geniş bir perspektifte ele
          alır.
        </div>
        <div>
          Çocukların gelişim ihtiyacı ve öğrenme motivasyonlarını canlı tutacak
        </div>
        <div>
          içerikler üretir. Bunları sadece çocuklara yönelik değil, çocuğun
        </div>
        <div>
          dünyasında en önemli figürler olan aileleri ve eğitim dünyasını da
          içine
        </div>
        <div>alacak şekilde kurgular.</div>
      </IntroPrg>
      <IntroPrg>
        <div>
          Uzmanlar ve akademisyenler tarafından onaylanmış yüksek kalitedeki
        </div>
        <div>
          eğitim içeriklerini, yeni teknolojiler ve yaratıcı tasarımlarla bir
          araya
        </div>
        <div>
          getirerek, çocuklara oynama, keşfetme ve bu yolla yeni bilgiler
          edinme,
        </div>
        <div>
          öğrenme fırsatı sunar. İçinde çocukların rahatça dolaşıp gezineceği,
        </div>
        <div>
          oynayacağı, keşfedeceği ve eğlenerek öğreneceği dünyalar kurar.
          Onları,
        </div>
        <div>
          ‘ekranlararası’ dijital bir ‘Eğitim ve Eğlence’ yolculuğuna çıkarır.
        </div>
      </IntroPrg>
      <IntroPrg>
        <div>
          Bunu da bütün kazanımların yanında tek bir şey için yapar: “Öğrenme
          aşkı”.
        </div>
      </IntroPrg>
      <IntroPrg>
        <div>
          Mayadem, bu sebeple çocukların hayatında çok önemli bir yer teşkil
          eden
        </div>
        <div>
          “ <a style={{ color: "cornflowerblue" }}>OYNA</a>{" "}
          <a style={{ color: "firebrick" }}>KEŞFET</a>{" "}
          <a style={{ color: "orange" }}>ÖĞREN</a> ” kavramını hayata
          geçirir.
        </div>
      </IntroPrg>

      <IntroLinks>
        <Link to="/hakkimizda">
          <IntroImage
            src="https://www.mayadem.com/wp-content/uploads/2012/07/felsefemiz.png"
            alt=""
          ></IntroImage>
          <IntroImage
            src="https://www.mayadem.com/wp-content/uploads/2012/07/neden_mayadem.png"
            alt=""
          ></IntroImage>
          <IntroImage
            src="https://www.mayadem.com/wp-content/uploads/2012/07/uretim_sureci.png"
            alt=""
          ></IntroImage>
          <IntroImage
            src="https://www.mayadem.com/wp-content/uploads/2012/07/kim_kimdir.png"
            alt=""
          ></IntroImage>
        </Link>
      </IntroLinks>
    </IntroContainer>
  );
};

export default Intro;
