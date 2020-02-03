import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { withRouter, BrowserRouter as Router } from 'react-router-dom';


import { connect } from 'react-redux'

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleDescOne = event => {
    this.setState({
      descOne: event.target.value
    });
  };
  handleLink = event => {
    this.setState({
      link: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      text: this.state.descOne,
      link: this.state.link,

      categoryCategoryId: this.props.data.category_id
    }
    console.log(this.props)

    fetch(`/authentication/description/${this.props.data.category_id}`, {
      method: "PUT",
      headers: {
        'Authorization': 'Bearer ' + this.props.token,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        desctext: "this.state.descOne",
        desclink: "this.state.link",
    }),
})
      .then((res) => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(`ERROR: ${err}`));
  }

  render() {
    // switch (this.props.data) {
    //   case 1:
    //     this.setState({ categ: "Fata" });
    //     break;
    //   case 2:
    //     this.setState({ categ: "Fata" });
    //   case 3:
    //     this.setState({ categ: "Fata" });
    //   case 4:
    //     this.setState({ categ: "Fata" });
    //   case 5:
    //     this.setState({ categ: "Fata" });
    //   case 6:
    //     this.setState({ categ: "Fata" });
    // }
    // console.log(this.props.data)

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Categoria: {this.props.data.category_name.toUpperCase()}</Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descriere</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder={this.props.data.category_name.toUpperCase()}
                onChange={event => this.handleDescOne(event)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Link</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder={this.props.data.category_name.toUpperCase()}
                onChange={event => this.handleLink(event)}
              />
            </Form.Group>

            <Button className='submit' type='submit' variant="outline-dark" style={{ width: "190px" }}>
              Save
          </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authentication.token,
  }
}

export default withRouter(connect(mapStateToProps)(InfoCard))

