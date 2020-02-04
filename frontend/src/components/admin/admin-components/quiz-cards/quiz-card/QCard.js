import React from 'react';
import { Col, Card, FormControl, Button, InputGroup } from 'react-bootstrap';
class QCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            Qno: "",
            question: "",
            firstAns: "",
            secondAns: "",
            imgLink: "",
            correct: this.props.correct
        }
    }
    handleAdminInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }
    saveQuizQ = () => {
        console.log(this.state.imgLink + ";" + this.state.firstAns + ";" + this.state.secondAns + ";" + this.state.question + ";")
        fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/description/", {
            method: "PUT",
            headers: new Headers({
              "Content-Type": "application/json"
            })
          })
            .then(req => {
                req.body = {
                    text: this.state.descOne,
                    link: this.state.link
                }
            })
            .catch(err => console.log(`ERROR adminDesc-bk: ${err}`));
     
    }
    render() {

        console.log(this.props.fetchData);
        
        return (
            <Col className='card-container'>
                <Card style={{ width: '24rem', height: '29rem' }}>
                    <Card.Body>
                        <Card.Title>Categoria aleasa: {this.props.category}.</Card.Title>
                        <FormControl
                            className="ac-question"
                            placeholder={this.props.question}
                            aria-label="Question"
                            aria-describedby="basic-addon1"
                            name="question"
                            value={this.props.question}
                            onChange={(event) => this.handleAdminInput(event)}
                            as="textarea" rows="3"
                        />
                    </Card.Body>
                    <InputGroup className="mb-3  ac-f-ans">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder={this.props.answer1}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="firstAns"
                            value={this.state.firstAns}
                            onChange={(event) => this.handleAdminInput(event)}
                        />  </InputGroup>
                    <InputGroup className="mb-3  ac-s-ans">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder={this.props.answer2}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="secondAns"
                            value={this.state.secondAns}
                            onChange={(event) => this.handleAdminInput(event)}
                        /></InputGroup>
                    <Card.Title className="q-c-img-title">Link imagine:</Card.Title>
                    <FormControl
                        className="ac-img-src"
                        placeholder={this.props.image}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="imgLink"
                        value={this.state.imgLink}
                        onChange={(event) => this.handleAdminInput(event)}
                    />
                    <Card.Body>
                        <Button variant="outline-dark" className="mySaveCardQuiz-bttn" style={{width: "190px"}} type="submit" onClick={this.saveQuizQ}>Salveaza</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default QCard;