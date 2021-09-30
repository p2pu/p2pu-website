import React, { Component } from 'react';
import UserLogin from './UserLogin';
import UserDropdown from './UserDropdown';


export default class NavAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const url = `${this.props.apiOrigin}/en/accounts/fe/whoami/`
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
    const loginUrl = `${this.props.apiOrigin}/en/accounts/fe/login/`;
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
        this.setState({errors: {} });
        this.getUserData();
      }
    });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="my-2 my-md-0 collapse navbar-collapse navbarNavDropdown justify-content-end">
          <a href="/en/teams/" className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn blue">Start a Team</a>
          <UserDropdown user={this.state.user} links={this.state.links} apiOrigin={this.props.apiOrigin} />
        </div>
      );
    } else {
      return (
        <div className="my-2 my-md-0 collapse navbar-collapse navbarNavDropdown justify-content-end">
          <a href="/en/teams/" className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn blue">Start a Team</a>
          <a href="https://learningcircles.p2pu.org/en/accounts/register/" className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn orange">Create an Account</a>
          <UserLogin onSubmit={this.onUserLogin} errors={this.state.errors} apiOrigin={this.props.apiOrigin} />
        </div>
      )
    }
  }
}
