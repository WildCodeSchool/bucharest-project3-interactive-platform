import React from 'react'

class Distribution extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container fluid>
<Row>
            <div>
                <h3>Distributie nationala</h3>
                <div className="national">
                    <img src=""></img>
                    <img src=""></img>
                    <img src=""></img>
                </div>
                <p>Produsele Techir sunt distribuite national prin intermediul lanturilor de farmacii si magazinelor Catena, DM, Mega Image si Carturesti.</p>
                <p>In aceste locatii gasesti doar o selectie de produse din gamele Techir</p>
            </div>
            </Row>
            </Container>
        )
    }
}



export default Distribution;