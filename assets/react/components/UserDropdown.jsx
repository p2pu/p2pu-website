import React from 'react'

const UserDropdown = ({user, links, apiOrigin}) => {
  return (
    <>
      <button type="button" className="btn btn-sm d-flex align-items-center secondary p2pu-btn gray mx-0 dropdown-toggle" id="loggedInDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="material-icons material-icons-outlined me-1">account_circle</span>
        {user}
        <span className="material-icons">expand_more</span>
      </button>
      <ul className="dropdown-menu py-0 dropdown-menu-end loggedin-dropdown shadow" aria-labelledby="loggedInDropdown">
        {
          links.map((link, index) => {
            return (
              <li key={index}>
                <a className="dropdown-item"  href={`${apiOrigin}${link.url}`} >{link.text}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default UserDropdown
