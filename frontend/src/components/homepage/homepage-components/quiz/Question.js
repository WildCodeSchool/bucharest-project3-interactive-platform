import React from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSuccess: false,
            showFailure: false,
            correct: this.props.correct
        }
    }
    handleSuccess = () => {
        this.setState({
            showSuccess: !this.state.showSuccess
        })
        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/quizz/answer',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.props.token
                }),
                body: JSON.stringify({
                    email: this.props.user.email,
                    user_id: this.props.user.id,
                }),
            })
            .then(res => res.json())
    }
    handleFailure = () => {
        this.setState({
            showFailure: !this.state.showFailure
        })
    }
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div style={{display:'flex'}}>
                <img style={{objectFit: 'cover',
width: '100%',
height:' 100%'}}
                    // className="q-img"
                  
                    src={this.props.image}
                    alt="question"
                />
                </div>
            
                <div style={{transform:'translateY(7%)'}}>
                    <h3 className='q-question' style={{marginBottom:'6%'}}>{this.props.desc}</h3>
                    <h3 className='q-question'>{this.props.question}</h3>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <Button
                        variant={this.state.showSuccess ? "success" : "outline-warning"}
                        onClick={this.handleSuccess}
                        size="lg"
                        block
                    >
                        {this.props.answer1}
                    </Button>
                    <Button
                        variant={this.state.showFailure ? "danger" : "outline-warning"}
                        onClick={this.handleFailure}
                        size="lg"
                        block
                    >
                        {this.props.answer2}
                    </Button>
                    </div>
                </div>
     
        
                    <Modal className='modal'
                        show={this.state.showSuccess}
                        onHide={this.handleSuccess}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title >
                                <span className="modal-congrats">Felicitari! </span>
                                <br />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <h6 className="title-message">
                            Tocmai <span className="bold">AI CASTIGAT UN CUPON DE REDUCERE </span> pe <a href='http://www.techir.ro'>Techir.ro</a> </h6>
                            <div className="modal-description-success">
                                {this.props.modalSuccessDescription}</div>
                            <div className="modal-lastm-success">
                                <p className="bold">
                                    {this.props.modalSuccessLastMessage}
                                </p></div>
                            <p className="modal-p">Va asteptam cu drag saptamana viitoare!</p>
                            <div class="yeey">
                                <div class="before"></div>
                                <div class="after"></div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <img
                                src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png"
                                alt="logo"
                                className="modal-logo"
                                width="274px" height="105px" 
                            />
                        </Modal.Footer>
                    </Modal>
                    <Modal className='modal'
                        show={this.state.showFailure}
                        onHide={this.handleFailure}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Aww, mai mult noroc data viitoare!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.props.modalFailureDescription}
                            <p className="red-quiz-modal-message">
                                {this.props.modalFailureLastMessage}
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <img className="modal-logo" src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" alt="logo" width="274px" height="105px"/>
                        </Modal.Footer>
                    </Modal>
            </div>
        )
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
export default connect(mapStateToProps)(Question);