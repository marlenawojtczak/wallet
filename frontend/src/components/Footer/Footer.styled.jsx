import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: transparent;

  text-align: center;
  border-top: 1px solid var(--bg-light);
  border-radius: 5px;
  border-bottom: none;
  &:hover {
    border: none;
  }
`;

export const FooterFilter = styled.div`
  backdrop-filter: blur(20px);
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    backdrop-filter: blur(20px);
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TeamName = styled.button`
  font-family: OpenSans;
  font-size: 11px;
  letter-spacing: 0.3px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: var(--bg-light);

  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    padding: 3px 13px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 13px;
  }
  &:hover {
    background: linear-gradient(to right, #00aaff, #0d91d3, #0792fd);
    border-radius: 5px;
    span {
      text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 3px 2px 2px black;
    }
  }
`;
