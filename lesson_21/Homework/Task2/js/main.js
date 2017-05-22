var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState(){
    return {
      inputError: '',
      result: ''
    };
  },
  validateInputFields: function(e){
    var testVal = /^[0-9]*$/;

    if (document.getElementById('field1').value.search(testVal) == -1 || 
      document.getElementById('field2').value.search(testVal) == -1) {
      e.preventDefault(); 
      this.setState({inputError: 'only numbers allowed!'}); 
    } else {
      this.setState({inputError: ''}); 
    } 
  },
  doOperation: function(e){ 
    var calculateFunc = new Function('a', 'b', 'return a' + e.target.value + 'b');
    if(e.target.value == '/' && document.getElementById('field2').value == 0){
       this.setState({inputError: 'divide by zero!'}); 
    } else if(this.state.inputError === ''){
      this.setState({result: calculateFunc(+document.getElementById('field1').value, +document.getElementById('field2').value)});
    } else {
      this.setState({result: ''});
    }
  },
  render() {
    return (
      <div id="calculator">
        <form>
            <input type="text" id="field1" onInput={this.validateInputFields} />
            <input type="text" id="field2" onInput={this.validateInputFields} /> <br />
             <p className="error">{this.state.inputError}</p>
            <div id="buttons">
                <input type="button" value="+" id="key1" onClick={this.doOperation}/>
                <input type="button" value="-" id="key2" onClick={this.doOperation} /><br />
                <input type="button" value="*" id="key3" onClick={this.doOperation}/>
                <input type="button" value="/" id="key4" onClick={this.doOperation} />
                <input type="text" id="field3" value={this.state.result} />
            </div>
            </form>
            </div>
    );
  }
});

ReactDOM.render(<Counter />, document.getElementById('root')); 
