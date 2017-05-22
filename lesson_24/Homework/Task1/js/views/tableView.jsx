var React = require('react'); 

class Table extends React.Component {
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
	                               <td> { item.first_name } </td> 
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