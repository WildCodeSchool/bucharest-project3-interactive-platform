import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from "../../../../assets/img/logo_techir.png";
import './NavBar.css'
import Login from '../login/Login';
import Signup from '../signup/SignUp';
import SignUp from "../signup/SignUp";

import { connect } from 'react-redux';



class Navigation extends React.Component {
    loginCounter = 0;
    signinCounter = 0;

    constructor(props) {
        super(props)
        this.state = {
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
        this.props.history.push('/')

    }

    render() {

        // console.log(this.props)
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
            <div>
                <Navbar bg="light" expand="lg" className="navigation">
                    <Navbar.Brand >
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {!this.props.isUserLogged ?
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto nav-items">
                                <div className="nav-link" onClick={this.showLogIn}>Conectare</div>
                                <div className="nav-link" onClick={this.showSignUp}>Creeaza cont</div>
                            </Nav>
                        </Navbar.Collapse> :
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto nav-items">
                                <Link className="nav-link" onClick={this.disconnectUser}>Deconectare</Link>
                            </Nav>
                        </Navbar.Collapse>
                    }
                </Navbar>
                <div className="logo-div">

                <Link to="/"><img src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" width="274px" height="105px" className="logo-q"/></Link>
                </div>
                {!this.props.isUserLogged && this.state.isShownLogin && !this.state.isShownSignup ? <Login /> : null}
                {!this.props.isUserLogged && this.state.isShownSignup && !this.state.isShownLogin ? <SignUp /> : null}
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
        (Navigation));



