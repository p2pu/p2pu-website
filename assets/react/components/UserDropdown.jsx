import React from 'react'
import { API_BASE_URL } from '../constants';

const UserDropdown = ({user, links}) => {

  return (
    <>
      <button type="button" className="btn btn-sm d-flex align-items-center secondary p2pu-btn gray mx-0 dropdown-toggle" id="loggedInDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="material-icons material-icons-outlined me-1">account_circle</span>
        {user}
      </button>
      <ul className="dropdown-menu py-0 dropdown-menu-end loggedin-dropdown shadow" aria-labelledby="loggedInDropdown">
        {
          links.map((link, index) => {
            return (
              <li key={index}>
                <a className="dropdown-item"  href={`${API_BASE_URL}${link.url}`} >{link.text}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  );

  return(
    <div className="dropdown">
      <div className="dropdown-toggle" id="account-menu-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <button className="nav-item">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span className="uppercase hidden-xs">{user}</span>
        </button>
      </div>
      <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="account-menu-dropdown">
        {
          links.map((link, index) => {
            return (
              <li key={index}>
                <a href={`${API_BASE_URL}${link.url}`}>
                  <span className="bullet" />
                  <span className="text">{link.text}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UserDropdown
