import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Question from "./Question";
import Navigation from "../navbar/NavBar";
import Footer from "../footer/Footer";
import data from "../info_modal/my_fake_db";
import { connect } from 'react-redux';


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
    const quizWave = <svg version="1.1" className="quizWave" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 255.12 9.25" style={{enableBackground:'new 0 0 255.12 9.25'}} xmlSpace="preserve">
    <g>
    <defs>
       <rect id="SVGID_1_" x="7.6" y="0" width="255.12" height="9.25"/>
    </defs>
    <clipPath id="SVGID_2_">
       <use xlinkHref="#SVGID_1_"  style={{overflow:'visible'}}/>
    </clipPath>
    <path class="st0" d="M23.87,3.43c1.64-0.4,3.01-0.37,4.58-0.34c1.3,0.02,2.68,0.07,4.05-0.18c1.68-0.3,3.45-0.71,5.02-1.12
       c0.87-0.22,1.61-0.51,2.57-0.59c3.25-0.29,6.07,0.57,9.04,1.52c5.35,1.71,10.05,3.03,15.73,2.43c0.81-0.08,1.6-0.22,2.4-0.39
       C70.78,4,73.95,2.53,77.3,1.74c2.79-0.66,5.02-0.46,7.92-0.28c2.15,0.13,4.82,0.44,7.18,1.11c1.99,0.56,3.33,1.42,5.66,1.82
       c3.98,0.69,7.13-0.05,10.85-0.96c1.64-0.4,3.01-0.37,4.58-0.34c1.3,0.02,2.68,0.07,4.05-0.18c1.68-0.3,3.45-0.71,5.02-1.12
       c0.87-0.23,1.61-0.51,2.57-0.59c3.24-0.29,6.07,0.57,9.04,1.52c5.35,1.71,10.05,3.03,15.73,2.43c0.81-0.08,1.6-0.22,2.4-0.39
       c3.51-0.75,6.68-2.22,10.02-3.01c2.79-0.66,5.01-0.46,7.92-0.28c2.16,0.13,4.85,0.44,7.22,1.12c1.99,0.56,3.3,1.41,5.62,1.81
       c3.98,0.69,7.13-0.05,10.85-0.96c1.64-0.4,3.01-0.37,4.58-0.35c1.3,0.02,2.68,0.07,4.05-0.18c1.68-0.3,3.45-0.71,5.02-1.12
       c0.87-0.23,1.61-0.51,2.58-0.59c3.24-0.29,6.07,0.57,9.04,1.52c5.35,1.71,10.05,3.03,15.73,2.43c0.81-0.08,1.6-0.22,2.4-0.39
       c3.51-0.75,6.68-2.22,10.03-3.01c2.79-0.66,5.01-0.46,7.92-0.28c2.23,0.14,5.01,0.46,7.43,1.18V1.79c-2.38-0.6-5.28-0.88-7.45-1.05
       c-2.94-0.23-5-0.65-7.83,0c-3.31,0.76-6.43,2.31-9.99,3.03c-0.79,0.16-1.59,0.28-2.4,0.35c-5.71,0.48-10.29-0.99-15.61-2.69
       c-2.97-0.95-5.91-1.69-9.1-1.32c-1.07,0.12-1.83,0.49-2.77,0.78c-1.68,0.52-3.63,1.03-5.48,1.36c-1.51,0.27-3.05,0.14-4.47,0.04
       c-1.75-0.12-3.23-0.25-5.07,0.18c-3.41,0.8-6.28,1.5-9.91,0.89c-1.85-0.31-3.43-1.2-5.2-1.62c-2.33-0.56-5.09-0.82-7.18-0.98
       c-2.94-0.23-5-0.65-7.83,0c-3.31,0.75-6.43,2.31-9.99,3.03c-0.79,0.16-1.59,0.28-2.4,0.35c-5.71,0.48-10.29-0.99-15.61-2.69
       c-2.97-0.95-5.91-1.7-9.1-1.32c-1.07,0.12-1.83,0.49-2.77,0.78c-1.68,0.52-3.63,1.03-5.48,1.36c-1.52,0.27-3.05,0.14-4.47,0.04
       c-1.75-0.12-3.23-0.25-5.07,0.18c-3.41,0.8-6.28,1.5-9.92,0.89c-1.85-0.31-3.43-1.2-5.22-1.62c-2.33-0.55-5.08-0.82-7.17-0.98
       c-2.94-0.23-5.01-0.65-7.83,0c-3.31,0.76-6.43,2.31-9.99,3.03c-0.79,0.16-1.59,0.28-2.4,0.35c-5.71,0.48-10.29-0.99-15.61-2.69
       c-2.97-0.94-5.91-1.69-9.1-1.32c-1.07,0.12-1.83,0.49-2.77,0.78C35.8,1.41,33.84,1.92,32,2.25c-1.52,0.27-3.05,0.14-4.47,0.04
       c-1.75-0.12-3.23-0.25-5.07,0.18c-3.41,0.8-6.28,1.5-9.92,0.89C10.75,3.05,9.37,2.3,7.6,1.8v0.85c1.69,0.75,3.45,1.41,5.42,1.75
       C17,5.08,20.15,4.34,23.87,3.43"/>
    <path class="st1" d="M26.69,5.36c1.24-0.34,2.39-0.52,3.6-0.68c1.05-0.14,2.13-0.26,3.21-0.45c1.35-0.23,2.75-0.47,4.11-0.64
       c0.72-0.1,1.41-0.23,2.18-0.21c3.35,0.07,5.95,0.94,8.93,1.91c5.41,1.75,10.34,2.75,15.97,1.92c0.79-0.12,1.59-0.27,2.39-0.47
       c3.39-0.81,6.69-2.12,10.08-2.98c2.71-0.68,5.26-0.94,8.09-0.85c2.25,0.08,4.71,0.46,7.12,1.33C94.77,5.1,96.33,5.99,99,6.47
       c4.68,0.84,8.41,0.07,12.73-1.11c1.24-0.34,2.39-0.52,3.6-0.68c1.05-0.14,2.13-0.26,3.21-0.45c1.35-0.23,2.75-0.46,4.11-0.64
       c0.72-0.1,1.41-0.23,2.18-0.21c3.35,0.08,5.95,0.95,8.93,1.91c5.41,1.75,10.34,2.75,15.97,1.92c0.79-0.11,1.59-0.27,2.39-0.46
       c3.39-0.81,6.69-2.12,10.08-2.98c2.71-0.68,5.26-0.94,8.09-0.85c2.25,0.08,4.7,0.45,7.1,1.32c2.39,0.87,3.97,1.76,6.65,2.25
       c4.68,0.84,8.41,0.07,12.73-1.11c1.24-0.34,2.39-0.52,3.6-0.68c1.05-0.14,2.13-0.26,3.21-0.45c1.35-0.23,2.75-0.46,4.11-0.64
       c0.72-0.09,1.41-0.23,2.18-0.21c3.35,0.08,5.95,0.95,8.93,1.91c5.41,1.75,10.34,2.75,15.97,1.92c0.79-0.12,1.59-0.27,2.39-0.46
       c3.39-0.81,6.69-2.12,10.08-2.98c2.71-0.68,5.26-0.94,8.09-0.85c2.34,0.08,4.9,0.48,7.39,1.43V3.48c-2.46-0.83-5.12-1.2-7.41-1.31
       c-2.87-0.14-5.26-0.11-8.01,0.56c-3.37,0.82-6.61,2.21-10.05,3c-0.8,0.18-1.6,0.33-2.4,0.43C229.2,6.88,224.39,5.72,219,3.99
       c-2.97-0.96-5.69-1.9-8.99-1.71c-0.87,0.05-1.58,0.25-2.38,0.4c-1.46,0.29-3.05,0.62-4.56,0.88c-1.23,0.21-2.46,0.25-3.63,0.31
       c-1.39,0.07-2.65,0.14-4.09,0.51c-4.03,1.04-7.46,1.8-11.79,1.04c-2.52-0.44-3.97-1.33-6.18-2.04c-2.37-0.76-4.92-1.1-7.11-1.21
       c-2.87-0.14-5.26-0.11-8.01,0.56c-3.37,0.82-6.61,2.21-10.06,3c-0.8,0.18-1.6,0.33-2.39,0.43c-5.65,0.72-10.47-0.44-15.85-2.17
       c-2.97-0.96-5.69-1.9-8.99-1.71c-0.87,0.05-1.58,0.25-2.38,0.4c-1.46,0.29-3.05,0.62-4.56,0.88c-1.23,0.22-2.46,0.25-3.63,0.31
       c-1.39,0.07-2.65,0.14-4.09,0.51c-4.03,1.04-7.46,1.8-11.79,1.04C96,4.99,94.56,4.1,92.35,3.39c-2.37-0.76-4.92-1.1-7.11-1.21
       c-2.87-0.14-5.26-0.11-8.01,0.56c-3.37,0.82-6.61,2.21-10.05,3c-0.8,0.18-1.6,0.33-2.39,0.43c-5.65,0.72-10.47-0.44-15.85-2.18
       c-2.97-0.96-5.69-1.9-8.99-1.71c-0.87,0.05-1.58,0.24-2.38,0.4C36.1,2.98,34.52,3.3,33,3.57c-1.23,0.21-2.46,0.25-3.63,0.31
       c-1.39,0.07-2.65,0.14-4.09,0.51c-4.03,1.04-7.46,1.8-11.79,1.04C11.35,5.06,9.43,4.32,7.6,3.49v0.85
       c1.98,0.92,4.05,1.72,6.37,2.14C18.65,7.32,22.38,6.54,26.69,5.36"/>
    <path class="st0" d="M66.98,7.72C60.4,9.39,54.71,8.58,48.51,6.57c-2.98-0.97-5.48-2.02-8.87-2.1c-4.16-0.1-7.75,0.74-11.53,1.86
       c-4.59,1.36-8.64,2.11-13.67,1.19C11.95,7.06,9.73,6.18,7.6,5.18v0.98C7.82,6.21,8.05,6.3,8.27,6.35c0.79,0.21,1.66,0.44,2.5,0.7
       c1.66,0.51,3.32,1.1,5.14,1.37c4.88,0.71,8.71,0.07,13.08-1.26c3.6-1.1,7.03-1.93,11.01-1.89c3.32,0.03,5.83,0.98,8.76,1.89
       c2.92,0.9,5.73,1.58,8.55,1.9c3.08,0.34,6.2,0.25,9.58-0.52c2.55-0.58,5.1-1.43,7.66-2.21c5.71-1.74,11.54-2.36,17.83-0.26
       c0.3,0.1,0.61,0.2,0.92,0.28c0.79,0.21,1.66,0.44,2.5,0.7c1.66,0.51,3.32,1.1,5.14,1.37c4.88,0.71,8.71,0.07,13.08-1.26
       c3.6-1.1,7.02-1.93,11.01-1.89c3.32,0.03,5.82,0.98,8.76,1.89c2.92,0.9,5.73,1.58,8.55,1.9c3.08,0.34,6.2,0.25,9.58-0.52
       c2.55-0.58,5.1-1.43,7.66-2.21c5.69-1.73,11.5-2.36,17.76-0.29c0.33,0.11,0.66,0.22,1,0.31c0.79,0.21,1.66,0.44,2.5,0.7
       c1.66,0.51,3.32,1.1,5.14,1.37c4.88,0.71,8.71,0.07,13.08-1.26c3.6-1.1,7.03-1.93,11.01-1.89c3.32,0.03,5.83,0.98,8.76,1.89
       c2.92,0.9,5.73,1.58,8.55,1.9c3.08,0.34,6.2,0.25,9.58-0.52c2.55-0.58,5.1-1.43,7.66-2.21c5.79-1.77,11.7-2.38,18.09-0.17V5.18
       c-9.25-3.9-17.5,0.47-25.66,2.54c-6.58,1.67-12.27,0.86-18.47-1.16c-2.98-0.97-5.48-2.02-8.87-2.1c-4.16-0.1-7.75,0.74-11.53,1.86
       c-4.59,1.36-8.64,2.11-13.67,1.19c-2.81-0.51-4.64-1.46-7.17-2.47c-9.11-3.65-17.26,0.64-25.32,2.68
       c-6.58,1.67-12.27,0.86-18.47-1.16c-2.98-0.97-5.48-2.02-8.87-2.1c-4.16-0.1-7.75,0.74-11.53,1.86c-4.59,1.36-8.64,2.11-13.67,1.19
       c-2.84-0.52-4.69-1.49-7.24-2.5C83.15,1.41,75.02,5.68,66.98,7.72"/>
    </g>
    </svg>;
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
      <Container className="quiz-container" fluid>
        <Navigation />
        {this.props.isUserLogged ?  <Row noGutters>
          <Col>
            <h1 className="quiz-title">{title}</h1>
            <h6 className="quiz-desc">{desc}</h6>
            {/* <img src="../../../../assets//img/val-galben.svg" style={{width:"100%", height:"100%", top:"700px"}} className="yellow-wave"/> */}

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
        </Row> : <Row noGutters> <Col>
        <h1 className="qtitle">{title}</h1>
            <h6 className="qdesc">Pentru a participa la chestionar si pentru a castiga, va rugam sa va creeati cont sau sa va logati!</h6>
        </Col>
          </Row>}
       
        <Row>
        {quizWave}
          <div className="q-footer">
          <Footer/>
          </div>
          </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
      // user: state.authentication.user,
      token: state.authentication.token,
      msg: state.authentication.msg,
      isUserLogged: state.authentication.isUserLogged,
      redirectLogin: state.authentication.redirectLogin
  }
}


export default withRouter(
  connect(mapStateToProps)
      (Quiz));

