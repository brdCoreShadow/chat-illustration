import { IChildProps } from "@/utils/types";
import * as SC from "./MobileStyled";

const Mobile: React.FC<IChildProps> = ({ children }) => {
  return <SC.MobileCon>{children}</SC.MobileCon>;
};

export default Mobile;
