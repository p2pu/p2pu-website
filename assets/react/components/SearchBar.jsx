import React from 'react'

const SearchBar = (props) => (
  <div className='search-bar col-sm-12'>
    <i className="material-icons">search</i>
    <input className='search-input' placeholder='Search by city, organization, topic, and more... ' />
    <button className='p2pu-btn light'>Search</button>
  </div>
)

export default SearchBar