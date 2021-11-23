import React, { Component } from 'react';
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
      if (jsonBody.user && jsonBody.user !== 'anonymous') {
        this.setState({...jsonBody})
      }
    });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="my-2 my-md-0 collapse navbar-collapse navbarNavDropdown justify-content-end">
          {!this.state.team && <a href="/en/teams/" className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn blue">Start a Team</a>}
          <UserDropdown user={this.state.user} links={this.state.links} apiOrigin={this.props.apiOrigin} />
        </div>
      );
    } else {
      return (
        <div className="my-2 my-md-0 collapse navbar-collapse navbarNavDropdown justify-content-end">
          <a href="/en/teams/" className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn blue">Start a Team</a>
          <a href={`${this.props.apiOrigin}/en/accounts/register/`} className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn orange">Create an Account</a>
          <a href={`${this.props.apiOrigin}/en/accounts/login/`} className="d-flex my-1 my-md-0 me-md-2 me-lg-3 btn btn-sm secondary p2pu-btn gray">Log in</a>
        </div>
      )
    }
  }
}
