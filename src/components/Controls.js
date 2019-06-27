import React from "react";

const Controls = props => {
  //   val = props.currentScreen;

  //   const isOn = val => {
  //     switch (val) {
  //       case 0:
  //         return func12(null, 1);
  //         break;

  //       default:
  //         break;
  //     }
  //   };
  return (
    <div className="back-next">
      {!props.left ? (
        <button className="btn2 left-btn" onClick={props.leftAction}>
          Back
        </button>
      ) : (
        <button className="btn2 left-btn" onClick={props.leftAction}>
          {props.left}
        </button>
      )}
      {/* {!props.left || (
        <button className="btn2 left-btn" onClick={props.leftAction}>
          {props.left}
        </button>
      )} */}
      {!props.right ? (
        <button className="btn2 right-btn" onClick={props.rightAction}>
          Next
        </button>
      ) : (
        <button className="btn2 right-btn" onClick={props.rightAction}>
          {props.right}
        </button>
      )}
    </div>
  );
};

export default Controls;
