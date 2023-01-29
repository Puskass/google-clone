import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
const Search = () => {
  return (
    <div className='search'>
      
      <div className="logo">Google</div>

      <div className="search-container">
        <SearchIcon />
        <input placeholder='Search Google or type a URL'></input>
        <MicIcon />  
      </div>
    </div>
  )
}

export default Search