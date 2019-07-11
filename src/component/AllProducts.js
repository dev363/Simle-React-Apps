import React, { Component } from 'react';
import Axois from 'axios';
import {Link} from 'react-router-dom';

export default class AllProducts extends Component{
	constructor(props){
		super(props);
		this.state = {
		  	products: []
		}
	}
	componentDidMount() {
    	Axois.get('http://localhost:8050/get-all-product/')
    	.then(response => {
    		console.log(response)
			if(response.status==200){
				// console.log(response.data.products)
				this.setState({products:response.data.products});
				console.log(this.state.products);
			}
	    })
	    .catch(err=>{
  			console.log("No data");
  		})

  		// console.log(this.state.products);
  	}
	//
	render(){
		return(
			<div className="container">
        		<div className="col-xs-4">
			        <h1>Products Table</h1>
		           	<table className="table table-hover" style={{width:'100%'}}>
		           		<thead className="thead-dark">
			           	<tr>
				           	<th>Sr. No</th>
				           	<th>Image</th>
				           	<th>Title</th>
				           	<th>Price</th>
				           	<th>Action</th>
				        </tr>
				        </thead>
			        	{this.state.products.map((user,index) => (
			          	<tr>
				           	<td>{index+1}</td>
				           	<td><img src={user.image}/></td>
				           	<td>{user.title}</td>
				           	<td>{user.price}</td>
				           	<td>
				           		<Link to="" >Edit</Link> 
				           		<Link to="" >Delete</Link>
				           	</td>
				        </tr>
			        	))}
		        	</table>
			    
		        </div>
	       </div>
		);
	}
}
