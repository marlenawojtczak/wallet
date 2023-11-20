import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalOverlay = styled.div`
  position: fixed;
`;

export const Modal = styled(ReactModal)`
  padding: 10px;

  width: 100%;
  background-color: var(--bg-light);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 10px 30px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 45px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 17px;
  font-family: OpenSans;
  color: var(--font-dark);
  font-weight: 400;
  display: block;
  text-align: center;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 20px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px 0;
  }

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const ButtonConfirm = styled.button`
  text-align: center;
  font-family: OpenSans;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  padding: 10px;
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
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 13px 13px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
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
  padding: 10px;
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
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 13px 13px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
