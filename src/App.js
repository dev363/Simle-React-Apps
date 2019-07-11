import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import "./App.css";
import Login from './component/Login';
import Admin from './component/Admin';
// import Button from './component/Button';
// import Example from './component/Example';
import logo from './logo.svg';


class App extends Component{
    render(){
      return(
        <Router>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="nav-link"><img src={logo} style={{height:'40px'}}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={'/login'} className="nav-item nav-link">Login</Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
          </Switch>

        </Router>
      )
    }
}

export default App;

