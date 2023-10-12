import styled from "styled-components";
import Datetime from "react-datetime";
import Select from "react-select";
import { ReactComponent as Exit } from "../../assets/icons/close.svg";
import { ReactComponent as DateRange } from "../../assets/icons/date_range.svg";

export const ModalBackground = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 60px;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    background: var(--bg-modal-overlay);
  }

  @media screen and (min-width: 1280px) {
    background: var(--bg-modal-overlay);
  }
`;

export const ModalWrapper = styled.div`
  padding: 20px 40px;
  margin: 0 auto;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 80px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  border-radius: 20px;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    width: 540px;
    height: ${(props) => (props.isHidden ? "508px" : "603px")};
  }

  @media screen and (min-width: 1280px) {
    width: 540px;
    height: ${(props) => (props.isHidden ? "508px" : "603px")};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  height: 31px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 769px) and (max-width: 1279px) {
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
  width: 181px;
  height: 24px;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  border-bottom: 2px solid var(--bg-gray);
  outline: none;
  padding: 0;
  padding-bottom: 8px;
`;

export const CommentInput = styled(ValueInput)`
  width: 394px;
  margin: 40px 0 0;
`;

export const StyledDateTime = styled(Datetime)`
  input {
    position: relative;
    width: 181px;
    height: 24px;
    font-family: Circe;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    border-bottom: 2px solid var(--bg-gray);
    outline: none;
    padding-bottom: 8px;
  }
`;

export const CalendarIcon = styled(DateRange)`
  position: absolute;
  right: 84px;
`;

export const AddButton = styled.button`
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
  margin: 41px auto 0;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const CancelButton = styled(AddButton)`
  border: 1px solid var(--brand-primary);
  color: var(--brand-primary);
  background-color: var(--bg-light);
  margin: 20px auto 60px;
`;

export const CloseButton = styled(Exit)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
