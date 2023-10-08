import {
  Text,
  ButtonContainer,
  ButtonConfirm,
  ButtonCancel,
  ModalOverlay,
  Modal,
} from "./ModalLogout.styled";
import { selectIsModalLogoutOpen } from "../../redux/global/selectors";
import { closeModalLogout } from "../../redux/global/globalSlice.js";

import { useDispatch, useSelector } from "react-redux";

export const ModalLogout = () => {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

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
      >
        <Text>Are you sure you want to logout?</Text>
        <ButtonContainer>
          <ButtonConfirm>Confirm</ButtonConfirm>
          <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
        </ButtonContainer>
      </Modal>
    </>
  );
};
