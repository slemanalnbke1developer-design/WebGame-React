import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../Context";
import NavBar from "../componints/Navbar";
const Home = () => {
  const {
    handlePrevImage,
    handleNextImage,
    mode,
    bgInput,
    bgMode,
    name,
    setName,
    goal,
    setGoal,
    difficulty,
    setDifficulty,
    startGame,
    setSaving,
  } = useContext(AllContext);
  const [tempName, setTempName] = useState(name);
  const [tempGoal, setTempGoal] = useState(goal);
  const [tempDifficulty, setTempDifficulty] = useState(difficulty);
  const handleSave = () => {
    setName(tempName);
    setGoal(tempGoal);
    setDifficulty(tempDifficulty);
    startGame(tempGoal);
  };
  return (
    <Container fluid className={`pt-100 pt-5 ${bgMode}`}>
      <Row>
        <NavBar />
      </Row>
      <Row className="justify-content-center gap-3 mt-5">
        <Col xs={4} className={`border-color py-3 ${mode}`}>
          <h5>Welcome</h5>
          <hr className="Line" />
          <h3>Hello, {name}</h3>
          <p>Difficulty: normal - Focus Goal: {goal} mins</p>
          <h6>Stay sharp. Keep practicing. — Unknown</h6>

          <Button onClick={handlePrevImage} className="btn-style mt-3">
            Background Prev
          </Button>
          <Button onClick={handleNextImage} className="btn-style mt-3">
            Background Next
          </Button>
        </Col>
        <Col xs={4} className={`border-color py-3 ${mode}`}>
          <h5>Profile & Settings</h5>
          <hr className="Line" />
          <Row className="d-flex justify-content-between">
            <Col>
              <h6>Name</h6>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className={`form-control border-0 ${bgInput}`}
                placeholder="input Name"
              />
              <h6>Daily Focus Goal (mins)</h6>
              <input
                type="number"
                lang="en"
                dir="ltr"
                value={tempGoal}
                onChange={(e) => setTempGoal(e.target.value)}
                className={`form-control border-0 ${bgInput}`}
                placeholder="input Focus Goal"
              />
              <Button
                onClick={() => {
                  if (tempGoal > 0) {
                    handleSave();
                    setSaving(true);
                  }
                }}
                className="btn-style mt-3"
              >
                Save
              </Button>
            </Col>
            <Col>
              <label className="form-check-label">Difficulty</label>
              <select
                value={tempDifficulty}
                onChange={(e) => setTempDifficulty(e.target.value)}
                className={`form-select ${bgInput} border-0`}
              >
                <option className={`${bgInput} border-0`} value="easy">
                  Easy
                </option>
                <option className={`${bgInput} border-0`} value="normal">
                  Normal
                </option>
                <option className={`${bgInput} border-0`} value="hard">
                  Hard
                </option>
              </select>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="d-flex justify-content-center fixed-bottom">
          <p className={`text-center ${mode} rounded-4 px-2 py-1`}>
            <span className="text-danger">&copy;2026</span> by
            <span className="text-primary"> Sleman Alnbke.</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
