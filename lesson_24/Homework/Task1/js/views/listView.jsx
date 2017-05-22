var React = require('react'); 

class List extends React.Component {

    render() {
        return(
              <div className="container">
              <h3 className="text-center">List of users</h3>
          		<ul className="list-group"> 
          		 {this.props.route.data.map(function(item, index) {
	                       return ( 
          					<li  className="list-group-item" key={index}> {item.first_name} : {item.last_name} </li>
          					)}
	                       )}
          		</ul>
              </div>
      )}
}

module.exports = List; 