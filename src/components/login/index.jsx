import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fetch from 'node-fetch';
import toast from '../../shared/toast';
import config from '../../config';
import './login.css';

class LoginComponent extends Component {
  state = { username: '', password: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    toast('Submitting your data', 'success');
    const { username } = this.state;
    const { password } = this.state;
    if (username !== '' && password !== '') {
      const { history } = this.props;
      const body = { username, password };
      fetch(`${config.url}/auth/login`, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
        .then((res) => {
          if (res.code === 200) {
            toast('Successfully logged in', 'success');
            window.sessionStorage.setItem('token', res.data.token);
            history.push('/dashboard');
          } else {
            toast(res.message, 'error');
          }
        })
        .catch(err => console.log(err));
    } else {
      toast('Please fill the form', 'error');
    }
  }

  handleChange = (e) => {
    const { name } = e.target;
    const newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="center-align">Login Form</h3>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input placeholder="username" id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} className="validate" required />
              </div>

              <div className="input-field col s12">
                <input placeholder="password" id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} className="validate" required />
              </div>
            </div>

            <button className="btn z-depth-0 black-text transparent" type="submit">Login</button>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginComponent);
