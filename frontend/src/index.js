import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import HashRouter from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Homepage from './components/homepage/Homepage';
import Navigation from './components/homepage/homepage-components/navbar/NavBar';
import Footer from './components/homepage/homepage-components/footer/Footer'
import AdminPlatform from './components/admin/AdminPlatform';
import SignUp from './components/homepage/homepage-components/signup/SignUp';
import Login from './components/homepage/homepage-components/login/Login';
import Quiz from './components/homepage/homepage-components/quiz/Quiz';
import EditInfoCards from "./components/admin/admin-components/InfoCard/EditInfoCards";
import QCards from './components/admin/admin-components/quiz-cards/QCards';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'

const store = createStore(reducer)

const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      <App />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/admin" component={AdminPlatform} />
      </Switch>
    </HashRouter>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
