import React from 'react';
import { Button, Modal, Row, Col, Form, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                if (fieldName === 'email') {
                    return (
                        <p key={i}>{'Email-ul'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'password') {
                    return (
                        <p key={i}>{'Parola'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'confirmPassword') {
                    return (
                        <p key={i}>{'Parolele'} {formErrors[fieldName]}</p>
                    )
                }

            } else {
                return '';
            }
        })}
    </div>;


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            confirmPasswordValid: false
        }
    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }

            , () => { this.validateField(name, value) })
        if (this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.confirmPassword !== '') {
            this.setState({
                confirmPasswordValid: true
            })
        }

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //an example regex from the Devise library.
                fieldValidationErrors.email = emailValid ? '' : ' nu este valid.';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' este prea scurta.';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'nu se potrivesc.';
                break;
            default:
                break;

        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/sign-up',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    fullname: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.props.dispatch({ type: 'REDIRECT_TO_LOGIN' })
            })
            .catch(error => console.log(error))
    }
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
        // console.log(`email: ${this.state.name}; emai: ${this.state.email}; password: ${this.state.password};`)
    }

    render() {
        return (
            <Container fluid>
                <Row >
                    <Col >
                        <div id='user-form' >
                            <Form onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <input type="text" className="form-control myinput"
                                        name="name" value={this.state.name}
                                        placeholder="Nume complet"
                                        onChange={(event) => this.handleUserInput(event)}
                                        style={{ borderColor: '#FFBF00'}} />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control myinput"
                                        name="email" value={this.state.email}
                                        placeholder="Email"
                                        onChange={(event) => this.handleUserInput(event)} 
                                        style={{ borderColor: '#FFBF00'}}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control myinput"
                                        name="password" value={this.state.password}
                                        placeholder="Parola"
                                        onChange={(event) => this.handleUserInput(event)}
                                        style={{ borderColor: '#FFBF00'}} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control mySignUp-input"
                                        name="confirmPassword" value={this.state.confirmPassword}
                                        placeholder="Confirma parola"
                                        onChange={(event) => this.handleUserInput(event)} 
                                        style={{ borderColor: '#FFBF00'}}/>
                                </div>
                                <Col>
                                    <Button variant="outline-warning" className="submit" type="submit"
                                        disabled={!this.state.formValid}  >
                                        Creeare cont
                    </Button>
                                </Col>
                            </Form>
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.formErrors} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(SignUp))