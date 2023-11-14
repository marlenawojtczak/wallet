import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIsModalTeamClose } from "../../redux/global/selectors";
import { openModalTeam } from "../../redux/global/globalSlice";

import { FooterBtn, TeamName } from "./Footer.styled";
import { ModalTeam } from "../ModalTeam/ModalTeam";

export const Footer = () => {
  const dispatch = useDispatch();
  const isModalTeamClose = useSelector(selectIsModalTeamClose);

  const openModal = () => {
    dispatch(openModalTeam());
  };

  useEffect(() => {}, [isModalTeamClose]);

  return (
    <FooterBtn isCollapsed={isModalTeamClose}>
      <ModalTeam />
      <span>^</span>
      <span>
        © 2023 | All Rights Reserved | Developed by{" "}
        <TeamName onClick={openModal}>Clammers</TeamName>
      </span>
    </FooterBtn>
  );
};
