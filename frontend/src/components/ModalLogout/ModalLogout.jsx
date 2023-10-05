import {
  ModalWrapper,
  Text,
  ButtonContainer,
  ButtonConfirm,
  ButtonCancel,
} from "./ModalLogout.styled";

export const ModalLogout = () => {
  return (
    <ModalWrapper>
      <Text>Are you sure you want to logout?</Text>
      <ButtonContainer>
        <ButtonConfirm>Confirm</ButtonConfirm>
        <ButtonCancel>Cancel</ButtonCancel>
      </ButtonContainer>
    </ModalWrapper>
  );
};
