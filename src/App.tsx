import * as SC from "./AppStyled";
import Display from "./components/Display/Display";
import DisplayHeader from "./components/DisplayHeader/DisplayHeader";
import Mobile from "./components/Mobile/Mobile";

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Mobile>
        <Display>
          <DisplayHeader />
        </Display>
      </Mobile>
    </SC.AppStyled>
  );
};

export default App;
