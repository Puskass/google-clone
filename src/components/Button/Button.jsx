import React from 'react'
import './Button.css'
import EditIcon from '@mui/icons-material/Edit';

const Button = () => {
  return (
    <div className='button'>
    
    <button>
        <EditIcon className='pen'/> 
        <span className='text'> Customize Chrome </span>
    </button>
    
    </div>
  )
}

export default Button