import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderWrapper, HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Navigation />
          <UserMenu />
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};
