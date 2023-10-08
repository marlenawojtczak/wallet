import styled from "styled-components";
import { ReactComponent as PlusElement } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusElement } from "../../assets/icons/minus.svg";

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  justify-content: center;
  margin: 40px 0;
`;

export const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  background: white;
  border-radius: 30px;
  padding: 4px;
  transition: 300ms all;
  border: 1px solid var(--switch-main);

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 30px;
    top: 50%;
    background: var(--brand-secondary);
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${Switch} {
    background: white;

    &:before {
      transform: translate(36px, -50%);
      background: var(--brand-accent);
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SwitchLabel = styled.div`
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) =>
    props.isChecked ? "var(--brand-secondary)" : "var(--brand-accent)"};
`;

export const Wrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const Plus = styled(PlusElement)`
  position: absolute;
  top: 14px;
  left: 16px;
`;

export const Minus = styled(MinusElement)`
  position: absolute;
  top: 23px;
  right: 15px;
`;
