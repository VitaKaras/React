 var React = require('react');
 var ReactDOM = require('react-dom');

 var Example = React.createClass({
    propTypes: {
        color: React.PropTypes.string,
        fontSize: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            color: 'red',
            fontSize: '20px'
        }
    },
    render: function() {
        return  <p style = {{ "backgroundColor": this.props.color, 'fontSize': this.props.fontSize }} > Hello World!!! </p>
    }
})

ReactDOM.render( <Example /> , document.getElementById('root'));