import {
  LoaderContainer,
  LoaderIcon,
  LoaderImage,
  LoaderContent,
} from "./Loader.styled";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderContent>
        <LoaderIcon>
          <LoaderImage>
            <WalletIcon />
          </LoaderImage>
        </LoaderIcon>
      </LoaderContent>
    </LoaderContainer>
  );
};

// import React, { useState, useEffect } from "react";
// import {
//   LoaderContainer,
//   LoaderIcon,
//   LoaderImage,
//   LoaderContent,
// } from "./Loader.styled";
// import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";

// export const Loader = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 1000);

//     // Oczyszczanie timeru podczas demontowania komponentu
//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <LoaderContainer>
//       <LoaderContent>
//         <LoaderIcon>
//           <LoaderImage>
//             <WalletIcon />
//           </LoaderImage>
//         </LoaderIcon>
//       </LoaderContent>
//     </LoaderContainer>
//   );
// };
