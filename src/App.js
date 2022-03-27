import "./App.css";
import dice from "./Assets/images/icon-dice.svg";
import dividerDesk from "./Assets/images/pattern-divider-desktop.svg";
import dividerMobile from "./Assets/images/pattern-divider-mobile.svg";
function App() {
  return (
    <div className="App">
      <div className="box">
        <h2 className="head">Quote #1</h2>
        <p className="advice">
          &#8220; shq-e-mehboob ma chahiye mehfil eik hi hasti k sath // saans
          nahi aata aur badal jaata ha khoon ka rang, jab aye masti ki raat
          &#8221;
        </p>
        <img src={dividerDesk} alt="" className="divider desk" />
        <img src={dividerMobile} alt="" className="divider mob" />
        <div className="dice-div">
          <img src={dice} alt="" className="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
