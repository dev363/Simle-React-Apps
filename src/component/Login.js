import React, { Component } from 'react';
import axios from 'axios';
import "./Login.css";

const header={
backgroundColor:"white"
};

export default class Login extends Component {

	constructor(props){
		super(props);
		this.onChangeUsername=this.onChangeUsername.bind(this);
		this.onChangePwd=this.onChangePwd.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.state={
			username:"",
			password:''
		}
	}

	onChangeUsername(e){

		this.setState({
			username:e.target.value
		});
	}
	onChangePwd(e){
		this.setState({
			password:e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state.password);
		const credentails={
			username:this.state.username,
			password:this.state.password
		}
		axios.post('http://localhost:3000/login',credentails)
		.then( res=>{ console.log(res); })
		.catch( err=>{ console.log(err); })

	}
  render() {
    return (
      <div className="container">
      	<h2> Login </h2>
      	<div className="row">
		  <form style={header} onSubmit={this.onSubmit}>
		    
		        <input type="text" name="username" placeholder="Username" value={this.state.username}  onChange={this.onChangeUsername}/>
		        <input type="password" name="password" placeholder="Password" value={this.state.password} required onChange={this.onChangePwd}/>
		        <input type="submit" value="Login"/>
		      
		  </form>
		</div>
		</div>
    );
  }
}

