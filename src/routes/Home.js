import React, { useContext } from "react";

import { StoreContext } from "../store";
import Dashboard from "../components/Dashboard";
import Onboarding from "./onboarding";

function Home() {
  const { status } = useContext(StoreContext);
  return <div>{status.onboarded ? <Dashboard /> : <Onboarding />}</div>;
}

export default Home;
