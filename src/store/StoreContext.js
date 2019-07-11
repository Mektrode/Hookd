import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const Provider = props => {
  const initialStatusSetup = () => {
    const storedStatus = JSON.parse(localStorage.getItem("status"));
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

  const initialScoresSetup = () => {
    const storedScores = JSON.parse(localStorage.getItem("scores"));
    const defaultScores = [
      {
        id: 1160973042627,
        targetScore: 310183,
        nameOfPlayer: "Johnny",
        finalScore: 203398,
        accuracy: 68,
        timeTaken: 60,
        date: "24m ago"
      },
      {
        id: 1260973042627,
        targetScore: 710183,
        nameOfPlayer: "Hakim",
        finalScore: 403398,
        accuracy: 53,
        timeTaken: 60,
        date: "32m ago"
      }
    ];
    if (storedScores) {
      return storedScores;
    } else {
      return defaultScores;
    }
  };

  const [status, setStatus] = useState(initialStatusSetup());
  const [myscores, setScore] = useState(initialScoresSetup());

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
    if (myscores) {
      setScore(myscores.concat([newScorePush]));
    } else {
      setScore(myscores.push([newScorePush]));
    }
  };

  const rankBy = (duration, user) => {
    const oldScores = [
      {
        id: 1160973042627,
        targetScore: 310183,
        nameOfPlayer: "Johnny",
        finalScore: 203398,
        accuracy: 68,
        timeTaken: 60,
        date: "24m ago"
      },
      {
        id: 1260973042627,
        targetScore: 710183,
        nameOfPlayer: "Hakim",
        finalScore: 403398,
        accuracy: 53,
        timeTaken: 60,
        date: "32m ago"
      }
    ];

    if (duration === "today") {
      return oldScores[0];
    } else return oldScores[1];
  };

  const clearScores = () => {
    setScore([]);
    localStorage.setItem("scores", JSON.stringify(myscores));
  };

  const clearLocalStorage = () => {
    changeUsername("");
    clearScores();
  };
  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(myscores));
  }, [myscores]);

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
    clearLocalStorage,
    myscores,
    newScore,
    rankBy
  };

  // Initial values are obtained from the props
  const { children } = props;

  // pass the value in provider and return
  return <Context.Provider value={setupContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
