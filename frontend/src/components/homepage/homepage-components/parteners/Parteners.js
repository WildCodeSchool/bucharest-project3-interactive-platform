import React from 'react';
import * as data from './my_fake_db.json';
import { Container, Row, Col } from 'react-bootstrap';



class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            megaImage: data.parteners.megaImage,
            carturesti: data.parteners.carturesti,
            farmaciaVital: data.parteners.farmaciaVital,
            eNatural: data.parteners.eNatural,
            camaraCuMerinde: data.parteners.camaraCuMerinde,
            stamDeVorba: data.parteners.stamDeVorba,
            allBoutique: data.parteners.allBoutique,
            tastingRomania: data.parteners.tastingRomania,
            iCosmetice: data.parteners.iCosmetice,
            elaPlant: data.parteners.elaPlant,
            byaPlantMed: data.parteners.byaPlantMed,
            floraFarm: data.parteners.floraFarm,
            redPixie: data.parteners.redPixie,
            getWell: data.parteners.getWell,
            natura4All: data.parteners.natura4All,
            avalon: data.parteners.avalon


        }
    }


    // retrieveParteners = () => {
    // }



    render() {
        return (
            <Container >
            <Row noGutters>
                <Col>
            <div className="parteners-container" >
                <h1 className="p-title">Parteneri Online</h1>
                <img className="p-mega" src={this.state.megaImage} alt="Mega" />
                <img className="p-carturesti" src={this.state.carturesti} alt="Carturesti" />
                <img className="p-vital" src={this.state.farmaciaVital} alt="farmacia-Vital" />
                <img className="p-enatural" src={this.state.eNatural} alt="e-Natural" />
                <img className="p-camara" src={this.state.camaraCuMerinde} alt="Camara-Cu-Merinde" />
                <img className="p-stam-de-vorba" src={this.state.stamDeVorba} alt="Stam-De-Vorba" />
                <img className="p-allboutique" src={this.state.allBoutique} alt="allBoutique" />
                <img className="p-tastingRO" src={this.state.tastingRomania} alt="Tasting-Romania" />
                <img className="p-icosmetice" src={this.state.iCosmetice} alt="iCosmetice" />
                <img className="p-ela" src={this.state.elaPlant} alt="ElaPlant" />
                <img className="p-bya" src={this.state.byaPlantMed} alt="ByaPlantMed" />
                <img className="p-flora" src={this.state.floraFarm} alt="FloraFarm" />
                <img className="p-pixie" src={this.state.redPixie} alt="RedPixie" />
                <img className="p-get-well" src={this.state.getWell} alt="GetWell" />
                <img className="p-natura" src={this.state.natura4All} alt="Natura4All" />
                <img className="p-avalon" src={this.state.avalon} alt="Avalon" />
            </div>
            </Col>
            </Row>
           </Container>
        )
    }
}


export default Parteners;