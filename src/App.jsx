import logo from "/logo.png";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TableRow } from "./components/TableRow";

const timeZonesData = [
  {
    timeZone: "Asia/Seoul",
    city: "Seoul",
  },
  {
    timeZone: "Asia/Singapore",
    city: "Singapore",
  },
  {
    timeZone: "Europe/London",
    city: "London",
  },
];

export default function App() {
  const timeZones = timeZonesData.map((timeZoneItem, index) => {
    return (
      <TableRow
        timeZone={timeZoneItem.timeZone}
        city={timeZoneItem.city}
        key={index}
      />
    );
  });

  // const timeZones = [
  //   <TableRow timeZone="Asia/Seoul" city="Seoul" />,
  //   <TableRow timeZone="Asia/Singapore" city="Singapore" />,
  //   <TableRow timeZone="Europe/London" city="London" />,
  // ];

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
          {timeZones}
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
