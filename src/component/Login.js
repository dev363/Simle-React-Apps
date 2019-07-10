import React, { Component } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';
import "./Login.css";

const header={
backgroundColor:"white",
textAlign:'center'
};

export default class Login extends Component {

	constructor(props){
		super(props);
		this.onChangeUsername=this.onChangeUsername.bind(this);
		this.onChangePwd=this.onChangePwd.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.state={
			username:"",
			password:'',
			alert:false
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
		const credentails={
			username:this.state.username,
			password:this.state.password
		}
		axios.post('http://localhost:8050/login',credentails)
		.then( res=>{ 
			if(res.status==200){
				this.props.history.push('/admin');
			}else{
				this.setState({ alert: true });
				this.props.history.push('/login');
			}
		})
		.catch( err=>{
			this.props.history.push('/login');
		})

	}
  render() {
    return (
      <div className="container" style={header}>
      	<div className="row">
      		<div className="col-md-4">
      			<h2> Login </h2>
      			<Alert color="info" isOpen={this.state.alert} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
			  	<form style={header} onSubmit={this.onSubmit}>
			    	<div class="form-group">
					   <input type="email" name="username" placeholder="Username" value={this.state.username}  onChange={this.onChangeUsername}/>
					</div>
					<div class="form-group">
						<input type="password" name="password" placeholder="Password" value={this.state.password} required onChange={this.onChangePwd}/>
					</div>
			        <input type="submit" value="Login"/>
			  	</form>
			</div>
		</div>
	  </div>
    );
  }
}

