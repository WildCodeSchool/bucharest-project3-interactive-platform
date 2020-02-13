import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'; // Tell Webpack that Button.js uses these styles

class NotFoundPage extends React.Component{
    render(){
        return <div id="parent">
            <h1>404 Page not found</h1>
                <p div id="floater">Pagina pe care o cautati nu exista</p><br/>
                <p  id="child">
                    <Link to="/">Mergi la Homepage </Link>
                </p>
        </div>
    }
    }
    export default NotFoundPage;

