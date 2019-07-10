import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import "./Login.css";
import Login from './Login';
import Button from './Button';

export default class Admin extends Component {

	constructor(props){
		super(props);
	}

  render() {
    return (
      <Router>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={'/admin'} className="nav-item nav-link btn">Admin</Link>
                <Link to={'/add-new'} className="nav-item nav-link btn">Add New</Link>
                <Link to={'/show-all'} className="nav-item nav-link btn">All Products</Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/add-new" component={Login} />
            <Route exact path="/show-all" component={Button} />
          </Switch>

        </Router>
    );
  }
}

