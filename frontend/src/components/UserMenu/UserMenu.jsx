import { UserName, Button, Wrapper, ButtonText } from "./UserMenu.styled";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
import { selectUserName } from "../../redux/session/selectors";

import { useDispatch, useSelector } from "react-redux";
import { openModalLogout } from "../../redux/global/globalSlice";

export const UserMenu = () => {
  // autentykacja ???
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openModalLogout());
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
