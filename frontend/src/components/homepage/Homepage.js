import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Maps from './homepage-components/maps/Maps';
import Navigation from './homepage-components/navbar/NavBar';
import Quiz from './homepage-components/quiz/Quiz';
import Footer from './homepage-components/footer/Footer';
import GirlModel from './homepage-components/Gurl/GirlModel';
import Parteners from './homepage-components/parteners/Parteners';

import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage-components/navbar/NavBar.css';
import './homepage-components/footer/Footer.css';
import './homepage-components/login/login.css';
import './homepage-components/quiz/quiz.css';
import './homepage-components/parteners/Parteners.css';
import './homepage-components/Gurl/GirlModel.css';
import './homepage-components/signup/SignUp.css';
import './homepage-components/maps/Maps.css';
import AdminPlatform from '../admin/AdminPlatform';

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

    render() {
        const showLogin = this.state.showLogin;
        const showSignup = this.state.showSignup;

        return (
            <div className="App">
                <Navigation onClickLogin={this.toggleMoving} onClickSignup={this.toggleMoving} loginState={showLogin} signupState={showSignup} />
                <GirlModel moveGirl={this.state.moveToTheRight} loginState={showLogin} signupState={showSignup} />
                <div style={{ height: '60vh' }}>
                    <Maps />
                </div>
                <Parteners />
                <Footer />
            </div>
        )
    }
}

export default Homepage;
