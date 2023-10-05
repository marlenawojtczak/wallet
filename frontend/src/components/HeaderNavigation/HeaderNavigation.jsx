import { Link, Wrapper, LogoTitle } from "./HeaderNavigation.styled";
import { ReactComponent as LogoIcon } from "../../assets/icons/wallet.svg";

export const HeaderNavigation = () => {
  return (
    <nav>
      <Link to="/">
        <Wrapper>
          <LogoIcon></LogoIcon>
          <LogoTitle>Wallet</LogoTitle>
        </Wrapper>
      </Link>
    </nav>
  );
};
