import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Question from "./Question";
import Navigation from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { connect } from 'react-redux';
import Maps from '../maps/Maps';
const quizWave = require('../../../../assets/img/val-galben.svg')


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
    if (localStorage.getItem('userToken') && localStorage.getItem('userIsLogged') === '1') {
        if (localStorage.getItem('userAccesLevel') === '1') {
            this.props.dispatch(
                {
                    type: "CREATE_LOGIN_SESSION",
                    user: {
                        id: localStorage.getItem('userId'),
                        email: localStorage.getItem('userEmail'),
                        acces_level: 1
                    },
                    token: localStorage.getItem('userToken'),
                    isUserLogged: true
                }
            )
            this.props.history.push("/admin")
        } else {
            this.props.dispatch(
                {
                    type: "CREATE_LOGIN_SESSION",
                    user: {
                        id: localStorage.getItem('userId'),
                        email: localStorage.getItem('userEmail'),
                    },
                    token: localStorage.getItem('userToken'),
                    isUserLogged: true
                }
            )
        }
    };
    
    fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/quizz", {
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

    fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/quiz-modal", {
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

    fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/q-title-desc", {
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
    const title = quizSomeInfo ? quizSomeInfo.title : null;
    const desc = quizSomeInfo ? quizSomeInfo.desc : null;
    const quiz = this.state.quizzez ? this.state.quizzez[0] : null;
    const question = quiz ? quiz.question : null;
    const image = quiz ? quiz.image_link : null;
    const answer1 = quiz ? quiz.answer1 : null;
    const answer2 = quiz ? quiz.answer2 : null;
    const correct = quiz ? quiz.correct : null;
    const modal = this.state.modalData ? this.state.modalData : null;

    return (
      <div id="quiz-container">
        <div className="nav-q">
        <Navigation />
        </div>
        {this.props.isUserLogged ? 
         <div className='actualQuizz' style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <h1 className="quiz-title" style={{textAlign:'center'}}>{title}</h1>
     
            <Question
              question={question}
              image={image}
              answer1={answer1}
              answer2={answer2}
              correct={correct}
              modalSuccessDescription={this.state.modalData.successDesc}
              modalSuccessLastMessage={this.state.modalData.successLastMessage}
              modalSuccessTitle={this.state.modalData.successTitle}
              modalFailureTitle={this.state.modalData.failureTitle}
              modalFailureDescription={this.state.modalData.failureDesc}
              modalFailureLastMessage={this.state.modalData.failureLastMessage} 
              desc={desc}
            /> 
            <div className="mapq">
                    <Maps />
                </div>  
          </div>
     :
        <div className="quiz-no-container">
        <h1 className="qtitle">{title}</h1>
            <h6 className="qdesc">Pentru a participa la chestionar si pentru a castiga, va rugam sa va creeati cont sau sa va logati!</h6>
            </div>
       }
   
          {/* <Footer/> */}
       
      </div>
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

