import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--brand-secondary);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-color: var(--brand-logout);
  }

  @media screen and (min-width: 769px) {
    bottom: 20px;
    right: 30px;
  }
`;
// export const StyledButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: var(--brand-secondary);
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   bottom: 20px;
//   right: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 50px;
//   transition: all 500ms;
//   &:hover {
//     transform: scale(1.1);
//     width: 120px;
//     height: 50px;
//     border-radius: 30px;
//     box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px, rgba(0, 0, 0, 0.3) 3px 3px 4px,
//       rgba(0, 0, 0, 0.2) -5px -4px 0px inset;
//   }
// `;
// export const PlusElement = styled.span`
//   color: #fff;
//   font-size: 50px;
// `;

// export const AddText = styled.span`
//   font-family: Circe;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1;
//   color: var(--bg-light);
//   align-items: center;
//   opacity: 0;
//   animation: fade-in 0.3s ease-in-out 0.2s forwards;

//   @keyframes fade-in {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;
