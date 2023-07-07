import React from 'react'
import './Topbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from "react-router-dom"

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to='/'>
            <span className="logo">PowerDash</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon/>
          </div>
          <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar