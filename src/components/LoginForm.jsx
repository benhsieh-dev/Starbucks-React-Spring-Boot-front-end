import * as React from 'react';
import classNames from 'classnames';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            onLogin: props.onLogin,
            onRegister: props.onRegister 
        }
    }
    render() {
        return (
            <div></div>
        ); 
    }
}