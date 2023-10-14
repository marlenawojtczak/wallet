import {
  Text,
  ButtonContainer,
  ButtonConfirm,
  ButtonCancel,
  ModalOverlay,
  Modal,
} from "./ModalLogout.styled";
import { selectIsModalLogoutOpen } from "../../redux/global/selectors";
import { selectToken } from "../../redux/session/selectors";
import { closeModalLogout } from "../../redux/global/globalSlice.js";
import { signOut } from "../../redux/session/operations";

import { useDispatch, useSelector } from "react-redux";

export const ModalLogout = () => {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);
  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(signOut(token));
  };

  const handleClose = () => {
    dispatch(closeModalLogout());
  };

  return (
    <>
      {isModalLogoutOpen && <ModalOverlay visible={true} />}
      <Modal
        isOpen={isModalLogoutOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        style={{ overlay: { backgroundColor: "rgba(150, 150, 150, 0.5)" } }}
      >
        <Text>Are you sure you want to logout?</Text>
        <ButtonContainer>
          <ButtonConfirm type="button" onClick={handleLogout}>
            Confirm
          </ButtonConfirm>
          <ButtonCancel type="button" onClick={handleClose}>
            Cancel
          </ButtonCancel>
        </ButtonContainer>
      </Modal>
    </>
  );
};
