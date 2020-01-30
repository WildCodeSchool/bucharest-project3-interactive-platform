import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Question from "./Question";
import Navigation from "../navbar/NavBar";
import Footer from "../footer/Footer";
import data from "../info_modal/my_fake_db";
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: [],
      quizData: [],
      entireQuiz: []
    };
  }
  componentDidMount() {
    fetch("/authentication/quizz/1", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          entireQuiz: res
        });
      })
      .catch(err => console.log(`ERROR quiz-modal-bk: ${err}`));

    fetch("/authentication/quiz-modal", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          modalData: res
        });
      })
      .catch(err => console.log(`ERROR quiz-modal-bk: ${err}`));

    fetch("/authentication/q-title-desc", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          quizData: res
        });
      })
      .catch(err => console.log(`ERROR quiz-modal-bk: ${err}`));
  }
  render() {
    console.log(this.state.answers);
    const title = this.state.quizData.title;
    const desc = this.state.quizData.desc;
    const quiz = this.state.entireQuiz ? this.state.entireQuiz[0] : null;
    // console.log(title)
    console.log(this.state.entireQuiz)

    return (
      <Container fluid>
        <Navigation />
        <Row noGutters>
          <Col>
            <h1 className="quiz-title">{title}</h1>
            <h6 className="quiz-desc">{desc}</h6>
            <Question
              question={quiz.question}
              image={quiz.image}
              answer1={quiz.answer1}
              answer2={quiz.answer2}
            //   discount={quiz.discount}
              modalSuccessDescription={this.state.modalData.successDesc}
              modalSuccessLastMessage={this.state.modalData.successLastMessage}
              modalSuccessTitle={this.state.modalData.successTitle}
              modalFailureTitle={this.state.modalData.failureTitle}
              modalFailureDescription={this.state.modalData.failureDesc}
              modalFailureLastMessage={this.state.modalData.failureLastMessage}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Quiz);
