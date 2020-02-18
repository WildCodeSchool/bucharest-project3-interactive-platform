import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import data from '../info_modal/my_fake_db';

import * as img from '../../../../assets/img/background.png';
import * as mobile from '../../../../assets/img/Mobile.png';
import * as check from '../../../../assets/img/hook-1425312.png';



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
            signup: false,
            dataDesc: [],
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
        // this.retrieveAndSetAboutFaceInfo();
        // this.retrieveBlogLink();
        fetch('https://infinite-hamlet-17639.herokuapp.com/authentication/description/',
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            }).then(res => res.json())
            .then(res => {
                this.setState({
                    dataDesc: res
                })
            }).catch(err => console.log(`ERROR quizData-bk: ${err}`));
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
    changeClass = () => {
        this.setState({
            isHovered: false
        })
    }

    render() {
        const contentClass = this.state.isHovered ? "hover-question" : "not-hovered-question";
        const moveOrNot = this.state.move === true ? "move-Gurl" : "gurlContainer";
        const descriptions = this.state.dataDesc ? this.state.dataDesc[0] : null;
        console.log(descriptions)
        const info = descriptions ? descriptions.text : null;
        const link = descriptions ? descriptions.link : null;
        console.log(info)
        console.log(link)

        console.log(this.props.categories);



        return (

            <div className="model">
                {/* <div className={moveOrNot}> */}
                    <img className="background" src={img} alt="background" />
                    <img className="mobile" src={mobile} alt="background" />
                    {/* {this.props.categories ? this.props.categories.map((e, i) => {
                        return <div className={'spinner ' + e.category_name} key={i}
                            onMouseEnter={this.handleHover}
                            onMouseLeave={this.handleLeaveHover}
                        onClick={() => this.handleClick(e)}
                        >
                            <div className="multi-ripple">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    }) : null} */}
                
          

                {/* <div className='info-g-first-bttn' variant="outline-secondary">Pozitioneaza cursorul pe punctele de pe model pentru mai multe detalii</div>
                        <div className='info-g-second-bttn' variant="outline-secondary">Atinge punctele de pe model pentru mai multe detalii</div> */}
                <div className={contentClass} >
                    <button onClick={this.changeClass}><a href="#" class="close-thik"></a></button>
                    <img src={check} width="50px" height="50px" className="check" alt='check_img' />
                    <p className="hover-text">{info}</p>
                    <Button className="onhover-quiz-bttn" variant="outline-warning" onClick={this.prepareQuiz}>Participa si castiga</Button>
                    <Button className="onhover-findoutMore-bttn" variant="outline-warning" href={link}><span className="bttn-text">Afla detalii</span></Button>
                </div>

                </div>

        );
    }
}



export default withRouter(
    GirlModel);
