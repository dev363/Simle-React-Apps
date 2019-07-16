import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import AddProduct from './AddProduct';
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import Select_add_del from './Select_add_del';

export default class Admin extends Component {

  render() {
    return (
      <Router>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={'/admin'} className="nav-item nav-link btn">Admin</Link>
                <Link to={'/add-new'} className="nav-item nav-link btn" data-toggle="tooltip" data-placement="top" title="Add new Product">Add New</Link>
                <Link to={'/show-all'} className="nav-item nav-link btn" data-toggle="tooltip" data-placement="top" title="View All Products">All Products</Link>
                <Link to={'/select-add-del'} className="nav-item nav-link btn" data-toggle="tooltip" data-placement="top" title="Select-Add-Delete Product">Excercise 1</Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route exact path="/add-new" component={AddProduct} />
            <Route exact path="/show-all" component={AllProducts} />
            <Route exact path="/select-add-del" component={Select_add_del} />
          </Switch>

        </Router>
    );
  }
}

