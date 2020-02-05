import React from "react";
import { withRouter } from "react-router-dom";
import QCard from "./quiz-card/QCard";
import "./quiz-card/QCards.css";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const QCards = (props) =>
  <Row className="quiz-admin-cards-container">
    {Object.keys(props.fetchData).map((key, index) =>
      <Col>
        <QCard data={props.fetchData[key]}
          category={props.categories[index]}
          key={index} className="card"
          token={props.token}
        />
      </Col>
    )}
  </Row>



export default withRouter(QCards);
