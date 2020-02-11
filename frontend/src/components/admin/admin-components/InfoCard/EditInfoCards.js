import React from "react";
import { withRouter } from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoCard from "./EditInfoCard";
import './EditInfoCards.css'

const EditInfoCards = (props) => {
    console.log(props.token);

    return <Row className='info-cards'>
        {Object.keys(props.fetchData).map((item, index) =>
            <Col key={index}>
                <InfoCard data={{ ...props.fetchData[item] }} token={props.token} category={props.categories[index]} className="card" />
            </Col>)}
    </Row>
}

export default withRouter(EditInfoCards);