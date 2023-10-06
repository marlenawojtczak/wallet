import {
  ModalWrapper,
  Text,
  ButtonContainer,
  ButtonConfirm,
  ButtonCancel,
} from "./ModalLogout.styled";
import { selectIsModalLogoutOpen } from "../../redux/global/selectors";
import { closeModalLogout } from "../../redux/global/globalSlice.js";

import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

// ReactModal.setAppElement("#root"); // ???

export const ModalLogout = () => {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

  const handleClose = () => {
    dispatch(closeModalLogout());
  };

  return (
    <ReactModal
      isOpen={isModalLogoutOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick={true}
    >
      <ModalWrapper>
        <Text>Are you sure you want to logout?</Text>
        <ButtonContainer>
          <ButtonConfirm>Confirm</ButtonConfirm>
          <ButtonCancel onClick={handleClose}>Cancel</ButtonCancel>
        </ButtonContainer>
      </ModalWrapper>
    </ReactModal>
  );
};
