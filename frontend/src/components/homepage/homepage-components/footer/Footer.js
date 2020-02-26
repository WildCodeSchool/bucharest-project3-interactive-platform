import React from 'react';
import * as miracol from '../../../../assets/img/miracolul-1.png'

class Footer extends React.Component {

    render() {
        return (
                <footer id="footer">
                    <div className="f-f">
                        <h5>CONTACT</h5>
                        <p>SC TECHIRGHIOL FARMA COSMETICS SRL<br />
                            Nr. ord. Reg. com./aut.: J13-1885-2012<br />
                            Cod inregistrare fiscala: RO30601045</p>
                        <p>Telefon: 0799 832 447 | Email: office@techir.ro</p>
                    </div>
                    <div className="s-f">
                        <img className="f-i" src={miracol}
                            alt="miracolul-vine-la-tine" />
                        <p style={{paddingTop: '33px'}}>
                            <i>TECHIR® este un proiect de suflet ce a luat nastere din dorinta de a valorifica resursele naturale neexploatate oferite de Lacul Techirghiol.</i>
                        </p>
                    </div>
                        <img  className="t-f" src={"https://techir.ro/wp-content/uploads/2019/11/slikafuter1.png"} alt="produse-romanesti" />
                </footer>
        );
    }
};


export default Footer;