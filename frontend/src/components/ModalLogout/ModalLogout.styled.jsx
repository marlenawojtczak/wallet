import styled from "styled-components";

export const ModalWrapper = styled.div`
  padding: 25px 10px;
  border-radius: 25%;
  border-color: var(----brand-primary);
  max-width: 319px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Text = styled.span`
  font-size: 17px;
  font-family: "Circe";
  color: var(--brand-logout);
  display: block;
  text-align: center;
  padding-top: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  justify-content: center;
`;

export const ButtonConfirm = styled.button`
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 20px;
  border: none;
  padding: 13px 13px;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--brand-secondary);
    background-color: var(--bg-light);
    font-weight: 400;
    border-color: var(--brand-secondary);
    border: 1px solid var(--brand-secondary);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: 1px solid var(--brand-primary);
  border-radius: 20px;
  padding: 13px 13px;
  color: #4a56e2;
  background-color: var(--font-light);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    border-color: red;
    border: 1px solid red;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
