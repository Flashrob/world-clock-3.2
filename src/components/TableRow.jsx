import { Col, Row } from "react-bootstrap";
import Clock from "../Clock";

export const TableRow = (props) => {
  return (
    <Row className="table-row">
      <Col className="table-col">
        <p>{props.city}</p>
      </Col>
      <Col className="table-time">
        <p>
          <Clock timeZone={props.timeZone} />
        </p>
      </Col>
    </Row>
  );
};
