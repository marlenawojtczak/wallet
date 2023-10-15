import { Button } from "./ButtonScroll.styled";
import * as React from "react";
import { ReactComponent as UpElement } from "../../assets/icons/up.svg";

export const ButtonScroll = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <UpElement />
    </Button>
  );
};
