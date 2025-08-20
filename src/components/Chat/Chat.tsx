import * as SC from "./ChatStyled";

import dogPic1 from "../../assets/images/dog-image-1.jpg";
import dogPic2 from "../../assets/images/dog-image-2.jpg";
import dogPic3 from "../../assets/images/dog-image-3.jpg";
import arrowIcon from "../../assets/images/arrowRight.png"

const Chat: React.FC = () => {
  return (
    <SC.ChatCon>
      <SC.ChatList>
        <li>
          <p>That sounds great. I’d be happy to discuss more.</p>
        </li>
        <li>
          <p>Could you send over some pictures of your dog, please?</p>
        </li>
        <li>
          <SC.DogsList>
            <li>
              <img src={dogPic1} alt="dog1" />
            </li>
            <li>
              <img src={dogPic2} alt="dog2" />
            </li>
            <li>
              <img src={dogPic3} alt="dog3" />
            </li>
          </SC.DogsList>
        </li>
        <li>
          {" "}
          <p>Here are a few pictures. She’s a happy girl!</p>
        </li>
        <li>
          <p>Can you make it?</p>{" "}
        </li>
        <li>
          <p>
            {" "}
            She looks so happy! The time we discussed works. How long shall I
            take her out for?
          </p>
        </li>
        <li>
          <p>30 minute walk</p>
          <h5>$29</h5>
        </li>
        <li>
          <p>1 hour walk</p>
          <h5>$49</h5>
        </li>
      </SC.ChatList>
      <SC.ChatForm>
        <input type="text" placeholder="Type a message…"/>
        <SC.SubmitBtn type="submit">
            <img src={arrowIcon} alt="arrow" />
        </SC.SubmitBtn>
      </SC.ChatForm>
    </SC.ChatCon>
  );
};

export default Chat;
