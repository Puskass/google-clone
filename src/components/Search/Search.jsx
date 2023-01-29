import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
  return (
    <div className='search'>
      
      <div className="logo">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo"/>
      </div>
      
      <div className="search-container">
        <SearchIcon />
        <input placeholder='Search Google or type a URL'></input>
        <MicIcon />  
      </div>
      
    </div>
  )
}

export default Search