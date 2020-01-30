import React from 'react';
import * as data from './my_fake_db.json';
import { Container, Row, Col } from 'react-bootstrap';



class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         parteners: []
        }
    }

    componentDidMount() {
        fetch("/authentication/parteners",
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res =>
            res.json()
        ).then(res => {
            this.setState({
            parteners: res
        })})
        .catch(err => console.log(`ERROR parteners-bk: ${err}`))
    }
    //************************ */
    // WE NEED TO PUT THIS IN PARTENER.JSON (backend): 
    // {
    //     "name": "Plantini",
    //     "link": "https://www.plantini.ro/2-home?q=techir&tm_submit_search=",
    //     "logo": "https://www.plantini.ro/img/farmacia-cu-plante-logo-1487323412.jpg?size=300",
    //     "width": "100%",
    //     "height": "100%"
    // },
    //************************ */


    render() {
       const parteners = this.state.parteners;
       console.log(parteners);
        return (
        <Container fluid>
        <Row noGutters>
            <Col>
                <div className="parteners-container" >
                    {this.state.parteners.map(partener => (
                        <div className="partener">
                            <a href={partener.link}>
                                <img className="p-img" src={partener.logo} alt={partener.name}/>
                            </a>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    </Container>
        )
    }
}


export default Parteners;