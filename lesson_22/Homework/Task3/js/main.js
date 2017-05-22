import React from 'react';
import ReactDOM from 'react-dom';
import {users} from '../../Task2/js/main';

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
         return ( 
            <table onClick={this.loadData}>
             <tbody>
                <tr>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>age</th>
                  <th>gender</th>
                  <th>signUpDate</th>
                  <th>id</th>
                </tr> 
             {this.props.users.map(function(item, index) {
                     return ( 
                        <tr key={index} onClick={item.sayHi.bind(item)}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.signUpDate}</td>
                            <td>{item.id}</td>
                        </tr>
                    )
                })
             } 
             </tbody> 
            </table>
         )
    }
}

Table.defaultProps = {
  users: users
};

ReactDOM.render(<Table />, document.getElementById('root')); 


