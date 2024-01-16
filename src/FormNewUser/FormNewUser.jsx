import React, { useState } from "react";
import './FormNewUser.css'
import { v4 as uuidv4 } from 'uuid';
const FormNewUser = ({addNewUserHandler}) => {
    let [ name,setName ]=useState("") 
    let [ email,setEmail ]=useState("")
    let [ phone,setPhone ]=useState("")
    let [ image,setImage ]=useState("")
    let [ address,setAddress ]=useState("")
  
    
    const nameInpHandler=(arg) => {
        setName(arg.target.value)
    }
 
    const emailInpHandler=(arg) => {
        setEmail(arg.target.value)
    }
    const phoneInpHandler=(arg) => {
        setPhone(arg.target.value)
    }
    const addressInpHandler=(arg) => {
        setAddress(arg.target.value)
    }
    const imageInpHandler=(arg) => {
        setImage(arg.target.value)
    }
  
    const submitUserHandler=(e) => {
        e.preventDefault();
    
        let FormNewUserData={
            name:name,
            email:email,
            phone:phone,
            address:address,
            uuid:uuidv4(),
            image:image
       
    }
   
    addNewUserHandler(FormNewUserData)
}
  return (
    <div className="formDix p-2">
    <form className="w-full max-w-lg p-2 border ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            onChange={(arg) => nameInpHandler(arg)} placeholder="Jane Doe"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            onChange={(arg) => emailInpHandler(arg)} placeholder="example@email.com"
          />
         
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-image"
          >
            image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-image"
            type="text"
            onChange={(arg) => imageInpHandler(arg)} placeholder="https://example.dom/api/route/route/no:.jpg"
          />
         
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-address"
          >
            Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-address"
            type="text"
            onChange={(arg) => addressInpHandler(arg)} placeholder="UK , NewYork"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-phone"
          >
            Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-phone"
            type="text"
            onChange={(arg) => phoneInpHandler(arg)} placeholder="010********"
          />
        </div>
      </div>
      <div className="md:flex md:items-center ">
  <div className="md:w-1/3"></div>
  <div className="md:w-2/3">
    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={(e) => submitUserHandler(e)}>
      Add New User
    </button>
  </div>
</div>
    </form>
  </div>
  )
}

export default FormNewUser