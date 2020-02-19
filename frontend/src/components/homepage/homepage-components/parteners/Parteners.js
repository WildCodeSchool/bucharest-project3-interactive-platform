import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parteners: []
        }
    }

    componentDidMount() {
        fetch("https://infinite-hamlet-17639.herokuapp.com/authentication/parteners",
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
                })
            })
            .catch(err => console.log(`ERROR parteners-bk: ${err}`))
    }

    render() {
        const parteners = this.state.parteners;
        console.log(parteners);
        return (
            <React.Fragment>
                <h6 className="parteners-title">PARTENERI ONLINE</h6>
                <div className="parteners-container" >
                    {this.state.parteners.map((partener,i) => (
                        <div className="partener" key={i}>
                            <a href={partener.link}>
                                <img className="p-img" src={partener.logo} alt={partener.name} />
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>

        )
    }
}


export default Parteners;