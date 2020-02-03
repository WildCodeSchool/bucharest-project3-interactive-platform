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
      modalData: {},
      quizData: [],
      quizzez: {}
    };
  }
  componentDidMount() {
    fetch("/authentication/quizz", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
        .then(res => {
            this.setState({
                quizzez: res
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
    const quizSomeInfo = this.state.quizData ? this.state.quizData: null;
    console.log(quizSomeInfo)
    const title = quizSomeInfo ? quizSomeInfo.title : null;
    const desc = quizSomeInfo ? quizSomeInfo.desc : null;
    console.log(title)
    const quiz = this.state.quizzez ? this.state.quizzez[0] : null;

    const question = quiz ? quiz.question : null;
    const image = quiz ? quiz.image_link : null;
    const answer1 = quiz ? quiz.answer1 : null;
    const answer2 = quiz ? quiz.answer2 : null;
    const correct = quiz ? quiz.correct : null;
    const modal = this.state.modalData ? this.state.modalData : null;
    console.log(modal)

    return (
      <Container fluid>
        <Navigation />
        <Row noGutters>
          <Col>
            <h1 className="quiz-title">{title}</h1>
            <h6 className="quiz-desc">{desc}</h6>
            <img src="../../../../assets//img/val-galben.svg" style={{width:"100%", height:"100%", top:"700px"}} className="yellow-wave"/>

            <Question
              question={question}
              image={image}
              answer1={answer1}
              answer2={answer2}
              correct={correct}
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
        <Row>
          <div className="q-footer">
          <Footer/>
          </div>
          </Row>
      </Container>
    );
  }
}
export default withRouter(Quiz);
