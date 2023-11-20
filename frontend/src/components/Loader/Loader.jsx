import React, { useState, useEffect } from "react";
import { LoaderContent } from "./Loader.styled";

export const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return showLoader ? <LoaderContent /> : null;
};

// import { LoaderContent } from "./Loader.styled";

// export const Loader = () => {
//   return <LoaderContent />;
// };

// import {
//   LoaderContainer,
//   LoaderIcon,
//   LoaderImage,
//   LoaderContent,
// } from "./Loader.styled";
// import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";

// export const Loader = () => {
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
