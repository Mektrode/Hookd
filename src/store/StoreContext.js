import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const Provider = props => {
  const initialStatusSetup = () => {
    const storedStatus = JSON.parse(localStorage.getItem("status"));
    // console.log(
    //   "Checked localStorage, recieved the object below, sent in as initial state for Status"
    // );
    // console.log(storedStatus);
    const defaultStatus = {
      username: "",
      onboarded: false
    };
    if (storedStatus) {
      return storedStatus;
    } else {
      return defaultStatus;
    }
  };

  // Initial values are obtained from the props
  const { scores: initialScores, children } = props;

  const [status, setStatus] = useState(initialStatusSetup());
  const [myscores, setScore] = useState(initialScores);

  const changeUsername = name => {
    console.log("changeUsername triggered");
    if (name === "") {
      newStatus(name, false);
    } else {
      newStatus(name, true);
    }
  };

  const newScore = (acc, stampTime) => {
    //Structure of adding new score
    const newScorePush = {
      id: new Date().getTime().toString(),
      nameOfPlayer: status.username,
      accuracy: acc,
      date: stampTime
    };
    console.log(newScorePush);
    setScore(myscores.concat([newScorePush])); //Spread operator?
  };

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
    // console.log("Pushed the object below to status => localStorage");
    // console.log(status);
  }, [status]);

  const newStatus = (name, bool = true) => {
    const newStatusPush = {
      username: name,
      onboarded: bool
    };
    console.log("Will push the following to status");
    console.log(newStatusPush);
    setStatus(newStatusPush);
  };
  // Make the context object:
  const setupContext = {
    status,
    changeUsername,
    myscores,
    newScore
  };
  // pass the value in provider and return
  return <Context.Provider value={setupContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.defaultProps = {
  scores: [
    {
      id: 1160973042627,
      targetScore: 310183,
      nameOfPlayer: "Johnny",
      finalScore: 203398,
      accuracy: 68,
      timeTaken: 60,
      date: "Thu 04 Apr 2019"
    },
    {
      id: 1260973042627,
      targetScore: 710183,
      nameOfPlayer: "Hakim",
      finalScore: 403398,
      accuracy: 53,
      timeTaken: 60,
      date: "Thu 04 Apr 2019"
    }
  ]
};
