import { TeamName, FooterWrapper, FooterFilter } from "./Footer.styled";
import { ModalTeam } from "../ModalTeam/ModalTeam";

import { useDispatch } from "react-redux";
import { openModalTeam } from "../../redux/global/globalSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openModalTeam());
  };
  return (
    <FooterWrapper>
      <FooterFilter>
        <ModalTeam />
        <TeamName onClick={openModal}>
          © 2023 | All Rights Reserved | Developed by <span>Clammers</span>
        </TeamName>
      </FooterFilter>
    </FooterWrapper>
  );
};
