import * as React from 'react';

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

    onChangeHandler = (evt) => {
        let name = evt.target.name;
        let value = evt.target.value;
        this.setState({[name]: value});
    }

    onSubmitLogin = (evt) => {
        this.state.onLogin(evt, this.state.login, this.state.password);
    }

    onSubmitRegister = (evt) => {
        this.state.onRegister(
            evt,
            this.state.firstName,
            this.state.lastName,
            this.state.login,
            this.state.password
        )
    }

    render() {
        return (
            <div>Login</div>
        ); 
    }
}