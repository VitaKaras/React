var React = require('react'); 
var ReactDOM = require('react-dom'); 

var Demo = React.createClass({ 
    getInitialState: function() {
        return {
            name: '',
            email: '',
            phone: '',
            nameInputError: '',
            phoneInputError: '',
            emailInputError: '',
            countFields: 3
        }
    }, 
    handleInputValChange: function(e) { 
        var field = e.target.name;
        var value = e.target.value;
        var errorMessage = '';

        var validationForm = {
          name: {pattern:/^.{2,10}$/, errorMsg:'Name is Incorrect! Length from 2 to 10 characters'},
          email: {pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, errorMsg:'Email is incorrect!'},
          phone: {pattern: /^\+380\d{9}$/, errorMsg:'Correct phone started from : +380...!'},
        };
        
        var validationElem = validationForm[field];
        if(!value.match(validationElem.pattern)) errorMessage = validationElem.errorMsg;
              
        this.setState({
            [field] : value,
            [field+'InputError'] : errorMessage,
        }) 
    }, 
    validateForm: function(e) {
        var errors = 0;
       
        for(var i=0; i<this.state.countFields; i++){
            if(document.getElementsByTagName('input')[i].value == ""){
                e.preventDefault();
                errors++;
            }
        }
                
        if(errors == 0) {
            alert('Data Sent!'); 
        } else {
            alert('Input right data in fields!')
        }
    }, 


    render: function() {
        return ( 
            <div className="container well">
                <form action="#" name="myForm" onSubmit={this.validateForm}> 
                    Enter name:<input name="name" onInput={this.handleInputValChange} className="input-lg form-control" type="text" />
                    <p className="error">{this.state.nameInputError}</p>

                    Enter email:<input name="email" onInput={this.handleInputValChange} className="input-lg form-control" type="text" />
                    <p className="error">{this.state.emailInputError}</p>

                    Enter phone number:<input name="phone" onInput={this.handleInputValChange} className="input-lg form-control" type="text" />
                    <p className="error">{this.state.phoneInputError}</p>

                    Enter message:<textarea className="form-control" rows="5" id="comment" name="message" onInput={this.handleInputValChange} ></textarea>                  
                    <p className="error">{this.state.messageInputError}</p>

                    <input type="submit" value="Send data!"/>
                </form>
            </div>
    )}
})

ReactDOM.render(<Demo />, document.getElementById('root')); 