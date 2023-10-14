import { Button } from "./ButtonAddTransactions.styled";
import * as React from "react";
import { ReactComponent as PlusElement } from "../../assets/icons/plus.svg";

export const ButtonAddTransactions = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <PlusElement />
    </Button>
  );
};

// import React, { useState } from "react";
// import {
//   StyledButton,
//   AddText,
//   PlusElement,
// } from "./ButtonAddTransactions.styled";

// export const ButtonAddTransactions = ({ onClick }) => {
//   const [showAdd, setShowAdd] = useState(false);

//   const handleMouseEnter = () => {
//     setShowAdd(true);
//   };

//   const handleMouseLeave = () => {
//     setShowAdd(false);
//   };

//   return (
//     <StyledButton
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={onClick}
//     >
//       {showAdd ? (
//         <AddText>Add Transaction</AddText>
//       ) : (
//         <PlusElement>+</PlusElement>
//       )}
//     </StyledButton>
//   );
// };
