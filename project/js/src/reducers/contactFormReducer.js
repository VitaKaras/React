let stateInitial = {
    nameField: {text: '', valid: true},
    emailField: {text: '', valid: true},
    messageField: {text: '', valid: true}
};

let nameRegExp = /^[a-zA-Z\s]*$/;
let emailRegExp = /^[a-zA-Z0-9@_\.]*$/;
let messageRegExp = /^.{20,}$/;


const portfolioReducer = (state = stateInitial, action) => {

    switch (action.type) {
        case 'FIELD_CHANGE': {

            let type = action.payload.type;
            let text = action.payload.text;
            let valid;
            switch (type) {
                case 'name': {
                    valid = nameRegExp.test(text) || (text === '');
                    return {...state, nameField: {...{text, valid}}};
                }
                case 'email': {
                    valid = emailRegExp.test(text) || (text === '');
                    return {...state, emailField: {...{text, valid}}};
                }
                case 'message': {
                    valid = messageRegExp.test(text) || (text === '');
                    return {...state, messageField: {...{text, valid}}};
                }
            }
            break;
        }
        default: {
            return state;
        }
    }
};

export default portfolioReducer;