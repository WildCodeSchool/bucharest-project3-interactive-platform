import React from 'react';
import { Col, Card, FormControl, Button, InputGroup } from 'react-bootstrap';
class QCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleAdminInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }
    saveQuizQ = () => {
        console.log(this.state.imgLink + ";" + this.state.firstAns + ";" + this.state.secondAns + ";" + this.state.question + ";" + this.state.correct)
        fetch(`https://infinite-hamlet-17639.herokuapp.com/authentication/quizz/${this.props.category.category_id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + this.props.token
            }),
            body: JSON.stringify({
                question: this.state.question,
                answer1: this.state.firstAns,
                answer2: this.state.secondAns,
                correct_answer: this.state.correct,
                image_link: this.state.imgLink,
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(`ERROR adminDesc-bk: ${err}`));
    }
    render() {

        console.log(this.state, this.props);

        return (

                <Card style={{  borderColor: '#FFBF00' }}>
                    <Card.Body>
                        <Card.Title className="categ-card-title">Categoria: {this.props.category.category_name}.</Card.Title>
                        <FormControl
                            className="ac-question"
                            placeholder={this.props.data.question}
                            aria-label="Question"
                            aria-describedby="basic-addon1"
                            name="question"
                            style={{ borderColor: '#FFBF00' }}
                            onChange={(event) => this.handleAdminInput(event)}
                            as="textarea" rows="3"
                        />
                    </Card.Body>
                    <InputGroup className="mb-3  ac-f-ans">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={() => this.setState({ correct: 1 })} aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder={this.props.data.answer1}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="firstAns"
                            style={{ borderColor: '#FFBF00' }}
                            onChange={(event) => this.handleAdminInput(event)}
                        />  </InputGroup>
                    <InputGroup className="mb-3  ac-s-ans">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={() => this.setState({ correct: 2 })} aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder={this.props.data.answer2}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="secondAns"
                            style={{ borderColor: '#FFBF00' }}
                            onChange={(event) => this.handleAdminInput(event)}
                        /></InputGroup>
                    <Card.Title className="q-c-img-title">Link imagine:</Card.Title>
                    <FormControl
                        className="ac-img-src"
                        placeholder={this.props.data.image}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="imgLink"
                        style={{ borderColor: '#FFBF00' }}
                        onChange={(event) => this.handleAdminInput(event)}
                    />
                    <Card.Body>
                        <Button variant="outline-warning" className="mySaveCardQuiz-bttn" style={{  borderRadius: '12px' }} type="submit" onClick={this.saveQuizQ}>Salveaza</Button>
                    </Card.Body>
                </Card>
           
        )
    }
}
export default QCard;