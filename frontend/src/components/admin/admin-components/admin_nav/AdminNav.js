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
        // backgroundColor: '#A9A9A9',
        backgroundColor: '#FFC30B',
        color: '#696969'
    }

    descbtnStyleInactive = {
        backgroundColor: '#FFC30B',
        color: 'white'
    }

    quizbtnStyleActive = {
        backgroundColor: '#FFC30B',
        color: '#696969'
    }

    quizbtnStyleInactive = {
        backgroundColor: '#FFC30B',
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
        console.log(this.props);
       
        return (
            <div className="admin-container">
                <NavBar />
                <div className='nav-container'>
                    <div className='nav-buttons'>
                        <Button variant="outline-warning" size="lg"
                            className="admin-desc-bttn custom-btn"
                            onClick={this.handleDescription}
                        >
                            Descrieri
                        </Button>
                        <Button variant="outline-warning" onClick={this.handleQuiz}
                            size="lg" className="admin-quiz-bttn custom-btn"
                        >
                            Chestionar
                        </Button>
                    </div >

                    {this.state.infoButton ? <EditInfoCards fetchData={{ ...this.props.fetchedDataInfo }} token={this.props.token} categories={this.props.categories} /> : null}
                    {this.state.quizzButton ? <QCards fetchData={{ ...this.props.fetchedDataQuiz }} token={this.props.token} categories={this.props.categories} /> : null}
                </div >
                <div id="footerQ">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default withRouter(AdminNav);