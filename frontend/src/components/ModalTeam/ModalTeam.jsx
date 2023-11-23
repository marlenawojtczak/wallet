import {
  Modal,
  CloseButton,
  ModalOverlay,
  TeamList,
  TeamListEl,
  TeamMember,
  LinkedInIcon,
  ModalFilter,
  NameWrapper,
  Name,
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
        style={{ overlay: { backgroundColor: "rgba(150, 150, 150, 0.5)" } }}
      >
        <ModalFilter>
          <CloseButton onClick={handleClose} />
          <TeamList>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/jakubantoniak/"
                target="_blank"
              >
                <img src={Jakub} alt="Jakub's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Jakub
                  <br />
                  Antoniak
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/marlena-wojtczak-89438527b/"
                target="_blank"
              >
                <img src={Marlena} alt="Marlena's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Marlena
                  <br />
                  Wojtczak
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/katarzyna-w%C3%B3jcikowska-59a650192/"
                target="_blank"
              >
                <img src={KatarzynaW} alt="Katarzyna's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Katarzyna
                  <br />
                  Wójcikowska
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/mateusz-lis-8840ba280/"
                target="_blank"
              >
                <img src={Mateusz} alt="Mateusz's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Mateusz
                  <br />
                  Lis
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/rolidabrowski/"
                target="_blank"
              >
                <img src={Roland} alt="Roland's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Roland
                  <br />
                  Dąbrowski
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
            <TeamListEl>
              <TeamMember
                href="https://www.linkedin.com/in/katarzyna-cependa/"
                target="_blank"
              >
                <img src={KatarzynaC} alt="Katarzyna's pic"></img>
                <LinkedInIcon />
                <NameWrapper>
                  Katarzyna <br />
                  Cependa
                </NameWrapper>
              </TeamMember>
            </TeamListEl>
          </TeamList>
        </ModalFilter>
      </Modal>
    </>
  );
};
