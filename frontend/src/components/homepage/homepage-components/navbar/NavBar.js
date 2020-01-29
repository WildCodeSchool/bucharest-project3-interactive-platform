import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from "../../../../assets/img/logo_techir.png";
import './NavBar.css'
import Login from '../login/Login';
import Signup from '../signup/SignUp';
import SignUp from "../signup/SignUp";


class Navigation extends React.Component {
    loginCounter = 0;
    signinCounter = 0;

    constructor(props) {
        super(props)
        this.state = {
            isShownLogin: false,
            isShownSignup: false
        }
        this.showLogIn = this.showLogIn.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
    }


    showLogIn(event) {
        event.preventDefault();
        this.loginCounter += 1;
        if (this.loginCounter % 2 === 0) {
            this.props.onClickLogin('login');
        } else if (this.loginCounter % 2 !== 0) {
            this.props.onClickLogin(false);
        }
        this.setState({
            isShownLogin: !this.state.isShownLogin,

        })

    }
    showSignUp(event) {
        event.preventDefault();
        this.signinCounter += 1;
        if (this.signinCounter % 2 === 0) {
            this.props.onClickSignup('signup');
        } else if (this.signinCounter % 2 !== 0) {
            this.props.onClickSignup(false);
        }
        this.setState({
            isShownSignup: !this.state.isShownSignup

        })
    }

    render() {
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
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand ><a href="https://wildcodeschool.github.io/bucharest-project3-interactive-platform"><img src={logo} alt="techir-logo" className="logo-t"></img></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-items">
                            <Link className="nav-link" onClick={this.showLogIn}>Conectare</Link>
                            <Link className="nav-link" onClick={this.showSignUp}>Creeaza cont</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* {login}
                {signup} */}
            </div>
        );
    }
}


export default Navigation;



    // toggleLogin = () => {
    //     this.loginCounter += 1;
    //     if(this.loginCounter % 2 === 0) {
    //         this.props.onClickLogin(false);
    //     } else if(this.counter % 2 !== 0) {
    //         this.props.onClickLogin(true);
    //     }
    // }