import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--brand-secondary);

  font-size: 16px;
  border: none;
  cursor: pointer;
  /* position: sticky;
  bottom: 30px;
  left: 5%; */
  box-shadow: 1px 1px 8px;
  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 10px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
