import React from 'react';
import ReactDOM from 'react-dom';

export default class AddUserForm extends React.Component{
   constructor(props){
   		super();
   		this.state = {
   			name: '',
   			gender: ''
   		};
   	this.handleInputChange = this.handleInputChange.bind(this);
   	this.addUser = this.addUser.bind(this);
   }
   handleInputChange(e){
   	var user = e.target;
   	this.setState({
   		[user.name] : user.value
   	});
   }
   addUser(e){
   	e.preventDefault();
   	var newUser = {
   		name: this.state.name,
   		gender: this.state.gender
   	}
   	this.props.addUser(newUser);
   	this.setState({
   		name: '',
   		gender: ''
   	})
   }
    render() {
           return (
          	<form className="form-inline">
			  <div className="form-group">
			    <label>Name:</label>
			    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
			  </div>
			  <div className="form-group">
			    <label>Gender:</label>
			    <input type="text" className="form-control" name="gender" value={this.state.gender} onChange={this.handleInputChange} />
			  </div>
			  <button type="submit" className="btn btn-default" onClick={this.addUser}>Add</button>
			</form>
    )}
}