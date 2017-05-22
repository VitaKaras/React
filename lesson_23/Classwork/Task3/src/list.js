import React from 'react';
import ReactDOM from 'react-dom';


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
        users: users,
      };
    }  
    render() {
           return (
            <ul>
                 {this.props.items.map(function(item, index){
                    return <li key={index}>{"Name: " + item.name + ", gender: " + item.gender} </li>
                })}
            </ul>
    )}
}

List.defaultProps = {
  items: users
};
