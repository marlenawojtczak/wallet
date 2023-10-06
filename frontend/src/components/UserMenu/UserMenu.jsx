import { UserName, Button, Wrapper, ButtonText } from "./UserMenu.styled";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
import { selectUserName } from "../../redux/session/selectors";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const UserMenu = () => {
  // autentykacja ???
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      <Button type="button" onClick={openModal}>
        <ExitIcon></ExitIcon>
        <ButtonText>Exit</ButtonText>
      </Button>
    </Wrapper>
  );
};
