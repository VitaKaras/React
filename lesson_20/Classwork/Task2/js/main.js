var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

var Component = React.createClass({
	 propTypes: {
        	val1: PropTypes.number, 
        	val2: PropTypes.number,
            mode: PropTypes.bool.isRequired
        }, 
    render: function(){
        return <h1>{this.props.mode ? this.props.val1 + this.props.val2 : this.props.val1.toString() + this.props.val2.toString()}</h1>;
    }
})

ReactDOM.render(<Component val1={3} val2={6} mode={false}/>, document.getElementById("root"));
ReactDOM.render(<Component val1={3} val2={6} mode={true}/>, document.getElementById("root2"));
