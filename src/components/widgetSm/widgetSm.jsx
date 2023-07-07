import React from 'react';
import "./widgetSm.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <p className="widgetTitle">New Join Members</p>
      <div className="widgetSmlistItem">
        <span className='imgspan'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggupmm7nY9Mev_hVFZhK2_riI06G9DLi-hA&usqp=CAU" alt="" className="widgetSmpic" />
        </span>
        <span>
          <p className='widgetSmname'>Anna Keller</p>
          <p className='jobTitle'>Software Engineer</p>
        </span>
        <div className='display'>
          <RemoveRedEyeIcon className='eyeIcon'/>
          <p>Display</p>
        </div>
      </div>

      <div className="widgetSmlistItem">
        <span className='imgspan'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRne8OYLXsxsSRSxrHZaMXwwADlaLMUD0XAbQ&usqp=CAU" alt="" className="widgetSmpic" />
        </span>
        <span>
          <p className='widgetSmname'>Huang Chu</p>
          <p className='jobTitle'>DevOps Engineer</p>
        </span>
        <div className='display'>
          <RemoveRedEyeIcon className='eyeIcon'/>
          <p>Display</p>
        </div>
      </div>

      <div className="widgetSmlistItem">
        <span className='imgspan'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajHOuU3TgIjZoGPkE4TaNm4gy9QVoWzcetRV60aPXzLSU8E2DbvhkXQBiKGmV0RFVD3o&usqp=CAU" alt="" className="widgetSmpic" />
        </span>
        <span clasName="info">
          <p className='widgetSmname'>Kylie Anderson</p>
          <p className='jobTitle'>Data Scientist</p>
        </span>
        <button className='display'>
          <RemoveRedEyeIcon className='eyeIcon'/>
          <p>Display</p>
        </button>
      </div>
    </div>
  )
}
