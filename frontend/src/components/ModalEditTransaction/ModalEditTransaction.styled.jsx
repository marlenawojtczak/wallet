import styled from "styled-components";
import Datetime from "react-datetime";
import Select from "react-select";
import { ReactComponent as Exit } from "../../assets/icons/close.svg";
import { ReactComponent as DateRange } from "../../assets/icons/date_range.svg";
import ReactModal from "react-modal";

export const ModalPosition = styled.div`
  position: fixed;
`;

export const ModalBackground = styled(ReactModal)`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    background: var(--bg-modal-overlay);
    margin-top: 0px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1;
  }
  @media screen and (min-width: 1280px) {
    background: var(--bg-modal-overlay);
  }
`;

export const ModalWrapper = styled.div`
  padding-top: 20px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 80px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 540px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 540px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    height: 40px;
  }
`;

export const StyledCategoryInput = styled(Select)`
  margin: 0 0 42px 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Circe;
  border: none;
  border-bottom: 2px solid var(--bg-gray);
  height: 24px;
  outline: none;
`;

export const ValueInput = styled.input`
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: 2px solid var(--bg-gray);
  outline: none;
  width: 100%;
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const CommentInput = styled(ValueInput)`
  text-align: left;
`;

export const StyledDateTime = styled(Datetime)`
  input {
    font-family: Circe;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    border-bottom: 2px solid var(--bg-gray);
    outline: none;

    cursor: pointer;
    width: 100%;
  }
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 300px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  padding: 13px 0;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const CancelButton = styled(AddButton)`
  border: 1px solid var(--brand-primary);
  color: var(--brand-primary);
  background-color: var(--bg-light);
`;

export const CloseButton = styled(Exit)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const TransactionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin: 30px 0;
  span {
    margin: 0 5px;
  }
  .income {
    color: var(--brand-secondary);
  }
  .expense {
    color: var(--brand-accent);
  }
  .inactive-color {
    color: var(--brand-logout);
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionInput = styled.div`
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const SectionDate = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  pointer-events: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  gap: 20px;
`;

export const SectionDateWrapper = styled.div`
  position: relative;
`;
