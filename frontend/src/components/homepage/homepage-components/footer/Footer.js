import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import * as brand_romanesc from '../../../../assets/img/brand-romanesc.png';
import * as produse_romanesti from '../../../../assets/img/produse-romanesti.png';



class Footer extends React.Component {
    render() {
        return (

            <React.Fragment>
                        <footer id="footer">
                            <div className="f-f">
                                <h5>CONTACT</h5>
                                <p>SC TECHIRGHIOL FARMA COSMETICS SRL<br />
                                    Nr. ord. Reg. com./aut.: J13-1885-2012<br />
                                    Cod inregistrare fiscala: RO30601045</p>
                                <p>Telefon: 0799 832 447 | Email: office@techir.ro</p>
                            </div>
                            <div className="s-f">
                                <img className="f-i" src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_166,h_93/https://techir.ro/wp-content/uploads/2019/11/miracolul-1.png" alt="miracolul-vine-la-tine"/>
                                <p><i>TECHIR® este un proiect de suflet ce a luat nastere din dorinta de a valorifica resursele naturale neexploatate oferite de Lacul Techirghiol.</i></p>
                            </div>
                            <div className="t-f">
                                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_266,h_147/https://techir.ro/wp-content/uploads/2019/11/slikafuter1.png" alt="produse-romanesti"/>
                            </div>
                        </footer>
                 
                        </React.Fragment>
        );
    }
}


export default Footer;