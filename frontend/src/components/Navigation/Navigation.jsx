import { ReactComponent as HomeIcon } from "../../assets/icons/home-mobile.svg";
import { ReactComponent as StatisticsIcon } from "../../assets/icons/statistics-mobile.svg";
import { ReactComponent as CurrencyIcon } from "../../assets/icons/currency-mobile.svg";
import {
  NavWrapper,
  NavList,
  Link,
  NavName,
  ListElementCurrency,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavWrapper>
      <NavList>
        <li>
          <Link to="/" activeClassName="selected">
            <HomeIcon></HomeIcon>
            <NavName>Home</NavName>
          </Link>
        </li>
        <li>
          <Link to="/statistics" activeClassName="selected">
            <StatisticsIcon></StatisticsIcon>
            <NavName>Statistics</NavName>
          </Link>
        </li>
        <ListElementCurrency>
          <Link to="/currency">
            <CurrencyIcon></CurrencyIcon>
          </Link>
        </ListElementCurrency>
      </NavList>
    </NavWrapper>
  );
};
