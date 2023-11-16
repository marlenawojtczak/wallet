import styled from "styled-components";
import { ReactComponent as Exit } from "../../assets/icons/close.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedIn.svg";
import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  height: auto;
  width: 80%;
  margin: 0 auto;
  padding: 5px 25px;
  background-color: #fefefe;
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

export const ModalOverlay = styled.div`
  position: fixed;
`;

export const CloseButton = styled(Exit)`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  margin: 20px auto;
  padding: 0;
  justify-content: center;
`;

export const TeamListEl = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const TeamMember = styled.a`
  color: var(--font-grey);
  text-decoration: none;
  font-size: 13px;
  text-align: center;
  display: block;

  img {
    margin-bottom: 6px;
    transition: 0.5s;
  }

  &:hover {
    color: var(--linked-in);
    fill: var(--linked-in);
  }

  &:hover img {
    -webkit-box-shadow: 0px 0px 16px -1px rgba(0, 119, 181, 1);
    -moz-box-shadow: 0px 0px 16px -1px rgba(0, 119, 181, 1);
    box-shadow: 0px 0px 16px -1px rgba(0, 119, 181, 1);
  }
`;

export const LinkedInIcon = styled(LinkedIn)`
  display: flex;
  position: absolute;
`;
