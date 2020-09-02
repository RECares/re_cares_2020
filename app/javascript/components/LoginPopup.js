import React from 'react';
import '../../assets/stylesheets/LoginPopup.css';

// TODO: add api functions to take in input and send to backend

class LoginPopup extends React.Component {
    render() {
        return (
            <div className="LoginPopup">
                <h1 className="Header">
                    <b>Login your account</b>
                </h1>
                <input type="email" placeholder="Email" className="Input" />
                <input type="text" placeholder="Password" className="Input" />
                <button className="CreateAccount">
                    <b>Create an account</b>
                </button>
                <button className="Login">
                    <b>Login</b>
                </button>
            </div>
        )
    }
}

export default LoginPopup;
