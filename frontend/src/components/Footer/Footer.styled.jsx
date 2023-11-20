import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: transparent;
  border-radius: 0;
  border-top: 1px solid var(--bg-light);

  @media screen and (min-width: 768px) {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: auto;
  }

  &:hover {
    background: linear-gradient(to right, #00aaff, #0d91d3, #0792fd);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const FooterFilter = styled.div`
  backdrop-filter: blur(200px);

  @media screen and (min-width: 768px) {
    backdrop-filter: blur(10px);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TeamName = styled.button`
  font-family: OpenSans;
  font-size: 12px;

  font-weight: 300;
  line-height: normal;
  text-align: center;
  color: var(--bg-dark);

  cursor: pointer;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 3px 13px;
    letter-spacing: 0.5px;
    color: var(--bg-light);
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  &:hover {
    span {
      text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 3px 2px 2px black;
    }
  }
`;
