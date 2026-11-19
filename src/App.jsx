import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Play from "./pages/Play";
import NavBar from "./componints/Navbar";
import "./App.css";
import { AllProvider } from "./Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <AllProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/play" element={<Play />} />
          </Routes>
        </AllProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
