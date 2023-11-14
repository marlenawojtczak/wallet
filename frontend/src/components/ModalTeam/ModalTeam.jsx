import {
  Modal,
  CloseButton,
  ModalOverlay,
  TeamList,
  TeamListEl,
  TeamMember,
  LinkedInIcon,
} from "./ModalTeam.styled";

import Jakub from "../../assets/images/Jakub.png";
import KatarzynaC from "../../assets/images/KatarzynaC.png";
import KatarzynaW from "../../assets/images/KatarzynaW.png";
import Mateusz from "../../assets/images/Mateusz.png";
import Marlena from "../../assets/images/Marlena.png";
import Roland from "../../assets/images/Roland.png";

import { selectIsModalTeamOpen } from "../../redux/global/selectors";
import { closeModalTeam } from "../../redux/global/globalSlice.js";
import { useDispatch, useSelector } from "react-redux";

export const ModalTeam = () => {
  const dispatch = useDispatch();
  const isModalTeamOpen = useSelector(selectIsModalTeamOpen);

  const handleClose = () => {
    dispatch(closeModalTeam());
  };
  return (
    <>
      {isModalTeamOpen && <ModalOverlay visible={true} />}
      <Modal
        isOpen={isModalTeamOpen}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: { backgroundColor: "rgba(150, 150, 150, 0.5)", zIndex: 4 },
        }}
      >
        <CloseButton onClick={handleClose} />
        <TeamList>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/jakubantoniak/"
              target="_blank"
            >
              <img src={Jakub} width="115" heigth="115" alt="Jakub's pic"></img>
              <LinkedInIcon></LinkedInIcon>
              Jakub
              <br />
              Antoniak
            </TeamMember>
          </TeamListEl>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/marlena-wojtczak-89438527b/"
              target="_blank"
            >
              <img
                src={Marlena}
                width="115"
                heigth="115"
                alt="Marlena's pic"
              ></img>
              <LinkedInIcon></LinkedInIcon>
              Marlena
              <br />
              Wojtczak
            </TeamMember>
          </TeamListEl>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/katarzyna-w%C3%B3jcikowska-59a650192/"
              target="_blank"
            >
              <img
                src={KatarzynaW}
                width="115"
                heigth="115"
                alt="Katarzyna's pic"
              ></img>
              <LinkedInIcon></LinkedInIcon>
              Katarzyna
              <br />
              Wójcikowska
            </TeamMember>
          </TeamListEl>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/mateusz-lis-8840ba280/"
              target="_blank"
            >
              <img
                src={Mateusz}
                width="115"
                heigth="115"
                alt="Mateusz's pic"
              ></img>
              <LinkedInIcon></LinkedInIcon>
              Mateusz
              <br />
              Lis
            </TeamMember>
          </TeamListEl>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/rolidabrowski/"
              target="_blank"
            >
              <img
                src={Roland}
                width="115"
                heigth="115"
                alt="Roland's pic"
              ></img>
              <LinkedInIcon></LinkedInIcon>
              Roland
              <br />
              Dąbrowski
            </TeamMember>
          </TeamListEl>
          <TeamListEl>
            <TeamMember
              href="https://www.linkedin.com/in/katarzyna-cependa/"
              target="_blank"
            >
              <img
                src={KatarzynaC}
                width="115"
                heigth="115"
                alt="Katarzyna's pic"
              ></img>
              <LinkedInIcon></LinkedInIcon>
              Katarzyna <br />
              Cependa
            </TeamMember>
          </TeamListEl>
        </TeamList>
      </Modal>
    </>
  );
};
