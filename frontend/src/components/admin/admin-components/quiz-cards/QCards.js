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
// face: {
//     firstQ: {
//         question: data.quiz.face.firstQuestion.question,
//         answers: data.quiz.face.firstQuestion.answers,
//         correct: data.quiz.face.firstQuestion.correct,
//         image: data.quiz.face.firstQuestion.firstQuestionImg
//     },
//     secondQ: {
//         question: data.quiz.face.secondQuestion.question,
//         answers: data.quiz.face.secondQuestion.answers,
//         correct: data.quiz.face.secondQuestion.correct,
//         image: data.quiz.face.secondQuestion.secondQuestionImg
//     }
// },
// hair: {
//     firstQ: {
//         question: data.quiz.hair.firstQuestion.question,
//         answers: data.quiz.hair.firstQuestion.answers,
//         correct: data.quiz.hair.firstQuestion.correct,
//         image: data.quiz.hair.firstQuestion.firstQuestionImg
//     },
//     secondQ: {
//         question: data.quiz.hair.secondQuestion.question,
//         answers: data.quiz.hair.secondQuestion.answers,
//         correct: data.quiz.hair.secondQuestion.correct,
//         image: data.quiz.hair.secondQuestion.secondQuestionImg
//     }
// },
// massage: {
//     firstQ: {
//         question: data.quiz.massage.firstQuestion.question,
//         answers: data.quiz.massage.firstQuestion.answers,
//         correct: data.quiz.massage.firstQuestion.correct,
//         image: data.quiz.massage.firstQuestion.firstQuestionImg
//     },
//     secondQ: {
//         question: data.quiz.massage.secondQuestion.question,
//         answers: data.quiz.massage.secondQuestion.answers,
//         correct: data.quiz.massage.secondQuestion.correct,
//         image: data.quiz.massage.secondQuestion.secondQuestionImg
//     }
// },
// anticelulitis: {
//     firstQ: {
//         question: data.quiz.anticelulitis.firstQuestion.question,
//         answers: data.quiz.anticelulitis.firstQuestion.answers,
//         correct: data.quiz.anticelulitis.firstQuestion.correct,
//         image: data.quiz.anticelulitis.firstQuestion.firstQuestionImg
//     },
//     secondQ: {
//         question: data.quiz.anticelulitis.secondQuestion.question,
//         answers: data.quiz.anticelulitis.secondQuestion.answers,
//         correct: data.quiz.anticelulitis.secondQuestion.correct,
//         image: data.quiz.anticelulitis.secondQuestion.secondQuestionImg
//     }
// }