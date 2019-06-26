import React from "react";
import Controls from "./Controls";

const RulesScreen = props => {
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
      <Controls
        left="Back"
        leftAction={props.leftAction}
        rightAction={props.rightAction}
        right="Next"
      />
    </div>
  );
};

export default RulesScreen;
