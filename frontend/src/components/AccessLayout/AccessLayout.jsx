import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import financeMp4 from "../../assets/mp4/finance.mp4";
import { ReactComponent as Logo } from "../../assets/icons/logoPocket.svg";
import { Footer } from "../../components/Footer";

import {
  BackgroundContainer,
  Wrapper,
  StyledInfo,
  SpanLogo,
  SpanText,
  SpanInfo,
  ButtonLogin,
  LogoWrapper,
  FooterWrapper,
} from "./AccessLayout.styled";

export const AccessLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showWrapper, setShowWrapper] = useState(false);
  const [showOutlet, setShowOutlet] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowWrapper(true);
      },
      windowWidth < 768 ? 2200 : 0
    );
    return () => clearTimeout(timer);
  }, [windowWidth]);

  const handleLoginButtonClick = () => {
    setShowOutlet(true);
    setShowButton(false);
  };

  return (
    <BackgroundContainer>
      <video autoPlay muted loop id="background-video">
        <source src={financeMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {window.innerWidth <= 1279 && (
        <StyledInfo>
          <SpanText>Welcome in</SpanText>
          <LogoWrapper>
            <Logo
              style={{
                filter: "drop-shadow(6px 4px 3px var(--font-dark))",
              }}
            />
            <SpanLogo>uWallet</SpanLogo>
          </LogoWrapper>
          <SpanInfo>Start controlling your money</SpanInfo>
        </StyledInfo>
      )}
      {showWrapper && (
        <Wrapper>
          {window.innerWidth > 767 &&
            window.innerWidth < 1280 &&
            showButton && (
              <ButtonLogin onClick={handleLoginButtonClick}>
                Login or Register
              </ButtonLogin>
            )}

          {window.innerWidth < 768 && <Outlet />}
          {showOutlet && window.innerWidth >= 768 && <Outlet />}
          {window.innerWidth >= 1280 && <Outlet />}
          {window.innerWidth >= 768 && window.innerWidth < 1280 && (
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          )}
        </Wrapper>
      )}
    </BackgroundContainer>
  );
};
