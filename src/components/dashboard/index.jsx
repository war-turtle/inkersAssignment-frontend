import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';

class DashboardComponent extends Component {
    username = ''

    componentWillMount() {
      if (window.sessionStorage.getItem('token')) {
        const data = jwt.decode(window.sessionStorage.getItem('token'));
        if (data === null || data.username || data.username === '') {
          const { history } = this.props;
          window.sessionStorage.clear();
          history.push('/login');
        } else {
          this.username = data.username;
        }
      } else {
        const { history } = this.props;
        history.push('/login');
      }
    }

    render() {
      return (
        <div>
          <h3 className="center-align">
          Hey
            {' '}
            {this.username}
          </h3>
          <p className="flow-text center-align">close this window to delete your session</p>
        </div>
      );
    }
}

export default withRouter(DashboardComponent);
