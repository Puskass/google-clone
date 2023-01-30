import React from 'react';
import './Shortcut.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

const Shortcut = () => {
  return (
    
    <div className='shortcut'>
      <div className="row row-1">
        
        <div className="icon">
        <YouTubeIcon />
        <p className="icon-name">YouTube</p>
        </div>
       
        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">Pirates bay</p>
        </div>

        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name icon-3">Mp3 Conv.</p>
        </div>
      
        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">academind</p>
        </div>

        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">hackthebox</p>
        </div>

      </div>

      <div className="row row-2">
        
        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">GitHub</p>
        </div>
       
        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">Spotify</p>
        </div>

        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">Google</p>
        </div>
      
        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">npm</p>
        </div>

        <div className="icon">
        <FindReplaceIcon />
        <p className="icon-name">netflix.com</p>
        </div>

      </div>
    </div>
  
  )
}

export default Shortcut