import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/game">Game</Link>
      </li>
      <li>
        <Link to="/score">Highscores</Link>
      </li>
    </ul>
  );
}

export default Header;
