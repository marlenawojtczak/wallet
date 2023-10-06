import {
  BalanceElement,
  BalanceHeader,
  BalanceContent,
} from "./Balance.styled";

export const Balance = () => {
  const balance = "100999";

  return (
    <>
      <BalanceElement>
        <BalanceHeader>your balance</BalanceHeader>
        <BalanceContent>
          <span style={{ fontWeight: 400, fontFamily: "Circe", fontSize: 30 }}>
            ₴
          </span>{" "}
          {balance}
        </BalanceContent>
      </BalanceElement>
    </>
  );
};
