import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import './UsersCompo.css'

const UsersCompo = ({users,deleteUserHandler}) => {
  const deleteBtn=(user) => {
    deleteUserHandler(user.uuid)
  }
  return (
       <div className='userCompoDiv'>
        {
          users.map((user) => {
          return (
            <div className="user" key={user.uuid}>
            <div className="profileImgDiv">
              <img className='profileImg' src={user.image} alt="profileImg" />
            </div>
            <div className="profileInfoDiv">
              <p>Name :<span>{user.name}</span></p>
              <p>Email :<span>{user.email}</span></p>
              <p>Phone :<span>{user.phone}</span></p>
              <p>Address :<span>{user.address}</span></p>
  
            </div>
            
            <div className="buttons">
                <FaEye className='btn btnblue'/>
                <FaPenSquare className='btn btnorange'/>
                <FaTrashAlt className='btn btnred' onClick={(e) =>deleteBtn(user) }/>
            </div>
          </div>
          )
          })
        }
       
       </div>
    
  )
}

export default UsersCompo
