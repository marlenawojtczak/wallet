import {
  Link,
  Wrapper,
  LogoTitle,
  RotatingLogoIcon,
} from "./HeaderNavigation.styled";
// import { ReactComponent as LogoIcon } from "../../assets/icons/wallet.svg";

export const HeaderNavigation = () => {
  return (
    <nav>
      <Link to="/home">
        <Wrapper>
          <RotatingLogoIcon></RotatingLogoIcon>
          <LogoTitle>Wallet</LogoTitle>
        </Wrapper>
      </Link>
    </nav>
  );
};
