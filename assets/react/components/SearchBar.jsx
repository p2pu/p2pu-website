import React from 'react'

const SearchBar = ({ placeholder, updateQueryParams }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const query = document.querySelector('.search-input').value

    updateQueryParams({q: query});
    e.currentTarget.reset();
  }

  return(
    <form className='search-bar col-sm-12' onSubmit={onSubmit}>
      <div className='wrapper'>
        <i className="material-icons">search</i>
        <input className='search-input' placeholder={placeholder} />
      </div>
      <button className='p2pu-btn light' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;