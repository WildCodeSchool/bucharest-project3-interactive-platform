import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categ: "",
      descOne:
        "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!",
      // descTwo: "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele din ingrediente narurale care te vor ajuta!"
      link:
        "http://www.techir.ro/blog-techir/proprietatile-miraculoase-ale-apei-si-namolului-din-lacul-techirghol/"
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
//   saveInfoCards = () => {
//     fetch("/authentication/description/", {
//         method: "PUT",
//         headers: new Headers({
//           "Content-Type": "application/json"
//         }),
//         body: JSON.stringify({"text":this.state.descOne, "link": this.state.link})
//     })
//         .then((res) => res.json())
//             .then(data => {
//                 console.log('Success:', data);
//             })
//         .catch(err => console.log(`ERROR: ${err}`));
//   }
  render() {
    // switch (this.props.description_id) {
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
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Categoria: {this.state.categ}</Card.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descriere</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.props.text}
                onChange={event => this.handleDescOne(event)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Link</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.props.link}
                onChange={event => this.handleLink(event)}
              />
            </Form.Group>
          </Form>
          <Button variant="outline-dark" style={{ width: "190px" }}>
            Save
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
export default InfoCard;