import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AllContext } from "../Context";

const Game1 = () => {
  const {
    mode,
    scoreG1,
    mistakesG1,
    maxRoundsG1,
    currentRoundG1,
    activeCards,
    handleResetG1,
    g1FlashingIndex,
    g1DotIndex,
    handleCardClickG1,
    startGame1,
    finishAndSaveG1,
    isPlayingG1,
    goal,
  } = useContext(AllContext);

  const isGoalValid = goal && Number(goal) > 0;

  return (
    <Row className="play mt-2 d-flex justify-content-center">
      <Col xs={10} md={8} lg={6} className={`border-color py-3 ${mode}`}>
        <h5 className="text-center fw-bold mb-2">Color Memory Master</h5>
        <hr className="Line" />

        <p className="fs-12 text-center text-muted mb-3">
          Watch the cards flash. Click the card with the point indicator (🔴)
          before it moves!
        </p>

        {!isPlayingG1 ? (
          <div className="text-center my-4 py-3">
            {!isGoalValid ? (
              "   "
            ) : (
              <p className="fw-semibold mb-3">
                Your Target Goal is set to:{" "}
                <span className="text-primary fs-5">{goal}</span>
              </p>
            )}
            <Button className="btn-style" onClick={startGame1}>
              Start
            </Button>
            <Button
              className="btn-style"
              onClick={() => {
                finishAndSaveG1();
              }}
            >
              Finish & Save
            </Button>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3 px-3 py-2 border rounded bg-opacity-10 bg-secondary">
              <span className="fw-semibold fs-14">
                Round: <span className="text-primary">{currentRoundG1}</span> /{" "}
                {maxRoundsG1}
              </span>
              <span className="fw-semibold fs-14">
                Score: <span className="text-success">{scoreG1}</span>
              </span>
              <span className="fw-semibold fs-14">
                Mistakes: <span className="text-danger">{mistakesG1}</span>
              </span>
            </div>

            <Row className="g-3 my-3 justify-content-center">
              {activeCards.map((card, index) => {
                const isFlashing = g1FlashingIndex === index;
                const hasDot = g1DotIndex === index;

                return (
                  <Col
                    xs={4}
                    sm={3}
                    key={index}
                    className="d-flex justify-content-center"
                  >
                    <div
                      onClick={() => handleCardClickG1(index)}
                      className={`card-item p-3 rounded text-center position-relative user-select-none shadow-sm transition-all ${
                        isFlashing
                          ? "bg-warning text-dark scale-105"
                          : "bg-dark text-white"
                      }`}
                      style={{
                        cursor: "pointer",
                        fontSize: "2rem",
                        minWidth: "75px",
                        minHeight: "85px",
                        border: isFlashing
                          ? "2px solid #ffc107"
                          : "1px solid #444",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <div>{card.img}</div>

                      {hasDot && (
                        <span
                          className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
                          style={{
                            width: "14px",
                            height: "14px",
                            boxShadow: "0 0 8px red",
                          }}
                        ></span>
                      )}
                    </div>
                  </Col>
                );
              })}
            </Row>

            <Row className="mt-4">
              <Col xs={12} className="d-flex justify-content-center gap-2">
                <Button className="btn-style" onClick={handleResetG1}>
                  Reset
                </Button>
                <Button
                  variant="danger"
                  className="btn-style"
                  onClick={finishAndSaveG1}
                >
                  Finish & Save
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Col>
    </Row>
  );
};

export default Game1;
