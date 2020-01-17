import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'

import Homepage from './components/homepage/Homepage';
import Navigation from './components/homepage/homepage-components/navbar/NavBar';
import Footer from './components/homepage/homepage-components/footer/Footer'
import AdminPlatform from './components/admin/AdminPlatform';
import SignUp from './components/homepage/homepage-components/signup/SignUp';
import Login from './components/homepage/homepage-components/login/Login';
import Quiz from './components/homepage/homepage-components/quiz/Quiz';
import EditInfoCards from "./components/admin/admin-components/InfoCard/EditInfoCards";
import QCards from './components/admin/admin-components/quiz-cards/QCards';





import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Switch>
            <Route exact path="/admin" component={AdminPlatform} />
          </Switch>
          <Switch>
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
          <Switch>
            <Route exact path="/admin" component={AdminPlatform} />
          </Switch>
          <Route path="/admin/editeaza-descrieri" component={EditInfoCards} />
          <Route path="/admin/editeaza-chestionar" component={QCards} />
        </BrowserRouter>
      </div>
    );
  }

}


export default App;