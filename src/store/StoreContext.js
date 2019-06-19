import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    username: initialUsername,
    onboarded: initialBoarded,
    scores: initialScores,
    children
  } = props;

  const [username, setUsername] = useState(initialUsername);
  const [onboarded, setOnboarded] = useState(initialBoarded);
  const [myscores, setScore] = useState(initialScores);

  const changeUsername = name => {
    setUsername(name);
    setOnboarded(true);
    //Push to LocalStorage
    updateStorage();
  };

  const newScore = () => {
    //Structure of adding new score
  };

  const updateStorage = () => {
    //To handle username change
    //To handle highscores added
  };

  // Make the context object:
  const usersContext = {
    username,
    changeUsername,
    onboarded,
    setOnboarded,
    myscores,
    newScore
  };
  // pass the value in provider and return
  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.defaultProps = {
  username: "",
  onboarded: false,
  scores: [
    {
      id: 100,
      targetScore: 310183,
      nameOfPlayer: "Johnny",
      finalScore: 203398,
      accuracy: 68,
      timeTaken: 60,
      date: "Thu 04 Apr 2019"
    },
    {
      id: 101,
      targetScore: 710183,
      nameOfPlayer: "Hakim",
      finalScore: 403398,
      accuracy: 53,
      timeTaken: 60,
      date: "Thu 04 Apr 2019"
    }
  ]
};
