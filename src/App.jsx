import logo from "/logo.png";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="Rocket logo" />
      <h1>World Clock</h1>
      <div className="card">
        {/* This feels violative of the DIY principle, but idk how to make it into a component */}
        <Container>
          <Row className="table-row">
            <Col className="table-col">City</Col>
            <Col className="table-time">Clock</Col>
          </Row>
          <Row className="table-row">
            <Col className="table-col">
              <p>Asia/Seoul</p>
            </Col>
            <Col className="table-time">
              <p>
                <Clock timeZone="Asia/Seoul" />
              </p>
            </Col>
          </Row>
          <Row className="table-row">
            <Col className="table-col">
              <p>Asia/Singapore</p>
            </Col>
            <Col className="table-time">
              <p>
                <Clock timeZone="Asia/Singapore" />
              </p>
            </Col>
          </Row>
          <Row className="table-row">
            <Col className="table-col">
              <p>Europe/London</p>
            </Col>
            <Col className="table-time">
              <p>
                <Clock timeZone="Europe/London" />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

// This works too but the boxes are not aligned
// <div className="card">
//     <Container>
//       <Row>
//         <Col>City</Col>
//         <Col>Clock</Col>
//         </Row>
//           <Clock timeZone="Asia/Seoul" />
//         </Row>
//         <Row>
//           <Clock timeZone="Asia/Singapore" />
//         </Row>
//         <Row>
//           <Clock timeZone="Europe/London" />
//         </Row>
//       </Row>
//     </Container>
//   </div>
// </div>
