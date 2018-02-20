import React, { Component } from 'react';
import ApiHelper from '../helpers/ApiHelper';
import  { API_BASE_URL } from '../constants';

export default class NavAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getUserData = () => this._getUserData();
  }

  componentDidMount() {
    this.getUserData();
  }

  _getUserData() {
    const api = new ApiHelper('whoami');
    const onSuccess = (data) => {
      if (data.user && data.user !== 'anonymous') {
        this.setState({ user: data.user, links: data.links })
      }
    }

    api.fetchResource({ callback: onSuccess })
  }

  render() {
    if (this.state.user) {
      return(
        <div className="dropdown">
          <div className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="uppercase hidden-xs">{this.state.user}</span>
          </div>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            {
              this.state.links.map((link, index) => {
                return <li key={index}><a href={`${API_BASE_URL}${link.url}`}>{link.text}</a></li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}