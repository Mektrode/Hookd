import React from "react";
import Controls from "./Controls";

const WelcomeScreen = props => {
  return (
    <div>
      <h3 className="text-title">Prepare Yourself</h3>
      <p className="text-body">
        Prepare to challenge your mental arithmatics and test your luck
      </p>
      <Controls right="Next" rightAction={props.rightAction} />
    </div>
  );
};

export default WelcomeScreen;
