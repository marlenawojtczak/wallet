import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { ModalLogout } from "../ModalLogout/ModalLogout";
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderWrapper, HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <ModalLogout />
          <HeaderNavigation />
          <UserMenu />
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};
