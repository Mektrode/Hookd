import React, { useState } from "react";
import "./../global.css";

/*
Onboarding Architecture HOC?
Title
Subtitle
Body
Controls/Footer
*/

/*
State to watch
viewed screen 1 to 4

save to localStorage {
setusername
onboarding complete?
}

if localstorage onboarding NOT true
*/

export default function Onboarding() {
  const [username, changeUsername] = useState("");
  const [onboardingDone, setonboardingDone] = useState(false);

  return (
    <div className="line main-comp">
      <h1 className="main-title">Welcome {username}</h1>
      <Welcome />
      <Rules />
      <ChooseName username={username} setUsername={changeUsername} />
    </div>
  );
}

//re-usable and will handle routing
const BackNext = props => {
  return (
    <div className="back-next">
      {!props.left || <button className="btn2 left-btn">{props.left}</button>}
      {!props.left || <button className="btn2 right-btn">{props.right}</button>}
    </div>
  );
};

const ChooseName = props => {
  //local state username to control form
  const [uname, setUname] = useState("");

  const handleChange = e => {
    setUname(e.target.value);
  };
  //Push local state up to parent component then clear local state
  const submitName = e => {
    e.preventDefault();
    console.log({ uname });
    props.setUsername(uname);
    setUname("");
  };

  return (
    <div>
      <h3 className="text-title">What would you like to be called?</h3>
      <form onSubmit={submitName}>
        <input type="text" value={uname} onChange={handleChange} />
        <button className="btn1">Yes</button>
      </form>
      <br />
      <BackNext right="Guest Mode" />
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
      <h3 className="text-title">Prepare Yourself</h3>
      <p className="text-body">
        Prepare to challenge your mental arithmatics and test your luck
      </p>
      <BackNext left="Back" right="Next" />
    </div>
  );
};

const Rules = () => {
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
      <BackNext left="Back" right="Next" />
    </div>
  );
};
