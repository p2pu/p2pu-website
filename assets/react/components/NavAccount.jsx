import React, { Component } from 'react';
//import  { API_BASE_URL } from '../constants';
import UserLogin from './UserLogin';
import UserDropdown from './UserDropdown';


const API_BASE_URL = 'https://staging-learningcircles.p2pu.org';
const loginUrl = `${API_BASE_URL}/en/accounts/fe/login/`;

export default class NavAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const url = `${API_BASE_URL}/en/accounts/fe/whoami/`
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    }).then(response => {
      return response.json();
    }).then(jsonBody => {
      console.log(jsonBody);
      if (jsonBody.user && jsonBody.user !== 'anonymous') {
        this.setState({ user: jsonBody.user, links: jsonBody.links })
      }
    });
  }

  onUserLogin = (username, password) => {
    // POST username + password to login API, if successful, call whoami
    fetch(loginUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'include', // or 'same-origin'
      body: JSON.stringify({
        email: username,
        password
      })
    }).then(response => {
      return response.json();
    }).then(jsonBody => {
      if (jsonBody.errors){
        this.setState({errors: jsonBody.errors});
      } else {
        // GET user data if login is successful
        this.setState({errors: null});
        this.getUserData();
      }
    });
  }

  render() {
    if (this.state.user) {
      return <UserDropdown user={this.state.user} links={this.state.links} />;
    } else {
      return (
        <>
          <nav className="order-4 order-md-2 text-end navbar navbar-expand-md col-12 col-md pe-0">
            <div className="collapse navbar-collapse navbarNavDropdown justify-content-end">
              <a href="/en/teams/" className="d-flex btn btn-sm secondary p2pu-btn blue">Start a Team</a>
              <button href="#" className="d-flex btn btn-sm secondary p2pu-btn orange">Create an Account</button>
            </div>
          </nav>
          <UserLogin onSubmit={this.onUserLogin} errors={this.state.errors}/>
        </>
      )
    }
  }
}
