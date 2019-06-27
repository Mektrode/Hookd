import React, { useState, useContext } from "react";
import { StoreContext } from "../store";
import "./../global.css";
import Controls from "../components/Controls";
import RulesScreen from "../components/RulesScreen";
import WelcomeScreen from "../components/WelcomeScreen";
import ChooseNameScreen from "../components/ChooseNameScreen";
import LoadingScreen from "../components/LoadingScreen";

/*
Onboarding Architecture HOC?
Title
Subtitle
Body
Controls/Footer
*/

function Onboarding() {
  const { status } = useContext(StoreContext);
  const [activeScreen, setactiveScreen] = useState(0);

  //const nextScreen = () => setactiveScreen(activeScreen + 1);

  //const prevScreen = () => setactiveScreen(activeScreen - 1);

  const resetScreen = () => setactiveScreen(0);

  const prevScreen = () => {
    switch (activeScreen) {
      case 0:
        console.log("Sorry mate, cant go back!!!");
        break;
      case 1:
        return setactiveScreen(activeScreen - 1);
        break;
      case 2:
        return setactiveScreen(activeScreen - 1);
        break;
      case 3:
        return setactiveScreen(activeScreen - 1);
        break;
      default:
        break;
    }

    // if (activeScreen <= 0) {
    //   return setactiveScreen(activeScreen - 1);
    // } else if (activeScreen === 0) {
    //   console.log("Thats as far back as possible mate!!!");
    // } else {
    //   console.log("Hmmmm");
    // }
  };

  const nextScreen = () => {
    if (activeScreen <= 2) {
      return setactiveScreen(activeScreen + 1);
    } else if (activeScreen >= 4) {
      console.log("Wow!!!");
    }
  };

  return (
    <div className="line main-comp">
      <h1 className="main-title">Welcome {status.username}</h1>
      {activeScreen === 0 ? (
        <WelcomeScreen rightAction={nextScreen} />
      ) : (
        <span />
      )}
      {activeScreen === 1 ? (
        <RulesScreen leftAction={prevScreen} rightAction={nextScreen} />
      ) : (
        <span />
      )}
      {activeScreen === 2 ? (
        <ChooseNameScreen leftAction={prevScreen} rightAction={nextScreen} />
      ) : (
        <span />
      )}
      {activeScreen === 3 ? (
        <LoadingScreen leftAction={resetScreen} />
      ) : (
        <span />
      )}
      <br />
      <h6>These are test Buttons below</h6>
      <Controls
        currentScreen={activeScreen}
        leftAction={prevScreen}
        rightAction={nextScreen}
      />
    </div>
  );
}

export default Onboarding;
