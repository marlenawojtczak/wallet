import { ReactComponent as HomeIcon } from "../../assets/icons/home-mobile.svg";
import { ReactComponent as StatisticsIcon } from "../../assets/icons/statistics-mobile.svg";
import { ReactComponent as CurrencyIcon } from "../../assets/icons/currency-mobile.svg";
import {
  NavList,
  Link,
  NavName,
  ListElementCurrency,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavList>
      <li>
        <Link to="/home">
          <HomeIcon />
          <NavName>Home</NavName>
        </Link>
      </li>
      <li>
        <Link to="/statistics">
          <StatisticsIcon />
          <NavName>Statistics</NavName>
        </Link>
      </li>
      <ListElementCurrency>
        <Link to="/currency">
          <CurrencyIcon />
        </Link>
      </ListElementCurrency>
    </NavList>
  );
};
