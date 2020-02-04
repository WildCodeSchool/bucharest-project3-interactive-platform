import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import EditInfoCards from "./admin-components/InfoCard/EditInfoCards";
import QCards from './admin-components/quiz-cards/QCards';
import AdminNav from './admin-components/admin_nav/AdminNav';
import Maps from '../homepage/homepage-components/maps/Maps';
import Nav from '../homepage/homepage-components/navbar/NavBar';
import Footer from '../homepage/homepage-components/footer/Footer';
import Parteners from '../homepage/homepage-components/parteners/Parteners';
import SignUp from '../homepage/homepage-components/signup/SignUp';
import Login from '../homepage/homepage-components/login/Login';
import Quiz from '../homepage/homepage-components/quiz/Quiz';
class AdminPlatform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: false,
            quizCards: false
        }
    }
    componentDidMount() {
        Promise.all([
            fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/description', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json()),
            fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/quizz', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.json()),
        ])
            .then(res => {
                console.log(res)
                this.setState({
                    infoData: res[0],
                    quizzData: res[1]
                })
            }
            )
    }
    render() {
        // const infoCards = this.state.infoCards;
        // const quizCards = this.state.quizCards;
        // let QuizCards;
        // let InfoCards;
        // if (infoCards) {
        //     QuizCards = <EditInfoCards fetchData={{ ...this.state.infoCards }} />;
        // } else if (quizCards) {
        //     InfoCards = <QCards fetchData={{ ...this.state.quizCards }} />
        // }
        return (
            <div>
                <AdminNav fetchedDataQuiz={this.state.quizzData} fetchedInfo={this.state.infoDa} choose={this.showCards} />
            </div>
        )
    }
}

export default withRouter(AdminPlatform);