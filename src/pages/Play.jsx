import React from "react";
import Game1 from "../componints/Game1";
import Game2 from "../componints/Game2";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavBar from "../componints/Navbar";
import { AllContext } from "../Context";

const Play = () => {
  const { bgMode, mode, name, difficulty } = useContext(AllContext);
  return (
    <Container fluid className={`pt-100 pt-5 ${bgMode}`}>
      <Row>
        <NavBar />
      </Row>
      <Row className="play mt-5 d-flex justify-content-center">
        <Col xs={6} className={`border-color py-3 ${mode}`}>
          <h6>Playing as {name}</h6>
          <hr className="Line" />
          <div className="d-flex justify-content-between align-items-center">
            <span className="">Time:</span>
            <span className="bg-info pb-1 px-2 rounded-4 text-end text-capitalize">
              {difficulty}
            </span>
          </div>
        </Col>
      </Row>
      <Game1 />
      <Game2 />
      <Row className="d-flex justify-content-center mt-2">
        <Col xs={6} className={`border-color py-2 ${mode}`}>
          <Link className="btn-style" to="/leaderboard">
            Leaderboard
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Play;
