import React from 'react';
import './Shortcut.css';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Shortcut = () => {
  return (
    
    <div className='shortcut'>
      <div className="row-1">
        
        <div className="icon icon-1">
        <YouTubeIcon className='center'/>
        <p className="icon-name">YouTube</p>
        </div>
       
        <div className="icon icon-2">
        <YouTubeIcon />
        <p className="icon-name">Pirates bay</p>
        </div>

        <div className="icon icon-3">
        <YouTubeIcon />
        <p className="icon-name">Mp3 Converter</p>
        </div>
      
        <div className="icon icon-4">
        <YouTubeIcon />
        <p className="icon-name">academind</p>
        </div>

        <div className="icon icon-5">
        <YouTubeIcon />
        <p className="icon-name">hackthebox</p>
        </div>

      </div>
    </div>
  
  )
}

export default Shortcut