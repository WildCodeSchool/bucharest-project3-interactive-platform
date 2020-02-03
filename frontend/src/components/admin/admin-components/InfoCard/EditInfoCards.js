import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'



class EditInfoCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nonExistentCategory: []

            // quizQuestion: "",
            // quizAns1: "",
            // quizAns2: "",
            // correctAns: "",
            // quizImgLink: "",
            // descText: "",
            // descLink: ""

        }
    }


    componentDidMount() {


        fetch("/authentication/categories/",
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            }).then(res => res.json())
            .then(res => {
                // console.log(res);

                this.setState({
                    descData: res
                })


            })
            .catch(err => console.log(`ERROR adminDesc-bk: ${err}`))


    }

    render() {
        const descriptions = this.state.descData ? this.state.descData : null;
        // console.log(descriptions)
        // const info = descriptions ? descriptions.text : null;
        // const link = descriptions ? descriptions.link : null;
        return (
            <Row className='info-cards'>
                {this.state.descData ? this.state.descData.map((data, index) =>
                    <Col>
                        <InfoCard data={data} index={index} key={index} className="card" />
                    </Col>

                ) : null
                }
            </Row>
        )
    }
}

export default withRouter(EditInfoCards);



