import { Outlet, useLocation } from "react-router-dom";
import man from "../../assets/images/man.png";
import woman from "../../assets/images/woman.png";
import logoMobile from "../../assets/images/logoMobile.png";

import {
  BackgroundContainer,
  BackgroundElipseBlue,
  BackgroundElipsePink,
  Wrapper,
  LogoWrapper,
  Info,
  RightContent,
  PhotoWrapper,
  Photo,
  MobileLogo,
  Image,
} from "./AccessLayout.styled";

export const AccessLayout = () => {
  const location = useLocation();

  const getPhoto = () => {
    if (location.pathname === "/login") {
      return man;
    } else if (location.pathname === "/register") {
      return woman;
    } else {
      return man;
    }
  };
  return (
    <BackgroundContainer>
      <BackgroundElipseBlue />
      <BackgroundElipsePink />
      <Wrapper>
        <LogoWrapper>
          <PhotoWrapper>
            <Photo src={getPhoto()} alt="Shopping" />
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
