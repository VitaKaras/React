var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  getInitialState(){
    return {
      seconds: 0
    }
  },
  componentDidMount(){
    var that = this;
    setInterval(function(){
      that.setState({seconds: that.state.seconds + 1});
    }, 1000);
  },
  render() {
    return <div>Time: {this.state.seconds}</div>
}
});

ReactDOM.render(<Component />, document.getElementById("root"));