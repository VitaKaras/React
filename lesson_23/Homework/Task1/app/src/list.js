import React from 'react';
import ReactDOM from 'react-dom';
import AddUserForm from './addUserForm.js';


var users = [{name:"Anne Montgomery",gender:"Female"},
            {name:"Annie George",gender:"Female"},
            {name:"Gary Butler",gender:"Male"},
            {name:"Lisa Mendoza",gender:"Female"},
            {name:"Marilyn Henry",gender:"Female"},
            {name:"Johnny Tucker",gender:"Male"},
            {name:"Chris Jacobs",gender:"Male"},
            {name:"Benjamin James",gender:"Male"}]; 


export default class List extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        users: users
      };
      this.addNewUser = this.addNewUser.bind(this);
    }  
    addNewUser(newUser){
      this.state.users.push(newUser);
      this.setState({
        users: this.state.users
      });
    }
    render() {
            return ( 
              <div>
              <h3 className="text-center">List of users</h3>
              <table className="table table-hover">
               <tbody>
                  <tr>
                      <th> Name </th> 
                      <th> Gender </th> 
                  </tr> 
               {this.state.users.map(function(item, index) {
                       return ( 
                          <tr key={index} >
                               <td> { item.name } </td> 
                               <td> { item.gender } </td> 
                          </tr>
                      )
                  })
               } 
               </tbody> 
              </table>
              <AddUserForm addUser={this.addNewUser} />
              </div>
         )
    }
}

