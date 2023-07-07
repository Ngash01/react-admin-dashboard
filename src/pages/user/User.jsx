import React from 'react';
import "./user.css";
import { Link } from 'react-router-dom';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const User = () => {
  return (
    <div className="user">
      <div className='userTitleContainer'>
        <h1 className='userTile'>Edit Title</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className='userInfo'>
            <img className='userImg' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <span className='userperonalDetails'>
              <p className='userName'>Anna Becker</p>
              <p className='userJob'>Software Engineer</p>
            </span>
          </div>
          <div className="Accountdetails">
            <p className='Account'>Account Details</p>
            <span className="AccountemailDate">
              <Person2OutlinedIcon className='icon1'/>
              <p>annabeck99</p>
            </span>
            <span className="AccountemailDate">
              <CalendarMonthOutlinedIcon className='icon1'/>
              <p>10.12.1999</p>
            </span>
          </div>
          <div className='ContactDetails'>
            <p className='contact'>Contact</p>
            <span className='contactinfo'>
              <PhoneAndroidOutlinedIcon className='icon1'/>
              <p>+1 922 427 152</p>
            </span>
            <span className='contactinfo'>
              <MailOutlineOutlinedIcon className='icon1'/>
              <p>annabecca@gmail.com</p>
            </span>
            <span className='contactinfo'>
              <LocationSearchingOutlinedIcon className='icon1'/>
              <p>New York | USA</p>
            </span>

          </div>
        </div>
        <div className="userUpdate">
          <div>
          <h3 className='header'>Edit</h3>
          <span className='userEdit'>
            <p className='userInfo'>Username</p>
            <input type="text"  placeholder='annaBecker'/>
            <hr/>
          </span>
          <span className='userEdit'>
            <p className='userInfo'>Full name</p>
            <input type="text"  placeholder='Anna Becker' />
            <hr />
          </span>
          <span className='userEdit'>
            <p className='userInfo'>Email</p>
            <input type="text" placeholder='annabeck99@gmail.com'/>
            <hr />
          </span>
          <span className='userEdit'>
            <p className='userInfo'>Phone</p>
            <input placeholder='+12 3224 234'/>
            <hr/>
          </span>
          <span className='userEdit'>
            <p className='userInfo'>Address</p>
            <input type="text" placeholder='New York | USA'/>
            <hr/>
          </span>
          </div>

          <div className='userMore'>
            <span className="userRight">
              <img className='userImg1' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <FileUploadIcon/>

            </span>
            <button className='updateButton'>
              Update
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default User;