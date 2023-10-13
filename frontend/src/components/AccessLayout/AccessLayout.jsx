import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import manBackground from "../../assets/images/mobileMan.png";
import womanBackground from "../../assets/images/mobileWoman.png";
import logoMobile from "../../assets/images/logoMobile.png";

import {
  BackgroundContainer,
  Wrapper,
  LogoWrapper,
  Info,
  RightContent,
  PhotoWrapper,
  Photo,
  MobileLogo,
  Image,
  ManWithBasket,
  WomanWithMobile,
} from "./AccessLayout.styled";

import goMan from "../../assets/images/manOnly.png";
import goWoman from "../../assets/images/womanOnly.png";

export const AccessLayout = () => {
  const location = useLocation();

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getPhoto = () => {
    if (location.pathname === "/login") {
      return manBackground;
    } else if (location.pathname === "/register") {
      return womanBackground;
    } else {
      return manBackground;
    }
  };

  return (
    <BackgroundContainer>
      <Wrapper>
        <LogoWrapper>
          <PhotoWrapper>
            <Photo src={getPhoto()} alt="Shopping" />
            {showImage && (
              <ManWithBasket
                src={location.pathname === "/login" ? goMan : {}}
                alt=""
              />
            )}
            {showImage && (
              <WomanWithMobile
                src={location.pathname === "/register" ? goWoman : {}}
                alt=""
              />
            )}
          </PhotoWrapper>
          <Info>Finance App</Info>
        </LogoWrapper>
        <MobileLogo>
          <Image src={logoMobile} alt="Shopping" />
        </MobileLogo>
        <RightContent>
          <Outlet />
        </RightContent>
      </Wrapper>
    </BackgroundContainer>
  );
};
