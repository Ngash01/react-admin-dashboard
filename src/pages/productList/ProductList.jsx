import React from 'react'
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { ProductRows } from '../../DummyData';
import { Link } from 'react-router-dom';


const ProductList = () => {
  const [data,setData] = useState(ProductRows)
  console.log(data)

  const handleDelete = (id)=>{
    return setData(data.filter((item) =>item.id !== id))
    //  return an array of items where each item in the array !== the id specified
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 180, renderCell: (params)=>{
      return (
        <div className='avatarProduct'>
          <img className='imgAvatar' src={params.row.avatar} alt="" />
          {params.row.product}
        </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 150 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return <div className='userList'>
        <Link to={`/product/${params.row.id}`}>
        <p className='userListEdit'>Edit</p>
        </Link>
        
        <DeleteOutlineIcon onClick={()=>handleDelete(params.row.id)} className='icon'/>
      </div>
    } },
  ];
  

  return (
    <div className='productList'>
      <DataGrid rows={data} disableRowSelectionOnClick columns={columns}  pageSizeOptions={[5, 10]} checkboxSelection/>
    </div>
  )
}

export default ProductList;

    //  return an array of items where each item in the array !== the id specified
