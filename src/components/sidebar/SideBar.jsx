import React from 'react';
import "./SideBar.css";
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='wrapperSidebar'>
        <p className='header'>Dashboard</p>
        <div className='Contents'>
          <span className='section active'> 
            <AppsIcon className='section-icon'/>
            <Link to={'/'}>
              <p>Home</p>
            </Link>
          </span>
          <span className='section'>
            <TimelineIcon className='section-icon'/>
            <p>Analytics</p>
          </span>
          <span className='section'>
            <TrendingUpIcon className='section-icon'/>
            <p>Sales</p>
          </span>
        </div>

        <p className='header'>Quick Menu</p>
        <div className='Contents'>
          <span className='section '> 
            <PersonOutlinedIcon className='section-icon'/>
            <Link to='/users'>
              <p >Users</p>
            </Link>
          </span>
          <Link to="/products">
          <span className='section'>
            <Inventory2OutlinedIcon className='section-icon'/>
            <p>Products</p>
          </span>
          </Link>
          <span className='section'>
            <AttachMoneyOutlinedIcon className='section-icon'/>
            <p>Transactions</p>
          </span>
          <span className='section'>
            <BarChartOutlinedIcon className='section-icon'/>
            <p>Reports</p>
          </span>
          </div>

        <p className='header'>Notifications</p>
        <div className='Contents'>
          <span className='section'> 
            <MailOutlineOutlinedIcon className='section-icon'/>
            <p>Mail</p>
          </span>
          <span className='section'>
            <QuestionAnswerOutlinedIcon className='section-icon'/>
            <p>Feedback</p>
          </span>
          <span className='section'>
            <ChatBubbleOutlineOutlinedIcon className='section-icon'/>
            <p>Messages</p>
          </span>
        </div> 

          <p className='header'>Staff</p>
        <div className='Contents'>
          <span className='section'> 
            <WorkOutlineOutlinedIcon className='section-icon'/>
            <p>Manage</p>
          </span>
          <span className='section'>
            <TimelineIcon className='section-icon'/>
            <p>Analytics</p>
          </span>
          <span className='section'>
            <ReportIcon className='section-icon'/>
            <p>Reports</p>
          </span>
          
        </div>
        
      </div>
    </div>
  )
}       

export default SideBar;



