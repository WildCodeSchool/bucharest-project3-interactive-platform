import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import Question from './Question';
import Navigation from '../navbar/NavBar';
import Footer from '../footer/Footer';
import data from '../info_modal/my_fake_db';



class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSuccessTitle: ' Felicitari! Tocmai ai castigat un cupon de reducere!',
            modalSuccessDescription: 'Intra pe www.techir.ro si adauga in cos produsele tale preferate, iar la checkout-ul comenzii ai un loc special unde trebuie sa introduci codul de reducere, pentru a scadea valoarea voucher-ului din suma totala a cosului dvs.',
            modalSuccessLastMessage: 'Codul dvs. a fost trimis pe email.Va asteptam saptamana viitoare!',
            modalFailureTitle: ' Aww, mai mult noroc data viitoare!',
            modalFailureDescription: 'De data aceasta, nu a fost sa fie dar te asteptam saptamana viitoare sa mai incercam odata!',
            modalFailureLastMessage: 'Iti multumim ca iei parte parte impreuna cu noi in aceasta minunta experiata, cea de a cunoaste mama natura <3',
            question: "Care sunt proprietatile acestui sapun?",
            image: "http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png",
            answers: ["Actiune hranitoare", "Actiune exfolianta"],
            firstQuestionCorrect: true,
            secondQuestionCorrect: false
        }
    }

    render() {
        return (
            <Container fluid>
                <Navigation />
                <Row noGutters>
                    <Col>
                        <h1 className="quiz-title">Concurs Techir</h1>
                        <h6 className="quiz-desc">Participa, raspunzand la intrebare si poti castiga reduceri la produsele tale favorite.</h6>
                        <Question
                            question={this.state.question} image={this.state.image} answers={this.state.answers} discount={this.state.discount}
                            modalSuccessDescription={this.state.modalSuccessDescription} modalSuccessLastMessage={this.state.modalSuccessLastMessage}
                            modalFailureDescription={this.state.modalFailureDescription} modalFailureLastMessage={this.state.modalFailureLastMessage}
                        />

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Quiz);