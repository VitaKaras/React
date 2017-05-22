var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

class Table extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
        return(
                 <div>
	              <h3 className="text-center">Table of users</h3>
	              <table className="table table-hover">
	               <tbody>
	                  <tr>
	                      <th> First Name </th> 
	                      <th> Last Name </th>
	                      <th> Gender </th> 
	                  </tr> 
	               {this.props.route.data.map(function(item, index) {
	                       return ( 
	                          <tr key={index} >
	                          <td>
		                          <Link to={{ pathname: `/listView/${item.id}`, query: { ...item } }}>
	                              	   { item.first_name } 	                               
	                              </Link>
                              </td>
	                               <td> { item.last_name } </td> 
	                               <td> { item.gender }</td>
	                          </tr>
	                      )
	                  })
	               } 
	               </tbody> 
	              </table>
	            </div>
      )}
} 

module.exports = Table; 