import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import Logo from "../assets/logo.jpg";
import { AllContext } from "../Context";
const NavBar = () => {
  const {
    handleColor,
    color,
    mode,
    setMode,
    bgInput,
    setBgInput,
    bgMode,
    setBgMode,
    name,
    startGame,
  } = useContext(AllContext);
  return (
    <Navbar
      className={`d-flex ${mode} mb-5 fixed-top justify-content-between align-items-center px-4 border-navbar`}
    >
      <div className="logo d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="Logo" />
        </Link>
        <h6>{name}</h6>
        <input
          type="color"
          className="color-input ms-3 border border-3 rounded-2"
          value={color}
          onChange={handleColor}
        />
      </div>
      <div className="links">
        <Link className="btn-Nav" to="/">
          Home
        </Link>
        <Link className="btn-Nav" onClick={startGame()} to="/play">
          Play
        </Link>
        <Link className="btn-Nav" to="/leaderboard">
          Leaderboard
        </Link>
        <Button
          onClick={() => {
            (setMode(mode === "light" ? "dark" : "light"),
              setBgInput(bgInput === "mode-light" ? "mode-dark" : "mode-light"),
              setBgMode(
                bgMode === "bg-mode-light" ? "bg-mode-dark" : "bg-mode-light",
              ));
          }}
          className="btn-style"
        >
          Mode
        </Button>
      </div>
    </Navbar>
  );
};
export default NavBar;
