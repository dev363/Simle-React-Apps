import React,{Component} from 'react';
import Axios from 'axios'
export default class Select_add_del extends Component{

	constructor(props){
		super(props)

		this.state={
			products:[],
			product_title:''
		}
	}

	// To display select dropdown values at first time 
	componentDidMount() {
		this.getAllProducts();
	}

	// Get all product
	getAllProducts = e => {
		Axios.get('http://localhost:8050/get-all-product')
		.then(res=>{
			if(res.status===200)
				this.setState({products:res.data.products})
			console.log(this.state.products);
		}).catch(err=>{
			console.log(err)
		})
	}

	// get input text value
	getProductvalue = e => {
		// console.log(e.target.options[e.target.selectedIndex].text) // To get selected option Text
		this.setState({
			product_title:e.target.value
		})
	}

	// Get product id on change select
	onChangeProductTitle = e => {
		this.setState({product_title:e.target.value})
	}

	// Addnew product
	AddProduct = e => {
		Axios.post('http://localhost:8050/add-product',{title:this.state.product_title,price:100})
		.then(res=> {
			console.log(res);
			this.getAllProducts()
			this.setState({product_title:""})
		}).catch(err=>{
			console.log(err)
		})
	}

	// delete selected product
	deleteProduct = e => {
		Axios.get(`http://localhost:8050/del-product/${this.state.product_title}`)
			.then(res=>{
				console.log(res.data.message)
				this.getAllProducts()
				this.setState({product_title:""})
			}).catch(err=>{
				console.log(err);
		})
		
	}

	// Display

	render(){
		return(
			<div className="container">
			  	<div className="col-md-4">
				  	<h2>Select Add Delete</h2>
				  		<div className="form-group">
				           	<select id='product' className="form-control" onChange={this.getProductvalue}>
				           	<option value=""> Select Product</option>
				           	{this.state.products.map((pro,index)=> (
				           		
				           		<option key={index} value={pro._id}>{pro.title}</option>
					           	))
					           
					           }
				           </select>
				         </div>

				  		<div className="form-group">
				  			<input className="form-control" placeholder="Selected Product" onChange={this.onChangeProductTitle} type="text" value={this.state.product_title}/>
				  		</div>
				  		<div className="form-group">
				  			<button className="btn btn-success" onClick={this.AddProduct}>Add</button>
				  			<button className="btn btn-danger" onClick={this.deleteProduct}>Delete</button>
				  		</div>
				</div>
			</div>
		)
	}

}