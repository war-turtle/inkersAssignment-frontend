import React from 'react';
import './login.css';

const LoginComponent = () => (
  <div className="container">
    <div className="row">
      <h3 className="center-align">Login Form</h3>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="username" id="username" name="username" type="text" className="validate" />
          </div>

          <div className="input-field col s12">
            <input placeholder="password" id="password" type="password" name="password" className="validate" />
          </div>
        </div>

        <button className="btn z-depth-0 black-text transparent" type="submit">Login</button>

      </form>
    </div>
  </div>
);

export default LoginComponent;
