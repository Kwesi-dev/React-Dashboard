import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { userRows } from '../../dummyData'
import { useState } from 'react';
const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id)=>{
      setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          editable: true,
          renderCell: (params)=>{
              return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 200,
          editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            type: 'number',
            width: 250,
            editable: true,
          },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/user/"+ params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
     
      ];
      
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
