import { FooterBtn, TeamName } from "./Footer.styled";
import { ModalTeam } from "../ModalTeam/ModalTeam";

import { useDispatch } from "react-redux";
import { openModalTeam } from "../../redux/global/globalSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openModalTeam());
  };
  return (
    <FooterBtn>
      <ModalTeam />
      <span>^</span>
      <span>
        © 2023 | All Rights Reserved | Developed by{" "}
        <TeamName onClick={openModal}>Clamers</TeamName>
      </span>
    </FooterBtn>
  );
};
