import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleDescOne = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleLink = event => {
    this.setState({
      link: event.target.value
    });
  };

  hanndleSubmit = () => {
    console.log(this.state.imgLink + ";" + this.state.firstAns + ";" + this.state.secondAns + ";" + this.state.question + ";")
    fetch(`https://infinite-hamlet-17639.herokuapp.com/authentication/description/${this.props.category.category_id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + this.props.token
      }),
      body: JSON.stringify({
        desctext: this.state.text,
        desclink: this.state.link
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(`ERROR adminDesc-bk: ${err}`));

  }
  render() {
    console.log(this.props.token);
    
    return (
      <Card style={{ width: "18rem", borderColor: '#FFBF00'}}>
        <Card.Body>
          <Card.Title>Categoria: {this.props.category.category_name}</Card.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descriere</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder={this.props.data.text}
                onChange={event => this.handleDescOne(event)}
                style={{ borderColor: '#FFBF00'}}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Link</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                placeholder={this.props.data.link}
                onChange={event => this.handleLink(event)}
                style={{ borderColor: '#FFBF00'}}
              />
            </Form.Group>
          </Form>
          <Button variant="outline-warning" style={{ width: "190px", borderRadius: '12px' }} onClick={this.hanndleSubmit}>
            Salveaza
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default InfoCard;