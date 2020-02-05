import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import Quiz from '../quiz/Quiz';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
// import Adminplatform from '../../../admin/AdminPlatform';

import { connect } from 'react-redux';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            email: '',
            password: '',
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeEmail(e) {
        const email = e.target.value;
        this.setState({ email: email })
    }

    onChangePass(e) {
        const pass = e.target.value;
        this.setState({ password: pass })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/sign-in',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.props.dispatch(
                    {
                        type: "CREATE_LOGIN_SESSION",
                        user: res.user,
                        token: res.token,
                        msg: res.msg,
                        isUserLogged: true
                    }
                )

            })
            .catch(error => console.log(error))

    }

    render() {

        return (
            <Container fluid>
                {/* {this.props.isActive ? */}
                <Row>
                    <Col className='py-3'  >
                        <div id='user-form' >
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className="myinput" onChange={this.onChangeEmail} type="email" placeholder="Email" size='sm' />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control className="myinput" onChange={this.onChangePass} type="password" placeholder="Parola" size='sm' />
                                </Form.Group>
                                <Col>
                                    <Button variant="outline-secondary" className='submit' type="submit">
                                        <div className='login-text'>Logare</div>
                                    </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                </Row>
                {/* // : null} */}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        token: state.authentication.token,
        msg: state.authentication.msg,
        isUserLogged: state.authentication.isUserLogged
    }
}

export default withRouter(connect(mapStateToProps)(Login))