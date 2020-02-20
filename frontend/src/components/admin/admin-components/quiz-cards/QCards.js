import React from "react";
import { withRouter } from "react-router-dom";
import QCard from "./quiz-card/QCard";
import "./quiz-card/QCards.css";

const QCards = (props) =>
  <div className="quiz-admin-cards-container">
    {console.log(props.fetchData)}
    {Object.keys(props.fetchData).map((key, index) =>

        <QCard data={props.fetchData[key]}
          category={props.categories[index]}
          key={index} className="card"
          token={props.token}
        />

    )}
  </div>



export default withRouter(QCards);
