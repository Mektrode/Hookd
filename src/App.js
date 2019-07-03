import React from "react";
import { StoreContextProvider } from "./store";

import Routes from "./routes";

function App() {
  return (
    <StoreContextProvider>
      <Routes />
    </StoreContextProvider>
  );
}

export default App;
