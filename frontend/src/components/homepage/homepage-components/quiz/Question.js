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
                            <Modal.Title>
                                Felicitari! Tocmai ai castigat un cupon de reducere  pe <a href='http://www.techir.ro'>Techir.ro</a>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.props.modalSuccessDescription}

                            <p className="red-quiz-modal-message">
                                {this.props.modalSuccessLastMessage}
                            </p>
                            <div class="yeey">
                                <div class="before"></div>
                                <div class="after"></div>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <img
                                src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png"
                                alt="logo"
                                style={{ width: '200px', height: '120px' }}
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
                            <img src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" alt="logo" style={{ width: '200px', height: '120px' }} />
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        )
    }
}


export default Question;
