import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { status: initialStatus, scores: initialScores, children } = props;

  const [status, setStatus] = useState(initialStatus);
  const [myscores, setScore] = useState(initialScores);

  const changeUsername = name => {
    console.log("changeUsername triggered");
    newStatus(name, true);
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

  //Run in the beginning to see if (and if not update) status with default values in localStorage
  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem("status"));
    console.log(
      "Check localStorage effect run, recieved the stored status output below"
    );
    console.log(storedStatus);
    // if (storedStatus) {
    //   setStatus(storedStatus);
    // }
  }, []);

  // useEffect(() => {
  //   newStatus(status.username, status.onboarded);
  //   console.log(
  //     `Username or Onboarded was changed. Username is now ${
  //       status.username
  //     } and onboarded is now ${status.onboarded}`
  //   );
  // }, [status]);

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
    console.log(status);
    console.log("Pushed the above status to localStorage");
    console.log("Now the new local storage recieved is:");
    console.log(JSON.parse(localStorage.getItem("status")));
  }, [status]);

  const newStatus = (name, bool) => {
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
  status: {
    username: "",
    onboarded: false
  },
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
