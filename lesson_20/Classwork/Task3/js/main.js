var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    getInitialState: function(){
        return {
            checked: true
        }
    },
    changeStyle: function(){
        this.setState({checked: !this.state.checked})
    },
    render: function(){
        var currentStyle;
        (this.state.checked) ? currentStyle = "redDiv" : currentStyle = "greenDiv";
        return (
            <div>
                <input type='checkbox' onChange={this.changeStyle} defaultChecked = {this.state.checked} />
                <div className={currentStyle}></div>
            </div>
        )
    }
})

ReactDOM.render(<Component/>, document.getElementById('root'));