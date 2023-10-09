import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BackgroundContainer,
  LeftImage,
  RightContent,
  ManWithBasket,
} from "./BackgroundImage.styled";
import manWith from "../../assets/images/manOnly.png";

export const BackgroundImage = () => {
  const [showManWithImage, setShowManWithImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowManWithImage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundContainer>
      <LeftImage>
        {showManWithImage && <ManWithBasket src={manWith} alt="Man With" />}
      </LeftImage>
      {/* <LeftImage /> */}
      <RightContent>
        <Outlet />
      </RightContent>
    </BackgroundContainer>
  );
};
