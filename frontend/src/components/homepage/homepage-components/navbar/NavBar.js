import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Button, Row, Col, Container } from 'react-bootstrap';
import logo from "../../../../assets/img/logo_techir.png";
import './NavBar.css'
import Login from '../login/Login';
import Signup from '../signup/SignUp';
import SignUp from "../signup/SignUp";


import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { connect } from 'react-redux';
import * as loginIcon from '../../../../assets/img/login.png';
import * as logoutIcon from '../../../../assets/img/logout.png';
import * as signupIcon from '../../../../assets/img/make-account.png';

class Navigation extends React.Component {
    loginCounter = 0;
    signinCounter = 0;

    constructor(props) {
        super(props)
        this.state = {
            showMsg: true,
            isUserlogged: false,
            isShownLogin: false,
            isShownSignup: false
        }
        this.showLogIn = this.showLogIn.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
    }

    showLogIn(event) {
        event.preventDefault();

        this.setState({
            isShownLogin: !this.state.isShownLogin,
            isShownSignup: false,
        })

    }

    showSignUp(event) {
        event.preventDefault();

        this.setState({
            isShownSignup: !this.state.isShownSignup,
            isShownLogin: false

        })
    }

    toggleLogin = () => {
        console.log('do');
        this.loginCounter += 1;
        if (this.loginCounter % 2 === 0) {
            this.props.onClickLogin(false);
            console.log('open');
        } else if (this.counter % 2 !== 0) {
            this.props.onClickLogin(true);
            console.log('close');
        }
    }

    disconnectUser = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: "DELETE_LOGIN_SESSION", })

        localStorage.clear()

        this.props.history.push('/')

    }

    componentDidMount() {
        console.log(this.props.user);
    }

    showMsg = () => {
        setTimeout(() => {
            this.setState({
                showMsg: false
            })
        }, 3000);
    }

    render() {

        console.log(this.props)

        if (this.props.redirectLogin && this.state.isShownSignup) this.setState({
            isShownLogin: !this.state.isShownLogin,
            isShownSignup: false,
        })

        const isLoggedIn = this.state.isShownLogin;
        const isSignedUp = this.state.isShownSignup;
        let login;
        let signup;

        if (isLoggedIn) {
            login = <Login />;
        } else if (isSignedUp) {
            signup = <SignUp />
        }

        return (
            <Container fluid style={{ margin: 0, padding: 0 }}>
                <Row noGutters style={{ margin: 0, padding: 0 }}>
                    <Col>
                        <Navbar expand="lg" className="nav">
                            <Navbar.Brand >
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            {!this.props.isUserLogged ?
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="nav-items">
                                        <div className="nav-link one" onClick={this.showLogIn}><i>Conectare</i></div>
                                        <div className="nav-link two" onClick={this.showSignUp}><i>Creeaza cont</i></div>


                                    </Nav>
                                </Navbar.Collapse> :
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className=" nav-items">
                                        <Link className="nav-link one" onClick={this.disconnectUser}><i>Deconectare</i></Link>
                                    </Nav>
                                </Navbar.Collapse>
                            }
                        </Navbar>
                    </Col>
                </Row>
                <ReactCSSTransitionGroup
                    transitionName={'snackFade'}
                    transitionEnter={300}
                    transitionLeave={300}
                    transitionAppear={true}
                >
                    {this.state.showMsg &&
                        this.props.msg &&
                        <Col style={{ height: '30px', backgroundColor: 'black', position: 'absolute', zIndex: 10, color: 'white', textAlign: 'center', }}>
                            {this.showMsg()}
                            <div style={{ margin: '8px' }}>   {this.props.msg} </div>
                        </Col>}
                </ReactCSSTransitionGroup>

                <Row noGutters style={{ margin: 0, padding: 0 }}>
                    <Col>
                        <div className="logo-div">
                        <Link to="/"><img src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" id="logo-q" /></Link>
                        </div>
                    </Col>
                </Row>
                <Row noGutters style={{ margin: 0, padding: 0 }}>
                    <Col xs={6} sm={6} md={4} lg={4}>
                        {!this.props.isUserLogged && this.state.isShownLogin && !this.state.isShownSignup ? <Login /> : null}
                        {!this.props.isUserLogged && this.state.isShownSignup && !this.state.isShownLogin ? <SignUp /> : null}
                    </Col>
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
        (Navigation));



