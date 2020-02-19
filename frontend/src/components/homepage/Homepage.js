import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Maps from './homepage-components/maps/Maps';
import Navigation from './homepage-components/navbar/NavBar';
import Quiz from './homepage-components/quiz/Quiz';
import Footer from './homepage-components/footer/Footer';
import GirlModel from './homepage-components/Gurl/GirlModel';
import Parteners from './homepage-components/parteners/Parteners';
import Distribution from './homepage-components/national-distribution/Distribution';

import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage-components/navbar/NavBar.css';
import './homepage-components/footer/Footer.css';
import './homepage-components/login/login.css';
import './homepage-components/quiz/quiz.css';
import './homepage-components/parteners/Parteners.css';
import './homepage-components/Gurl/GirlModel.css';
import './homepage-components/signup/SignUp.css';
import './homepage-components/maps/Maps.css';
import './homepage-components/Gurl/Pulse.css';
import './homepage-components/national-distribution/Distribution.css'
// import * as wave1  from '../../assets/img/val-galben.png';
import AdminPlatform from '../admin/AdminPlatform';
import { connect } from 'react-redux';

const wave1 = require('../../assets/img/val-galben.svg');
const wave2 = require('../../assets/img/val-galben.svg');
const wave3 = require('../../assets/img/val-galben.svg');

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moveToTheRight: false,
            showLogin: false,
            showSignup: false
        }
    }

    toggleMoving = (param) => {
        if (param === 'login') {
            this.setState({ moveToTheRight: true, showLogin: true, showSignup: false });
        } else if (param === 'signup') {
            this.setState({ moveToTheRight: true, showLogin: false, showSignup: true });
        } else if (param === false) {
            this.setState({ moveToTheRight: false });
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
        // localStorage.getItem('userToken').length > 10 &&
        // localStorage.getItem('userIsLogged') === '1'&&
        // localStorage.getItem('userAccesLevel') === '1'&&
        // this.props.history.push("/admin")

        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/categories', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(res => this.props.dispatch(
                {
                    type: "SET_CATEGORIES",
                    categories: res
                }
            ))
    }

    render() {
        const showLogin = this.state.showLogin;
        const showSignup = this.state.showSignup;

        return (
<div className="homepage-container">               <Navigation onClickLogin={this.toggleMoving} categories={this.state.categories} onClickSignup={this.toggleMoving} loginState={showLogin} signupState={showSignup} />
                <GirlModel moveGirl={this.state.moveToTheRight} categories={this.props.categories} loginState={showLogin} signupState={showSignup} />

                <Maps />
                <img src={wave1} className="wave1" alt="techir-wave" />

                <Distribution />
                <img src={wave2} className="wave2" alt="techir-wave" />
                <Parteners />
                {/* <img src={wave3} className="wave3" alt="techir-wave" /> */}

                <Footer />

                </div> 
        )
    }
}


const mapStateToProps = state => {
    return {
        categories: state.authentication.categories
    }
}

export default connect(mapStateToProps)(Homepage)
