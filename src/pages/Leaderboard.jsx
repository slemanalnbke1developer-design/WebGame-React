import React, { useContext } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { AllContext } from "../Context";
import NavBar from "../componints/Navbar";

const Leaderboard = () => {
  const { bgMode, mode, save, handleReset } = useContext(AllContext);

  return (
    <Container fluid className={`pt-100 pt-5 min-vh-100 ${bgMode}`}>
      <Row>
        <NavBar />
      </Row>
      <Row className="justify-content-center fw-bold gap-3 mt-5 pb-5">
        <Col xs={12} md={3} className={`border-color pt-3 pb-1 ${mode}`}>
          <h6 className="ms-3">Overall Score</h6>
          <hr className="Line" />
          <Row>
            <Col xs={12}>
              {save.map((item, index) => (
                <h5 key={index} className="text-center my-2">
                  {item.score}
                </h5>
              ))}
            </Col>
          </Row>
          <p className="fs-12 text-center">
            Aggregate score mo. per-game scoring easi.
          </p>
        </Col>

        <Col xs={12} md={7} className={`border-color pt-3 pb-1 ${mode}`}>
          <h6 className="ms-3">Recent Sessions</h6>
          <hr className="Line" />

          {save.length > 0 ? (
            save.map((item, index) => (
              <Row
                key={index}
                className="d-flex justify-content-between align-items-center my-1"
              >
                <Col xs={5} className="ps-4">
                  <h5 className="">{item.dateTime}</h5>
                </Col>
                <Col xs={4}>
                  <h5 className="">Player : {item.name}</h5>
                </Col>
                <Col xs={3} className="text-end pe-3">
                  <Badge
                    bg={item.game === "Game 2" ? "warning" : "info"}
                    className="text-dark px-2 py-1 fs-12"
                  >
                    {item.game || "Game 1"}
                  </Badge>
                </Col>
              </Row>
            ))
          ) : (
            <p className="text-center text-muted my-3">
              No sessions recorded yet.
            </p>
          )}

          <div className="d-flex justify-content-center mt-3">
            <Button
              className="btn-style w-25 mt-4"
              onClick={handleReset}
              disabled={save.length === 0}
            >
              clear
            </Button>
          </div>
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

export default Leaderboard;
