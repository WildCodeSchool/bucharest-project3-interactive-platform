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

import { connect } from 'react-redux';


class AdminPlatform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoCards: false,
            quizCards: false
        }
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
        }
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

            fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/categories', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(res => res.json())
        ])
            .then(res => {

                this.setState({
                    infoData: res[0],
                    quizzData: res[1],
                    categories: res[2],
                })
            }
            )
    }
    render() {
        return (
            <div className="admin-container">
                <AdminNav fetchedDataQuiz={this.state.quizzData} categories={this.state.categories} token={this.props.token} fetchedDataInfo={this.state.infoData} choose={this.showCards} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        token: state.authentication.token,
        isUserLogged: state.authentication.isUserLogged,
    }
}

export default withRouter(connect(mapStateToProps)(AdminPlatform))
