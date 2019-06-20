import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    username: initialUsername,
    onboarded: initialBoarded,
    scores: initialScores,
    children
  } = props;

  const [status, setStatus] = useState([]);
  const [username, setUsername] = useState(initialUsername);
  const [onboarded, setOnboarded] = useState(initialBoarded);
  const [myscores, setScore] = useState(initialScores);

  const changeUsername = name => {
    setUsername(name);
    setOnboarded(true);
  };

  const newScore = (acc, stampTime) => {
    //Structure of adding new score
    const newScorePush = {
      id: new Date().getTime().toString(),
      nameOfPlayer: username,
      accuracy: acc,
      date: stampTime
    };
    console.log(newScorePush);
    setScore(myscores.concat([newScorePush])); //Spread operator?
  };

  const newStatus = (name, bool) => {
    const newStatusPush = {
      username: name,
      onboarded: bool
    };
    console.log("Pushing the following to status");
    console.log(newStatusPush);
    setStatus(newStatusPush);
  };

  //Run in the beginning to see if (and if not update) status with default values in localStorage
  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem("status"));
    console.log(
      "Check localStorage effect run, recieved the stored status output below"
    );
    console.log(storedStatus);
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, []);

  useEffect(() => {
    newStatus(username, onboarded);
    console.log("Username or Onboarded was changed");
  }, [username, onboarded]);

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
    console.log(status);
    console.log("Pushed the above status to localStorage");
    console.log("Now the new local storage recieved is:");
    console.log(JSON.parse(localStorage.getItem("status")));
  }, [status]);

  // Make the context object:
  const setupContext = {
    username,
    status,
    changeUsername,
    onboarded,
    setOnboarded,
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
  username: "",
  onboarded: false,
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
