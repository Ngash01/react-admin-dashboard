import React from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {UserRows} from '../../DummyData'
import {Link} from "react-router-dom";
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(UserRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=> item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field:'User', headerName: "User", width:150, renderCell: (params)=>{
      return (
      <div className='userListUser'>
        <img className='userListImg' src={params.row.avatar} alt="" />
        {params.row.User}
      </div> 
      )
    }},
    { field: 'email', headerName: 'Email', width: 170 },
    {field:"status", headerName:"Status", width:130},
    {field:"transaction", headerName:"Transaction", width: 130},
    {field: "action", headerName:"Action", width:150, renderCell: (params)=>{
      return (
        <div className="userList">
          <Link to={`/user/${params.row.id}`} >
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon className='icon' onClick={()=>handleDelete(params.row.id)}/>
        </div>
      )
    }}

  ];
  
  
  return (
    <div className="userList">
      <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList;

