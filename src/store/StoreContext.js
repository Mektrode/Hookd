import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    username: initialUsername,
    onboarded: initialBoarded,
    children
  } = props;

  const [username, changeUsername] = useState(initialUsername);
  const [onboarded, setOnboarded] = useState(initialBoarded);

  // Make the context object:
  const usersContext = {
    username,
    changeUsername,
    onboarded,
    setOnboarded
  };
  // pass the value in provider and return
  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.defaultProps = {
  username: "",
  onboarded: false
};
