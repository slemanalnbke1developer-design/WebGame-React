import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { AllContext } from "../Context";
const Game2 = () => {
  const {
    mode,
    score,
    mistakes,
    buttons,
    startGame,
    handleButtonClick,
    targetText,
    targetColorClass,
    gameOver,
    currentRound,
    finishAndSave,
  } = useContext(AllContext);

  return (
    <Row className="play mt-2 d-flex justify-content-center">
      <Col xs={6} className={`border-color py-2 ${mode}`}>
        <h6>Color Match</h6>
        <hr className="Line" />
        <p className="fs-12">
          Click the actual color of the word. not what it says.
        </p>
        <Row className="play mt-2 d-flex justify-content-center">
          <Col xs={12} className={`py-3 px-4`}>
            {!gameOver && (
              <div className="mb-3">
                <h2 className={`fw-bold ${targetColorClass}`}>{targetText}</h2>
              </div>
            )}
            {!gameOver && (
              <div className="d-flex flex-wrap gap-2 mb-4">
                {buttons.map((btnName, index) => (
                  <Button
                    key={index}
                    className="btn-style px-4 py-2"
                    onClick={() => handleButtonClick(btnName)}
                  >
                    {btnName}
                  </Button>
                ))}
              </div>
            )}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="fs-12">Score: {score}</span>
                <span className="fs-12">Mistakes: {mistakes}</span>
                <span className="fs-12">Round: {currentRound}</span>
              </div>
              <Col
                xs={12}
                className="d-flex justify-content-center align-items-center"
              >
                <Button
                  className="btn-style"
                  onClick={() => {
                    startGame();
                  }}
                >
                  Reset
                </Button>
                <Button
                  className="btn-style"
                  onClick={() => {
                    finishAndSave();
                  }}
                >
                  Finish & Save
                </Button>
              </Col>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Game2;
