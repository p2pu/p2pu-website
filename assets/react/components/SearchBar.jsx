import React from 'react'

const SearchBar = ({ placeholder }) => (
  <div className='search-bar col-sm-12'>
    <i className="material-icons">search</i>
    <input className='search-input' placeholder={placeholder} />
    <button className='p2pu-btn light'>Search</button>
  </div>
)

export default SearchBar