var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
    render: function() {
        return <div>{this.props.children}</div>
        }
    }) 
         
var Child = React.createClass({
    render: function() {
        return <h3>дочерний компонент Child, отображающий произвольный текст в теге h3</h3>
        }
    })

var container = document.getElementById('example'); 

ReactDOM.render(
    <div> 
        <Parent><h1>компонент Parent, отображающий на странице произвольный текст в теге h1</h1></Parent> 
        <Parent><Child /></Parent> 
    </div>
, container); 
