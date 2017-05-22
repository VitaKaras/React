var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState(){
    return {
      count: 0
    };
  },
  decrementCounter(){
    this.setState({count: this.state.count - 1});
  },
  incrementCounter(){
    this.setState({count: this.state.count + 1});
  },
  render() {
    return (
      <div>    
        <input className="inlineElems" type="button" value="-" onClick={this.decrementCounter} />
        <h1 className="inlineElems">{this.state.count}</h1>
        <input className="inlineElems" type="button" value="+" onClick={this.incrementCounter} />
      </div>
    );
  }
});

ReactDOM.render(<Counter />, document.getElementById('root')); 
