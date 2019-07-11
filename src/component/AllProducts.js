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
		           	<table className="table-bordered" style={{width:'100%'}}>
			           	<tr>
				           	<th>Title</th>
				           	<th>Price</th>
				           	<th>Action</th>
				        </tr>
			        	{this.state.products.map((user) => (
			          	<tr>
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
