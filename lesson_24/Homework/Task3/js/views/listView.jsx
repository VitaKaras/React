var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

class List extends React.Component {
constructor(props) {
        super(props);
    }
    render() {
        return(
              <div className="container">
              <h3 className="text-center">List of users</h3>
          		<ul className="list-group"> 
          		 {this.props.route.data.map(function(item, index) {
	                       return ( 
                          <li className="list-group-item" key={index}>
                           <Link to={{ pathname: `/listView/${item.id}`, query: { ...item } }}>
                              {item.first_name} : {item.last_name}
                            </Link>
                          </li>
              					 )}
	             )}
          		</ul>
              </div>
      )}
}

module.exports = List; 