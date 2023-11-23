import styled from "styled-components";
import { ReactComponent as Exit } from "../../assets/icons/close.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedIn.svg";
import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  height: auto;
  width: 80%;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    max-width: 760px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 760px;
  }
`;
export const ModalFilter = styled.div`
  background: linear-gradient(to right, #00aaff, #0d91d3, #0792fd);
  padding: 5px;
  border-radius: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
`;

export const CloseButton = styled(Exit)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px auto 10px;
  padding: 0;
  justify-content: center;
`;

export const TeamListEl = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const TeamMember = styled.a`
  color: var(--font-light);
  font-family: OpenSans;
  font-weight: 300;
  font-size: 20px;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  display: block;
  fill: var(--font-light);
  position: relative;

  img {
    transition: 0.5s;
    border-radius: 5px;
    object-fit: contain;
    width: 115px;
    aspect-ratio: 1/1;
  }

  &:hover {
    font-weight: 500;
    color: black;
    fill: black;
  }

  &:hover img {
    -webkit-box-shadow: 0px 0px 16px -1px #080808;
    -moz-box-shadow: 0px 0px 16px -1px #080808;
    box-shadow: 0px 0px 16px -1px #080808;
  }
`;

export const NameWrapper = styled.div`
  text-align: center;
  margin-top: 5px;
  transition: 0.3s;
`;
export const Name = styled.div``;

export const LinkedInIcon = styled(LinkedIn)`
  /* padding: 3px 0 0 0;
  margin: 0;
  width: 24px; */
  position: absolute;
  top: 122px;
  right: 95px;
  transition: 0.3s;
`;
