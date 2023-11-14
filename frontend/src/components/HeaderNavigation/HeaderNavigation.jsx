import {
  Link,
  Wrapper,
  LogoTitle,
  RotatingLogoIcon,
} from "./HeaderNavigation.styled";
import { ReactComponent as Logo } from "../../assets/icons/logoPocket.svg";

export const HeaderNavigation = () => {
  return (
    <nav>
      <Link to="/home">
        <Wrapper>
          <RotatingLogoIcon>
            <Logo
              style={{
                filter: "drop-shadow(2px 3px 6px var(--font-dark))",
                width: "40px",
                height: "40px",
              }}
            />
          </RotatingLogoIcon>
          <LogoTitle>uWallet</LogoTitle>
        </Wrapper>
      </Link>
    </nav>
  );
};
