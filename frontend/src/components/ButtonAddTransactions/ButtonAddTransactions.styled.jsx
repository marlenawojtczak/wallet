import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--brand-secondary);
  color: var(--font-light);
  font-size: 16px;
  border: none;
  cursor: pointer;

  box-shadow: 1px 1px 8px black;
  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 10px;
  }
  @media screen and (min-width: 768px) {
    font-family: OpenSans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: none;
    width: 100px;
    height: auto;
    background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
    border-radius: 10px;
    color: var(--font-light);
    transition: all 150ms ease;
    padding: 5px 10px;
    cursor: pointer;

    border: 1px solid var(--font-light);
    &:hover {
      transition: all 150ms ease;
      background: linear-gradient(to right, #00aaff, #0e8bca, #00aaff, #0074cc);
      box-shadow: 1px 1px 10px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    width: 150px;
    padding: 5px 0;
  }
`;
