import React from 'react'
import  { API_BASE_URL } from '../constants';

const UserDropdown = ({user, links}) => {
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
