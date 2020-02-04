import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

class EditInfoCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizData : [],
            descData :[]
        }
    }
    


    
    render() {
        const data = this.props.fetchData;
        const descriptions = this.state.descData ? this.state.descData: null;
        console.log(descriptions)
        // const info = descriptions ? descriptions.text : null;
        // const link = descriptions ? descriptions.link : null;
        return (
            <Row className='info-cards'>
                {data.map((data, index) => {
                    return (
                        <Col>
                            <InfoCard {...data} key={index} className="card" />
                        </Col>
                    )
                })}
            </Row>
        )
    }
}
export default withRouter(EditInfoCards);