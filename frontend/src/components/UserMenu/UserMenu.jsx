import { UserName, Button, Wrapper, ButtonText } from "./UserMenu.styled";
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg";
import { useDispatch } from "react-redux";
import { openModalLogout } from "../../redux/global/globalSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/session/selectors";
// import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
  // autentykacja ???
  // const { user } = useAuth();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const openModal = () => {
    dispatch(openModalLogout());
  };

  return (
    <Wrapper>
      <UserName>{user?.username}</UserName>
      <Button type="button" onClick={openModal}>
        <ExitIcon></ExitIcon>
        <ButtonText>Exit</ButtonText>
      </Button>
    </Wrapper>
  );
};
