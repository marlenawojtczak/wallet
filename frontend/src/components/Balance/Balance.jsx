import {
  BalanceElement,
  BalanceHeader,
  BalanceContent,
} from "./Balance.styled";
import { amountFormatter } from "../../utils/formatUtils";
import { useAuth } from "../../hooks/useAuth";

export const Balance = () => {
  const { user } = useAuth();
  const balance = user.balance;

  return (
    <>
      <BalanceElement>
        <BalanceHeader>your balance</BalanceHeader>
        <BalanceContent>
          <span style={{ fontWeight: 400, fontFamily: "Circe", fontSize: 30 }}>
            ₴
          </span>{" "}
          {amountFormatter(balance)}
        </BalanceContent>
      </BalanceElement>
    </>
  );
};
