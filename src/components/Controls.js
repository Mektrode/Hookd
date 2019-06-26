import React from "react";

const Controls = props => {
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

export default Controls;
