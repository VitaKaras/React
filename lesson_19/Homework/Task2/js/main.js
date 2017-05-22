 var React = require('react');
 var ReactDOM = require('react-dom');

 var MyForm = React.createClass({
     render: function() {
         return ( 
            <form>
             <label> Name:
                <input type = "text" /> <br/>
             </label> 
             <label> Login:
                <input type = "text" /> <br/>
             </label> 
             <input type = "button" value = "Submit" />
             </form>
         )
     }
 })

 ReactDOM.render( <MyForm /> , document.getElementById('root'))