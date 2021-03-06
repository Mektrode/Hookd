import React, { useState, useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { StoreContext } from "../store";
import { makeStyles } from "@material-ui/styles";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import HomeIcon from "@material-ui/icons/Home";
import ScoreIcon from "@material-ui/icons/Score";
import GameIcon from "@material-ui/icons/Score";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from "@material-ui/icons/Delete";

const SpeedDialsHooks = props => {
  const { clearLocalStorage } = useContext(StoreContext);

  const wireUp = which => {
    switch (which) {
      case "CLEAR":
        console.log("You have pressed CLEAR");
        return clearLocalStorage();
      case "HOME":
        console.log("You have pressed HOME");
        return props.history.push("/");
      case "GAME":
        console.log("You have pressed GAME");
        return props.history.push("/game");
      case "SCORES":
        console.log("You have pressed SCORES");
        return props.history.push("/scores");
      case "SETTINGS":
        console.log("You have pressed SCORES");
        return props.history.push("/settings");
      default:
        console.log("Nothing to Wire!!");
        break;
    }
  };

  const actions = [
    {
      icon: <HomeIcon />,
      name: "Home",
      do: () => wireUp("HOME")
    },
    { icon: <ScoreIcon />, name: "Scores", do: () => wireUp("SCORES") },
    { icon: <GameIcon />, name: "Game", do: () => wireUp("GAME") },
    { icon: <SettingsIcon />, name: "Settings", do: () => wireUp("SETTINGS") },
    {
      icon: <DeleteIcon />,
      name: "Clear Local Storage",
      do: () => wireUp("CLEAR")
    }
  ];
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

  const classes = useStyles();

  return (
    <div>
      <div>
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
            classes={{ fab: classes.fab }}
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
  bottom: 1vh;
  left: 10vw;
  text-align: center;
`;

const useStyles = makeStyles({
  fab: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #fa44eb 90%)"
  }
});

export default withRouter(SpeedDialsHooks);
