import React from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';



class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSuccess: false,
            showFailure: false,
            correct: this.props.correct
        }
    }

    setShowSuccess(bool) {
        this.setState({
            showSuccess: bool
        })
    }

    handleSuccessClose = () => {
        this.setShowSuccess(false);
    }


    handleSuccessShow = () => {
        this.setShowSuccess(true)
    }

    setShowFailure(bool) {
        this.setState({
            showFailure: bool
        })
    }

    handleFailureClose = () => {
        this.setShowFailure(false)
        // this.props.history.push('/');
    }


    handleFailureShow = () => {
        this.setShowFailure(true)
    }

    render() {
        return (
            <div className="quiz-q-container">

                <h3 className="q-question">
                    {this.props.question}
                </h3>

                <img
                    className="q-img"
                    src={this.props.image}
                    alt="question"
                    width="250px"
                    height="250px"
                >
                </img>

                <div className="questions-container">
                    <Button
                        variant={this.state.showSuccess ? "success" : "outline-dark"}
                        className="q-first-ans"
                        onClick={this.handleSuccessShow}
                        size="lg"
                        block
                    >
                        {this.props.answer1}
                    </Button>

                    <Button
                        variant={this.state.showFailure ? "danger" : "outline-dark"}
                        onClick={this.handleFailureShow}
                        className="q-second-ans"
                        size="lg"
                        block
                    >
                        {this.props.answer2}
                    </Button>
                    {/* <QuizModal show={this.state.showSuccess} handleClose={this.handleSuccessClose}
                    title={this.props.modalSuccessTitle}  description={this.props.modalSuccessDescription}
                    lastMessage={this.props.modalSuccessLastMessage} 
                    />
                     <QuizModal show={this.state.showFailure} handleClose={this.handleFailureClose}
                    title={this.props.modalFailureTitle}  description={this.props.modalFailureDescription}
                    lastMessage={this.props.modalFailureLastMessage} 
                    /> */}
                    <Modal className='modal'
                        show={this.state.showSuccess}
                        onHide={this.handleSuccessClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title >
                               <span className="modal-congrats">Felicitari! </span> 
                            <br/> 
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
                            />
                        </Modal.Footer>

                    </Modal>

                    <Modal className='modal'
                        show={this.state.showFailure}
                        onHide={this.handleFailureClose}
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
                            <img className="modal-logo" src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" alt="logo" />
                            
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        )
    }
}


export default Question;
