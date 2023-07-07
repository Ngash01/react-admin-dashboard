import React from 'react'
import "./FeaturedInfo.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
  <main>
    <div className='featuredInfo'>
      <div className='featuredItem'>
          <span className="featuredTitle">Revenue</span>
          <div className="featuredmoneyContainer">
            <span className='FeaturedMoney'>$2,415</span>
            <span className='FeaturedMoneyrate'>-11.4</span>
            <ArrowDownwardIcon className='featuredArrow'/>
          </div>
          <span className='featured-span'>Compared To Last Month </span>
      </div>
    </div>

    <div className='featuredInfo'>
      <div className='featuredItem'>
          <span className="featuredTitle">Sales</span>
          <div className="featuredmoneyContainer">
            <span className='FeaturedMoney'>$4,454</span>
            <span className='FeaturedMoneyrate'>-1.4</span>
            <ArrowDownwardIcon className='featuredArrow'/>
          </div>
          <span className='featured-span'>Compared To Last Month </span>
      </div>
    </div>

    <div className='featuredInfo'>
      <div className='featuredItem'>
          <span className="featuredTitle">Cost</span>
          <div className="featuredmoneyContainer">
            <span className='FeaturedMoney'>$2,023</span>
            <span className='FeaturedMoneyrate'>+2.1</span>
            <ArrowUpwardIcon className='featuredArrow1'/>
          </div>
          <span className='featured-span'>Compared To Last Month </span>
      </div>
    </div>
  </main>
  )
}

export default FeaturedInfo;
