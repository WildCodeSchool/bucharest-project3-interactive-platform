import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './AdminNav.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NavBar from '../../../homepage/homepage-components/navbar/NavBar';
import Footer from '../../../homepage/homepage-components/footer/Footer';
import EditInfoCards from "../InfoCard/EditInfoCards";
import QCards from '../quiz-cards/QCards';
import * as brand_romanesc from '../../../../assets/img/brand-romanesc.png';
import * as produse_romanesti from '../../../../assets/img/produse-romanesti.png';
class AdminNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoButton: false,
            quizzButton: false
        }
    }
    descbtnStyleActive = {
        backgroundColor: '#A9A9A9',
        color: '#696969'
    }
    descbtnStyleInactive = {
        backgroundColor: '#696969',
        color: 'white'
    }
    quizbtnStyleActive = {
        backgroundColor: '#A9A9A9',
        color: '#696969'
    }
    quizbtnStyleInactive = {
        backgroundColor: '#696969',
        color: 'white'
    }
    handleDescription = (e) => {
        e.preventDefault();
        this.setState({
            infoButton: !this.state.infoButton,
            quizzButton: false
        })
    }
    handleQuiz = (e) => {
        e.preventDefault();
        this.setState({
            quizzButton: !this.state.quizzButton,
            infoButton: false

        })
    }
    render() {


        console.log(this.props.fetchedData);
        
        return (
            <div> 
                <NavBar />
                <Row className="admin-nav">
                    <Col className='nav-container'>
                        <Button variant="secondary" size="lg"
                            style={this.state.descriptionBttnState ? this.descbtnStyleActive : this.descbtnStyleInactive}
                            className="admin-desc-bttn custom-btn"
                            onClick={this.handleDescription}
                        >
                            Descrieri
                        </Button>
                        <Button variant="secondary" onClick={this.handleQuiz}
                            style={this.state.quizBttnState ? this.quizbtnStyleActive : this.quizbtnStyleInactive}
                            size="lg" className="admin-quiz-bttn custom-btn"
                        >
                            Chestionar
                        </Button>
                    </Col >
                </Row >
                {this.state.infoButton ? <EditInfoCards fetchData={{ ...this.props.fetchedInfo }} /> : null}
                {this.state.quizzButton ? <QCards fetchData={{ ...this.props.fetchedQuiz}} /> : null}
            </div>
        )
    }
}
export default withRouter(AdminNav);