import { Home, Wrapper, Balance, Position } from "./HomeTab.styled";
import { ButtonAddTransactions } from "../ButtonAddTransactions/ButtonAddTransactions";
const handleClick = () => {
  console.log("Add transaction");
};

export const HomeTab = () => {
  return (
    <>
      <Wrapper>
        <Balance>
          <h2>Balance</h2>
        </Balance>
        <Home>
          <h2>Home</h2>
          <ButtonAddTransactions onClick={handleClick} />
        </Home>
      </Wrapper>
    </>
  );
};
