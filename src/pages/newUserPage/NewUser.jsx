import React from 'react';
import './newUser.css'
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserHeading'>New User</h1>
      <div className='container'>
      <div className='newUserLeft'>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Username</p>
          <input type="text" className="inputNewUser" placeholder='john' />
        </span>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Email</p>
          <input type="text" className="inputNewUser" placeholder='john@example.com' />
        </span>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Phone</p>
          <input type="text" className="inputNewUser" placeholder='+1 234 567 80' />
        </span>

        <p className='newUserLefttype'>Gender</p>
        
        <div className='genderSelection'>
         <Brightness1OutlinedIcon className='circleIcon'/>
         <p className="genderSelectionLabel">Male</p>
         <Brightness1OutlinedIcon className='circleIcon'/>
         <p className="genderSelectionLabel">Female</p>
         <Brightness1OutlinedIcon className='circleIcon'/>
         <p className="genderSelectionLabel">Other</p>
        </div>

        <button className='createNewUserButton'>Create</button>

      </div>
      <div className='newUserRight'>
      <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Full Name</p>
          <input type="text" className="inputNewUser" placeholder='John Smith' />
        </span>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Password</p>
          <input type="text" className="inputNewUser" placeholder='password' />
        </span>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Address</p>
          <input type="text" className="inputNewUser" placeholder='New York | USA' />
        </span>
        <span className='newUserLeftSpan'>
          <p className='newUserLefttype'>Active</p>
          <span className='newUserActive'>
            <input type="text" className="inputNewUser" placeholder="Yes" />
            <KeyboardArrowDownOutlinedIcon className='inputNewUserActiveIcon'/>
          </span>
        </span>
      
      </div>
    </div>
    </div>
  )
}

export default NewUser;

