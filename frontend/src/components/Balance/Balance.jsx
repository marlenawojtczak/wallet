import {
  BalanceElement,
  BalanceHeader,
  BalanceContent,
  Cash,
} from "./Balance.styled";
import { amountFormatter } from "../../utils/formatUtils";
import { selectTotalBalance } from "../../redux/finance/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchTotals } from "../../redux/finance/operations";
import { useEffect } from "react";

export const Balance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotals());
  }, []);
  const totalBalance = useSelector(selectTotalBalance);

  return (
    <>
      <BalanceElement>
        <BalanceHeader>your balance</BalanceHeader>
        <BalanceContent>
          <Cash>PLN</Cash>
          {amountFormatter(totalBalance)}
        </BalanceContent>
      </BalanceElement>
    </>
  );
};
