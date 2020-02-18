import React from 'react';
import { Container, Row } from 'react-bootstrap';


class Distribution extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                        <h3 className="national-dis-title">DISTRIBUTIE NATIONALA</h3>
                        <div className="distribution">
                            <a href="https://www.catena.ro" target="_blank">
                                <img className="n-partener catena"  src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_289,h_86/https://techir.ro/wp-content/uploads/2020/01/farmacii1.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_289,h_86/https://techir.ro/wp-content/uploads/2020/01/farmacii1.png" alt="" />
                            </a>
                            <a href="https://www.dm-drogeriemarkt.ro/" target="_blank">
                                <img  className="n-partener dm"  src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_142,h_94/https://techir.ro/wp-content/uploads/2020/01/farmacii2.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_142,h_94/https://techir.ro/wp-content/uploads/2020/01/farmacii2.png" alt="" />                                </a>
                            <a href="https://www.mega-image.ro/" target="_blank">
                                <img className="n-partener"  src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_171/https://techir.ro/wp-content/uploads/2020/01/farmacii3.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_171/https://techir.ro/wp-content/uploads/2020/01/farmacii3.png" alt="" 
                                data-srcset="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_171/https://techir.ro/wp-content/uploads/2020/01/farmacii3.png 171w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_150/https://techir.ro/wp-content/uploads/2020/01/farmacii3-150x150.png 150w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100/https://techir.ro/wp-content/uploads/2020/01/farmacii3-100x100.png 100w" data-sizes="(max-width: 171px) 100vw, 171px" sizes="(max-width: 171px) 100vw, 171px" srcset="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_171/https://techir.ro/wp-content/uploads/2020/01/farmacii3.png 171w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_150/https://techir.ro/wp-content/uploads/2020/01/farmacii3-150x150.png 150w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_100/https://techir.ro/wp-content/uploads/2020/01/farmacii3-100x100.png 100w" />
                            </a>
                            <a href="https://carturesti.ro/" target="_blank">
                                <img className="n-partener carturesti"  src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_410/https://techir.ro/wp-content/uploads/2020/01/farmacii4.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_410/https://techir.ro/wp-content/uploads/2020/01/farmacii4.png" alt="" data-srcset="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_410/https://techir.ro/wp-content/uploads/2020/01/farmacii4.png 410w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300/https://techir.ro/wp-content/uploads/2020/01/farmacii4-300x56.png 300w" data-sizes="(max-width: 410px) 100vw, 410px"  srcset="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_410/https://techir.ro/wp-content/uploads/2020/01/farmacii4.png 410w, https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_300/https://techir.ro/wp-content/uploads/2020/01/farmacii4-300x56.png 300w" />
                            </a>
                        </div>
                        <p className="first-national-desc">Produsele Techir sunt distribuite national prin intermediul lanturilor de farmacii si magazinelor Catena, DM, Mega Image si Carturesti. In aceste locatii gasesti doar o selectie de produse din gamele Techir.</p>
                        </React.Fragment>
        )
    }
}



export default Distribution;