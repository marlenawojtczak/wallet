import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderWrapper, HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderNavigation />
          <UserMenu />
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};
