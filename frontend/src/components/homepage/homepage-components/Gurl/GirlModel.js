import React from 'react';
import * as img from '../../../../assets/img/Kool_Gurl.jpg';
import { Link, withRouter } from 'react-router-dom'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import data from '../info_modal/my_fake_db';

import * as check from '../../../../assets/img/hook-1425312.png'

const points = ['arm', 'leg', 'hair', 'face', 'hand', 'neck'];

class GirlModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: this.props.hidden,
            chosenCategory: "",
            activeLink: "",
            faceActive: false,
            hairActive: false,
            anticel: false,
            massage: false,
            category: "",
            info: "",
            blogLink: "",
            move: false,
            login: false,
            signup: false
        }
    }

    handleClick = (event) => {
        console.log(event)
    }

    retrieveAndSetChosenCateg = () => {
        let categ = data.quiz.hover.category[1];
        this.setState({
            category: categ
        })
    }
    retrieveAndSetAboutFaceInfo = () => {
        let info = data.quiz.hover.face.one;
        this.setState({
            info: info
        })
    }
    retrieveBlogLink = () => {
        let blogLink = data.quiz.hover.face.linkBlog
        this.setState({
            blogLink: blogLink
        })
    }
    componentDidMount() {
        this.retrieveAndSetAboutFaceInfo();
        this.retrieveBlogLink();
    }
    handleHover = () => {
        this.setState({
            isHovered: true
        });
    }
    handleLeaveHover = () => {
        setTimeout(() => {
            this.setState({
                isHovered: false
            })
        }, 19000)
    }

    toggleGirl = () => {
        const active = this.props.moveGirl
        if (active === true) {
            this.setState({
                move: true
            })
        } else this.setState({ move: false });
        if (this.props.loginState === true) {
            this.setState({
                login: true
            })
        } else this.setState({ login: false });
        if (this.props.signupState === true) {
            this.setState({
                login: true
            })
        } else this.setState({ singup: false });
    }

    componentWillReceiveProps() {
        this.toggleGirl();

    }

    prepareQuiz = () => {
        this.props.history.push('/quiz');
    }
    handleModal = () => {
        this.setState({
            isHovered: false
        })
    }
    render() {


        const contentClass = this.state.isHovered ? "hover-question" : "not-hovered-question";
        const moveOrNot = this.state.move === true ? "move-Gurl" : "gurlContainer";


        return (
            <Container fuild>
                <Row noGutters>
                    <Col>
                        <div className='model'>
                            {!this.state.isHidden ?
                                <div className={moveOrNot}>
                                    <img src={img} alt='model' className='gurl' />
                                    {points.map((e, i) => {
                                        return <div className={'spinner ' + e} key={i}
                                            onMouseEnter={this.handleHover}
                                            onMouseLeave={this.handleLeaveHover}
                                        // onClick={() => this.handleClick(e)}
                                        >

                                            <div className="multi-ripple">
                                                <div></div>
                                                <div></div>
                                            </div>

                                        </div>

                                    })}
                                </div>
                                : null}

                            <div className='info-g-first-bttn' variant="outline-secondary">Pozitioneaza cursorul pe punctele de pe model pentru mai multe detalii</div>
                            <div className='info-g-second-bttn' variant="outline-secondary">Atinge punctele de pe model pentru mai multe detalii</div>

                           
                            <div className={contentClass}>
                                <button className="close" onClick={this.handleModal}></button>
                                <img src={check} width="50px" height="50px" className="check" alt='check_img' />
                                <p className="hover-text">{this.state.info}</p>
                                <Button className="onhover-quiz-bttn" variant="outline-dark" onClick={this.prepareQuiz}>Participa si castiga</Button>
                                <Button className="onhover-findoutMore-bttn" variant="outline-secondary" href={this.state.blogLink}>Afla detalii</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default withRouter(GirlModel);
