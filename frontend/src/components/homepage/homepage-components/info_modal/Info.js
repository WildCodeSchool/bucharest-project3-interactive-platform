import React from 'react'
import { withRouter } from 'react-router-dom';
import * as data from './my_fake_db.json'
import { Button } from 'react-bootstrap';
import * as check from './../../static/img/hook-1425312.png'

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenCategory: "",
      activeLink: "",
      faceActive: false,
      hairActive: false,
      anticel: false,
      massage: false,
      category: "",
      info: "",
      blogLink: ""

    }
  }

  retrieveAndSetChosenCateg = () => {
    let categ = data.hover.category[1];
    this.setState({
      category: categ
    })
  };

  retrieveAndSetAboutFaceInfo = () => {
    let info = data.hover.face.one;
    this.setState({
      info: info
    })
  };

  retrieveBlogLink = () => {
    let blogLink = data.hover.face.linkBlog
    this.setState({
      blogLink: blogLink
    })
  };

  componentDidMount() {
    this.retrieveAndSetAboutFaceInfo();
    this.retrieveBlogLink();
  };

  handleHover = () => {
    this.setState({
      isHovered: true
    });
  };

  handleLeaveHover = () => {
    setTimeout(() => {
      this.setState({
        isHovered: false
      })

    }, 10000)
  };


  render() {
    const contentClass = this.state.isHovered ? "hover-question" : "not-hovered-question";
    return (
      <div className="info">
        <div id="building-line-1"></div>
        <button className="loading" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeaveHover}></button>
        <div className={contentClass}>

          <img src={check} width="50px" height="50px" className="check" alt='check_img' />
          <p className="hover-text">{this.state.info}</p>
          <Button className="onhover-quiz-bttn"
            variant="outline-danger" href={this.state.blogLink}>
            Participa si castiga
          </Button>
          <Button className="onhover-findoutMore-bttn"
            variant="outline-secondary" href={this.state.blogLink}>
            Afla detalii
            </Button>
        </div>
      </div>
    )
  }
};

export default withRouter(Info);