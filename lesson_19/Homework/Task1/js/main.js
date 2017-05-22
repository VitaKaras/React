 var React = require('react');
 var ReactDOM = require('react-dom');

 var Table = React.createClass({
     getDefaultProps: function() {
         return {
             users: [{ name: "Anne Montgomery", gender: "Female" },
                 { name: "Annie George", gender: "Female" },
                 { name: "Gary Butler", gender: "Male" },
                 { name: "Lisa Mendoza", gender: "Female" },
                 { name: "Marilyn Henry", gender: "Female" },
                 { name: "Johnny Tucker", gender: "Male" },
                 { name: "Chris Jacobs", gender: "Male" },
                 { name: "Benjamin James", gender: "Male" }
             ]
         }
     },
     render: function() {
         return ( 
         	<table>
                <tbody>
                 <tr>
                     <th> Name </th> 
                     <th> Gender </th> 
                 </tr> 
             {this.props.users.map(function(result, index) {
                     return <Items key = { index }
                         name = { result.name }
                         gender = { result.gender }> </Items>
                    })
             } 
                </tbody> 
             </table>
         )
     }

 });

 var Items = React.createClass({
     render: function() {
         return ( 
         	<tr>
                 <td> { this.props.name } </td> 
                 <td> { this.props.gender } </td> 
            </tr>
         )
     }
 })

 ReactDOM.render( <Table> <Items /> </Table>,document.getElementById('root'))