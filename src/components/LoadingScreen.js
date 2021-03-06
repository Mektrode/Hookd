import React, { useContext } from "react";
import { StoreContext } from "./../store";

const LoadingScreen = props => {
  const { username } = useContext(StoreContext);
  return (
    <div className="loading">
      <h2 className="main-title">Loading</h2>
      <p className="centre">
        Just hang on a sec {username}. <br />
        We're preparing the game for you!!!
      </p>
    </div>
  );
};

export default LoadingScreen;
