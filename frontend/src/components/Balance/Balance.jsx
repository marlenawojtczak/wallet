import {
  BalanceElement,
  BalanceHeader,
  BalanceContent,
  Cash,
} from "./Balance.styled";
import { amountFormatter } from "../../utils/formatUtils";
// import { useAuth } from "../../hooks/useAuth";
import { selectTotalBalance } from "../../redux/finance/selectors";
import { useSelector, useDispatch } from "react-redux";

export const Balance = () => {
  const totalBalance = useSelector(selectTotalBalance);

  return (
    <>
      <BalanceElement>
        <BalanceHeader>your balance</BalanceHeader>
        <BalanceContent>
          <Cash>₴</Cash>
          {/* {amountFormatter(balance)} */}
          <span style={{ fontWeight: 400, fontFamily: "Circe", fontSize: 30 }}>
            ₴
          </span>{" "}
          {amountFormatter(totalBalance)}
        </BalanceContent>
      </BalanceElement>
    </>
  );
};
