import { IChildProps } from "@/utils/types";
import * as SC from "./DisplayStyled";
const Display: React.FC<IChildProps> = ({ children }) => {
  return <SC.DisplayCon>{children}</SC.DisplayCon>;
};

export default Display;
