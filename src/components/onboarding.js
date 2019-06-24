import React, { useState, useContext } from "react";
import { StoreContext } from "./../store";
import "./../global.css";

/*
Onboarding Architecture HOC?
Title
Subtitle
Body
Controls/Footer
*/

export default function Onboarding() {
  const { status } = useContext(StoreContext);
  const [activeScreen, setactiveScreen] = useState(0);
  const [screen1, setscreen1] = useState(true);
  const [screen2, setscreen2] = useState(false);
  const [screen3, setscreen3] = useState(false);
  const [screen4, setscreen4] = useState(false);

  function customReducer(action) {
    switch (action) {
      case "activateScreen2":
        setscreen1(!screen1);
        setscreen2(!screen2);
        console.log("Screen 2 activated");
        break;
      case "activateScreen3":
        setscreen2(!screen2);
        setscreen3(!screen3);
        console.log("Screen 3 activated");
        break;
      case "activateScreen4":
        setscreen3(!screen3);
        setscreen4(!screen4);
        console.log("Screen 4 activated");
        break;
      case "resetBoarding":
        setscreen1(true);
        setscreen4(false);
        console.log("Reset activated");
      default:
        //Bug = Default trigger activates whenever Reset above is activated
        console.log("Default triggered");
        break;
    }
  }

  const resetTrigger = () => setactiveScreen(0);

  const screen1Tigger = () => setactiveScreen(1);

  const screen2Tigger = () => setactiveScreen(2);

  const screen3Tigger = () => setactiveScreen(3);

  return (
    <div className="line main-comp">
      <h1 className="main-title">Welcome {status.username}</h1>
      {activeScreen === 0 ? <Welcome rightAction={screen1Tigger} /> : <span />}
      {activeScreen === 1 ? (
        <Rules leftAction={resetTrigger} rightAction={screen2Tigger} />
      ) : (
        <span />
      )}
      {activeScreen === 2 ? (
        <ChooseName leftAction={screen1Tigger} rightAction={screen3Tigger} />
      ) : (
        <span />
      )}
      {activeScreen === 3 ? <Loading leftAction={resetTrigger} /> : <span />}
    </div>
  );
}

//re-usable and will handle conditional rendering
const BackNext = props => {
  return (
    <div className="back-next">
      {!props.left || (
        <button className="btn2 left-btn" onClick={props.leftAction}>
          {props.left}
        </button>
      )}
      {!props.right || (
        <button className="btn2 right-btn" onClick={props.rightAction}>
          {props.right}
        </button>
      )}
    </div>
  );
};

const Loading = props => {
  const { username } = useContext(StoreContext);
  return (
    <div className="loading">
      <h2 className="main-title">Loading</h2>
      <p className="centre">
        Just hang on a sec {username}. <br />
        We're preparing the game for you!!!
      </p>
      <BackNext left="reset" leftAction={props.leftAction} />
    </div>
  );
};

const ChooseName = props => {
  //Global Store connection
  const { changeUsername } = useContext(StoreContext);
  //local state username to control form
  const [uname, setUname] = useState("");

  const handleChange = e => {
    setUname(e.target.value);
  };
  //Push local state up to parent component then clear local state
  const submitName = e => {
    e.preventDefault();
    console.log("Stored uname is " + { uname });
    uname === "" ? changeUsername("Guest") : changeUsername(uname);
    setUname("");
  };

  const customSubmit = e => {
    submitName(e);
    props.rightAction();
  };

  return (
    <div>
      <h3 className="text-title">What would you like to be called?</h3>
      <form>
        <input type="text" value={uname} onChange={handleChange} />
        <button className="btn1" onClick={e => customSubmit(e)}>
          Yes
        </button>
      </form>
      <br />
      <BackNext
        left="Back"
        leftAction={props.leftAction}
        right="Guest Mode"
        rightAction={e => customSubmit(e)}
      />
    </div>
  );
};

const Welcome = props => {
  return (
    <div>
      <h3 className="text-title">Prepare Yourself</h3>
      <p className="text-body">
        Prepare to challenge your mental arithmatics and test your luck
      </p>
      <BackNext right="Next" rightAction={props.rightAction} />
    </div>
  );
};

const Rules = props => {
  return (
    <div className="rules-card">
      <h3 className="text-title">Game Rules</h3>
      <ol className="rules text-body">
        <li>You will be given a target between 1 and 1MIL</li>
        <li>You have 60 seconds to hit your target</li>
        <li>
          You MUST NOT go over more than double your Target or you will lose
        </li>
      </ol>
      <BackNext
        left="Back"
        leftAction={props.leftAction}
        rightAction={props.rightAction}
        right="Next"
      />
    </div>
  );
};
