import React from 'react'
import './search-box.styles.css'

// A functional component
export const SearchBox = ({placeholder, doChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={doChange}
  />

)
