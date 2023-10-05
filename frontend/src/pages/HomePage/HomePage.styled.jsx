import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    height: 568px;
    border: 2px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 1024px;
    border: 2px solid orange;
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    height: 720px;
    border: 2px solid blue;
    margin: 0 auto;
  }
`;
