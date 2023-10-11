import {
  BalanceElement,
  BalanceHeader,
  BalanceContent,
  Cash,
} from "./Balance.styled";
import { amountFormatter } from "../../utils/formatUtils";

export const Balance = () => {
  const balance = "100999";

  return (
    <>
      <BalanceElement>
        <BalanceHeader>your balance</BalanceHeader>
        <BalanceContent>
          <Cash>₴</Cash>
          {amountFormatter(balance)}
        </BalanceContent>
      </BalanceElement>
    </>
  );
};
