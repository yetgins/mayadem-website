import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLock,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/gizlilik">
              <FaLock />GİZLİLİK POLİTİKASI
            </SocialLogo>
            <SocialLogo to="/iletisim">
              <FaMailBulk /> İLETİŞİM
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/mayademdigital/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/mayademteknoloji/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/mayadem/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/mayademdigital/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
