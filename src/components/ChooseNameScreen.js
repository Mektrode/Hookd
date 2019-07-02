import React, { useState, useContext } from "react";
import { StoreContext } from "./../store";

const ChooseName = () => {
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
    uname === "" ? alert("Type something in") : changeUsername(uname);
    setUname("");
  };

  const customSubmit = e => {
    submitName(e);
  };

  const setGuest = () => {
    changeUsername("Guest");
  };

  return (
    <div>
      <form>
        <input type="text" value={uname} onChange={handleChange} />
        <button className="btn1" onClick={e => customSubmit(e)}>
          Yes
        </button>
      </form>
      <br />
    </div>
  );
};

function ChooseNameScreen() {
  const { changeUsername } = useContext(StoreContext);
  return (
    <div>
      <h3 className="text-title">What would you like to be called?</h3>
      <ChooseName />
      <button className="btn2" onClick={() => changeUsername("Guest")}>
        Guest Mode
      </button>
    </div>
  );
}

export default ChooseNameScreen;
