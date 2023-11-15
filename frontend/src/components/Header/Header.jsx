import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { ModalLogout } from "../ModalLogout/ModalLogout";
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderWrapper, HeaderContainer } from "./Header.styled";
import financeMp4 from "../../assets/mp4/finance.mp4";
export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        {/* <video autoPlay muted loop id="background-video">
          <source src={financeMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <HeaderContainer>
          <ModalLogout />
          <HeaderNavigation />
          <UserMenu />
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};
