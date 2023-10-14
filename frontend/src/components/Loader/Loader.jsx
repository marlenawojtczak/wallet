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
