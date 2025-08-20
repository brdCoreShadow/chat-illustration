import * as SC from "./DisplayHeaderStyled"

import avaPic from "./../../assets/images/avatar.jpg"

const DisplayHeader:React.FC = () => {
  return (
    <SC.DisplayHeaderCon>
      <SC.AvaFlexCon>
        <SC.AvaThumb>
          <img src={avaPic} alt="avatar" />
        </SC.AvaThumb>
        <SC.AvaContentCon>
          <h3>Samuel Green</h3>
          <p>Available to Walk</p>
        </SC.AvaContentCon>
      </SC.AvaFlexCon>
      <SC.List>
        <SC.Item>
          <div></div>
        </SC.Item>
        <SC.Item>
          <div></div>
        </SC.Item>
        <SC.Item>
          <div></div>
        </SC.Item>
      </SC.List>
    </SC.DisplayHeaderCon>
  );
};

export default DisplayHeader;
