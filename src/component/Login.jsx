import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { githubProvider } from '../firebase';

class Login extends React.Component {
    onLogin() {
        firebase.auth().signInWithPopup(githubProvider)
        .then(result => console.log('Worded', result))
        .catch(err => console.log('Err', err));
    }
    render() {
        const { user } = this.props;
        const html = (
            <div className='div-form row container'>
                <div className='small-12 large-4 columns'>
                    <input type="text" ref="txtUsername" placeholder="Username" />
                    <input type="password" ref="txtPassword" placeholder="Password" />
                    <button 
                        className="button expanded" 
                        onClick={this.onLogin.bind(this)} 
                    >Sign In</button>
                </div>
            </div>
        );
        const redirect = <Redirect to='/todos' />;
        return (user ? redirect : html);
    }
}

module.exports = connect(state => ({ user: state.user }))(Login);
