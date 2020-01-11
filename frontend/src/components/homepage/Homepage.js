import React from 'react';
import { BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';


import Maps from './homepage-components/maps/Maps';
import Login from './homepage-components/login/Login';
import Navigation from './homepage-components/navbar/NavBar';
import Quiz from './homepage-components/quiz/Quiz';
import Footer from './homepage-components/footer/Footer';
import GirlModel from './homepage-components/Gurl/GirlModel';
import Parteners from './homepage-components/parteners/Parteners';
import SignUp from './homepage-components/signup/SignUp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage-components/navbar/NavBar.css';
// import './homepage-components/info_modal/Info.css';
import './homepage-components/footer/Footer.css';
import './homepage-components/login/login.css';
import './homepage-components/quiz/quiz.css';
import './homepage-components/parteners/Parteners.css';


const markerData = [
    {
        title: 'marker1_title',
        name: 'Kathmandu City',
        position: {
            lat: 27.708259611420385,
            lng: 85.31940732779083
        }
    }, {
        title: 'marker2_title',
        name: 'Salta City',
        position: {
            lat: -24.795283873195597,
            lng: -65.42829136976184
        }
    }, {
        title: 'marker3_title',
        name: 'Oracoke Lighthouse',
        position: {
            lat: 35.1096357,
            lng: -75.9863747
        }
    }, {
        title: 'marker4_title',
        name: 'Antananarivo City',
        position: {
            lat: -18.915194943870617,
            lng: 47.53313308528492
        }
    }, {
        title: 'marker5_title',
        name: 'Esports',
        position: {
            lat: 37.5246642275535,
            lng: 126.94545210259305
        }
    }, {
        title: 'marker6_title',
        name: 'Neo-Tokyo',
        position: {
            lat: 35.675784883832065,
            lng: 139.7688509481294
        }
    }, {
        title: 'marker7_title',
        name: 'Boring',
        position: {
            lat: 47.44931986261183,
            lng: 12.154022557394521
        }
}];

class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                <Navigation />
                    <GirlModel />
                    <div style={{ height: '60vh' }}>
                        <Maps locationData={markerData} />                    
                        </div>
                    <Parteners />
                    <Footer />
                        <Route path="/sign-up" component={SignUp} />
                    <Switch>
                        <Route path="/log-in" component={Login} />
                    </Switch>
                        <Route path="/quiz" component={Quiz} />

                </BrowserRouter>
            </div>
        )
    }

}




export default withRouter(Homepage);
