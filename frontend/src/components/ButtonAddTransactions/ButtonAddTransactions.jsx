import { Button } from "./ButtonAddTransactions.styled";
import * as React from "react";
import { ReactComponent as PlusElement } from "../../assets/icons/plus.svg";

export const ButtonAddTransactions = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusElement />
    </Button>
  );
};
