import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import * as brand_romanesc from '../../../../assets/img/brand-romanesc.png';
import * as produse_romanesti from '../../../../assets/img/produse-romanesti.png';



class Footer extends React.Component {
    render() {
        return (

            <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
                <Row noGutters>
                    <Col>
                        <div className="d-flex flex-column " id='footer' >
                            <footer className="footer">
                                <div className='contact'>
                                    <h6>SC TECHIRGHIOL FARMA COSMETICS SRL</h6>
                                    <p>Nr. ord. Reg. com./aut.: J13-1885-2012</p>
                                    <p>Cod inregistrare fiscala: RO30601045</p>
                                    <div>
                                        <hr id="f-line" style={{ backgroundColor: 'white' }} />
                                        <div className="footer-color"></div>
                                        <div className='footer-links'>
                                            <a href="https:anpc.ro/" className='anpc'>ANPC</a>
                                            <a href="#" className='politica-de-confidentialitate'>Politica de Confidentialitate</a>
                                        </div>
                                        <img src={brand_romanesc} className='brand-romanesc' alt="brand_romanesc" />
                                        <img src={produse_romanesti} className='produse-romanesti' alt="produse_romanesti" />
                                    </div>

                                </div>

                            </footer>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Footer;