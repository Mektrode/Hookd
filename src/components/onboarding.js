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
      <h1>Hello {username}</h1>
      <Welcome />
      <Rules />
      <ChooseName username={username} setUsername={changeUsername} />
      <button className="start">Start</button>
    </div>
  );
}

//re-usable and will handle routing
const BackNext = () => {
  return (
    <div className="back-next">
      <button>Back</button>
      <button>Next</button>
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
      <h3>What would you like to be called?</h3>
      <form onSubmit={submitName}>
        <input value={uname} onChange={handleChange} />
        <button>Next</button>
      </form>

      <br />
      <br />
      <button>Start as Guest</button>
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Hookd</h1>
      <p>Prepare to challenge your mental arithmatics and test your luck</p>
      <BackNext />
    </div>
  );
};

const Rules = () => {
  return (
    <div className="rules-card">
      <h3>Game Rules</h3>
      <ol className="rules">
        <li>You will be given a target between 1 and 1MIL</li>
        <li>You have 60 seconds to hit your target</li>
        <li>
          You MUST NOT go over more than double your Target or you will lose
        </li>
      </ol>
      <BackNext />
    </div>
  );
};
