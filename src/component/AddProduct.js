import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import Axios from 'axios'

//https://www.npmjs.com/package/react-toastify#demo

export default class AddProduct extends Component{

	constructor(props){
		super(props);

		this.onChangeTitle=this.onChangeTitle.bind(this);
		this.onChangePrice=this.onChangePrice.bind(this);
		this.onChangeSku=this.onChangeSku.bind(this);
		this.onSubmit=this.onSubmit.bind(this);

		this.state={
			title:"Hello",
			sku:"1111",
			price:"3333",
			image:"",
			time:""
		}
	}

	onChangeTitle(e){
		this.setState({title:e.target.value});
	}
	onChangeSku(e){
		this.setState({sku:e.target.value});
	}
	onChangePrice(e){
		this.setState({price:e.target.value});
	}
	
	onSubmit(e) {
		
		e.preventDefault();
		var data = new FormData();
        data.append('title2',"oijojojojjjoo");
        data.append('title',this.state.title);
        data.append('sku',this.state.sku);
        data.append('price',this.state.price);
        data.append('image',this.uploadInput.files[0]);
        data.append('time',Date.now());
        
        fetch('http://localhost:8050/add-product',
			{
				method: 'POST',
				// headers: { 'Content-Type': 'multipart/form-data' },
				body:data
			}
		).then(res=>{
			toast.success("Product added successfully", {
		        position: toast.POSITION.TOP_RIGHT
		    });
        }).catch(err=>{
        	toast.error("Product added successfully", {
		        position: toast.POSITION.TOP_RIGHT
		    });
        })
       
	}
	
	render(){
		return(
		  <div className="container">
		  	<div className="col-md-4" style={{textAlign:'center'}}>
		  	<h2>Add New Product</h2>
	           <form onSubmit={this.onSubmit} id="add-product">
		    	<div className="form-group">
				  <input type="text" placeholder="Title" name="title"  value={this.state.title} className="form-control" onChange={this.onChangeTitle}/>
				</div>
				<div className="form-group">
					<input type="text" placeholder="SKU" name="sku" className="form-control" value={this.state.sku} onChange={this.onChangeSku}/>
				</div>
				<div className="form-group">
					<input type="number" placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.onChangePrice}/>
				</div>
				<div className="form-group">
					<input type="file" placeholder="Image" name="image"  ref = { ref => {this.uploadInput = ref; }} className="form-control"/>
				</div>
		        <input type="submit" value="Login"/>
		  	</form>
		</div>
		</div>
			
		)
	}

}