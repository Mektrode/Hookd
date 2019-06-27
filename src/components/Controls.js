import React from "react";

const Controls = props => {
  return (
    <div className="back-next">
      {props.currentScreen === 0 || (
        <button className="btn2 left-btn" onClick={props.leftAction}>
          Back
        </button>
      )}
      {props.currentScreen === 3 || (
        <button className="btn2 right-btn" onClick={props.rightAction}>
          Next
        </button>
      )}
    </div>
  );
};

export default Controls;
