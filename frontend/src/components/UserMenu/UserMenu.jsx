import { UserName, Button, Wrapper, ButtonText } from "./UserMenu.styled";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
import { selectUserName } from "../../redux/session/selectors";

import { useDispatch, useSelector } from "react-redux";
import { openModalLogout } from "../../redux/global/globalSlice";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
  // autentykacja ???
  // const user = useSelector(selectUserName);
  const { user } = useAuth();

  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openModalLogout());
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user?.username}</UserName>
      <Button type="button" onClick={openModal}>
        <ExitIcon></ExitIcon>
        <ButtonText>Exit</ButtonText>
      </Button>
    </Wrapper>
  );
};
