import React from 'react'
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    
    <div className='navbar'>
      <ul>
        <li>Gmail</li>
        <li>Images</li>
        <li><AppsIcon /></li>
        <li><AccountCircleIcon /></li>
      </ul>
    </div>
  
  )
}

export default Navbar