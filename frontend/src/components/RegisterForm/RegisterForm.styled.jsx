import styled from "styled-components";

export const StyledWrapper = styled.div`
  border: 1px solid black;
`;
export const StyledForm = styled.div`
  margin: 32px 20px;
`;
export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
`;
export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--switch-main);
  margin-bottom: 40px;
`;
export const StyledInputContainerExtra = styled(StyledInputContainer)`
  margin-bottom: 5px;
`;
export const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  color: var(--brand-logout);
  font-family: Circe;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 3px;
`;
export const StyledIcon = styled.div`
  padding-left: 10px;
`;
export const StyledButton = styled.div`
  text-align: center;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: 1px solid var(--brand-primary);
  border-radius: 20px;
  padding: 13px 0;
  margin-bottom: 20px;
  color: var(--brand-primary);
  background-color: var(--font-light);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--font-light);
    background: var(--bg-btn-focus);
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px, rgba(0, 0, 0, 0.3) 3px 3px 4px,
      rgba(0, 0, 0, 0.2) -5px -4px 0px inset;
    transform: scale(1.05);
  }
`;
export const StyledButtonIcon = styled.div`
  background-color: white;
  padding-right: 10px;
`;
export const StyledProgressBar = styled.div`
  width: 100%;
  height: 5px;
  border: 1px solid var(--bg-progress-bar);
  border-radius: 5px;
  margin-bottom: 28px;

  div {
    width: ${(props) => props.value}%;
    height: 100%;
    background-color: green;
  }
`;
