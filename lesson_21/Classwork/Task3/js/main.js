var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  getInitialState(){
    return {
      seconds: 0,
    }
  },
  componentDidMount(){
    var that = this;
    this.state.interval = setInterval(function(){
      that.setState({seconds: that.state.seconds + 1});
    }, 1000);
  },
  resetHandler(){
    clearInterval(this.state.interval);
    this.setState({seconds: 0});
  },
  startHandler(){
    this.componentDidMount();
  },
  stoptHandler(){
    clearInterval(this.state.interval);
  },
  render() {
    return (
      <div>
        <div>{this.state.seconds}</div>
        <input type="button" onClick={this.resetHandler} value="Reset" />
        <input type="button" onClick={this.startHandler} value="Start" />
        <input type="button" onClick={this.stoptHandler} value="Stop" />
      </div>
    )
}
});

ReactDOM.render(<Component />, document.getElementById("root"));