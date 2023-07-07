import React from 'react'
import './product.css'
import ProductsRechart from '../../components/productsRechart/ProductsRechart';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from "react-router-dom"

const Product = () => {

  return (
    <div className='product'>
      <div className="headers">
        <h1>Product</h1>
        <Link to="/newproduct">
          <button className='createProductButton'>Create</button>
        </Link>
      </div>
      <div className="topContainer">
        <div className='containerLeft'>
          <ProductsRechart/>
        </div>
        <div className="containerRight">
          <div className='containerRightTop'>
          <img className='containerRightImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreW3FUAkp8WBoCFhBel5mP8Gp2fi179ve7GYDRhiRlqsi47xblYEgLYCV9D7_BMMkoGU&usqp=CAU" alt="" />
          <p className='containerRightHeader'>Apple Airpods</p>
          </div>
          <div className='containerRightBottom'>
            <span className='containerRightContet'>
              <p className='containerRightValue1'>id:</p>
              <p className='containerRightValue2'>232</p>
            </span>
            <span className='containerRightContet'>
              <p className='containerRightValue1'>Sales:</p>
              <p className='containerRightValue2'>2321</p>
            </span>
            <span className='containerRightContet'>
              <p className='containerRightValue1'>active:</p>
              <p className='containerRightValue2'>yes</p>
            </span>
            <span className='containerRightContet'>
              <p className='containerRightValue1'>in stock:</p>
              <p className='containerRightValue2'>no</p>
            </span>
          </div>
        </div>
      </div>
      <div className='containerBottom'>
        <div className='containerBottomLeft'>
          <span>
          <p className='containerBottomLeft'>Product Name</p>
          <input className='containerBottomLeftInput' type="text" placeholder='appleAirpods'/>
          <hr />
          </span>
          <label>In Stock</label>
          <select name="inStock" id='inStock' className='containerBottomFeatures'>
            <option value="yes">Yes</option>
            <option value="yes">No</option>
            <KeyboardArrowDownOutlinedIcon className='stockCheckIcon'/>
          </select>
          <p>Active</p>
          <select name="active" id='active' className='containerBottomFeatures'>
            <option value="yes">Yes</option>
            <option value="yes">No</option>
            <KeyboardArrowDownOutlinedIcon className='stockCheckIcon'/>
          </select>
          
        </div>
        <div className='containerBottomRight'>
          <div className='containerBottomCloud'>
            <img className='containerBottomImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreW3FUAkp8WBoCFhBel5mP8Gp2fi179ve7GYDRhiRlqsi47xblYEgLYCV9D7_BMMkoGU&usqp=CAU" alt="" />
            <CloudUploadIcon/>
          </div>
          <button className='containerBottomButton'>Update</button>
        </div>

      </div>
    </div>
  )
}

export default Product;