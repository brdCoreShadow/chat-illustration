import * as SC from "./AppStyled";

import Chat from "./components/Chat/Chat";
import Display from "./components/Display/Display";
import DisplayHeader from "./components/DisplayHeader/DisplayHeader";
import Intro from "./components/Intro/Intro";
import Mobile from "./components/Mobile/Mobile";

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Mobile>
        <Display>
          <DisplayHeader />
          <Chat/>
        </Display>
      </Mobile>
      <Intro/>
    </SC.AppStyled>
  );
};

export default App;
