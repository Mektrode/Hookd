import React, { useState } from "react";
import styled from "styled-components";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

const wireUp = which => {
  switch (which) {
    case "CLEAR":
      console.log("You have pressed CLEAR");
      break;
    case "HOME":
      console.log("You have pressed HOME");
      break;
    case "GAME":
      console.log("You have pressed GAME");
      break;
    case "SCORES":
      console.log("You have pressed SCORES");
      break;
    default:
      break;
  }
};

const actions = [
  { icon: <FileCopyIcon />, name: "Home", do: () => console.log("OTHER BTN") },
  { icon: <SaveIcon />, name: "Game", do: () => wireUp("SCORES") },
  { icon: <PrintIcon />, name: "Scores", do: () => wireUp("GAME") },
  { icon: <ShareIcon />, name: "Settings", do: () => wireUp("HOME") },
  {
    icon: <DeleteIcon />,
    name: "Clear Local Storage",
    do: () => wireUp("CLEAR")
  }
];

const SpeedDialsHooks = () => {
  const [status, setStatus] = useState({
    direction: "up",
    open: false,
    hidden: false
  });

  const handleClick = () => {
    setStatus(status => ({ ...status, open: !status.open }));
  };

  const handleClose = () => {
    setStatus(status => ({ ...status, open: false }));
  };
  const divStyle = {
    width: 100,
    border: 1,
    borderColor: "black",
    borderStyle: "solid"
  };

  return (
    <div>
      <div style={divStyle}>
        <Wrapper>
          <SpeedDial
            ariaLabel="SpeedDial example"
            hidden={status.hidden}
            icon={<SpeedDialIcon />}
            // onBlur={handleClose}
            onClick={handleClick}
            onClose={handleClose}
            onMouseLeave={handleClose}
            open={status.open}
            direction={status.direction}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={action.do}
              />
            ))}
          </SpeedDial>
        </Wrapper>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  //border: 1px solid black;
  width: 70px;
  position: fixed;
  bottom: 10vh;
  left: 10vw;
  text-align: center;
`;

export default SpeedDialsHooks;
