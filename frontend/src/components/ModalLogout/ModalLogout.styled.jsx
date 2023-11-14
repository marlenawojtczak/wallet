import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalOverlay = styled.div`
  position: fixed;
`;

export const Modal = styled(ReactModal)`
  padding: 15px 45px;
  border-radius: 10px;
  background-color: var(--bg-light);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 18px;
  font-family: OpenSans;
  color: var(--font-dark);
  font-weight: 400;
  display: block;
  text-align: center;
  padding-top: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  justify-content: space-between;
`;

export const ButtonConfirm = styled.button`
  text-align: center;
  font-family: OpenSans;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  padding: 13px 13px;
  color: var(--bg-light);
  background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
  transition: all 150ms ease;
  cursor: pointer;
  width: 100%;
  &:hover,
  &:focus {
    letter-spacing: 3px;
    background: linear-gradient(
      to right,
      #00aaff,
      #0384e7,
      #0586c7,
      #0384e7,
      #00aaff
    );
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  text-align: center;
  font-family: OpenSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: 2px solid #00aaff;
  border-radius: 10px;
  padding: 13px 13px;
  color: #00aaff;
  background-color: var(--font-light);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    border-color: red;
    letter-spacing: 3px;
  }
`;
