var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    getInitialState: function(){
        return {
            clicked: true
        }
    },
    changeStyle: function(){
        this.setState({clicked: !this.state.clicked})
    },
    render: function(){
        var currentStyle;
        (this.state.clicked) ? currentStyle = "redDiv" : currentStyle = "greenDiv";
        return (
            <div>
                <input type='button' value="ChangeStyle" onClick={this.changeStyle} />
                <div className={currentStyle}></div>
            </div>
        )
    }
})

ReactDOM.render(<Component/>, document.getElementById('root'));