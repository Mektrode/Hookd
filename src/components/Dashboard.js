import React, { useContext } from "react";

import { StoreContext } from "../store";

function Dashboard() {
  const { status } = useContext(StoreContext);
  return (
    <div>
      <h2>Welcome {status.username}</h2>
    </div>
  );
}

export default Dashboard;
