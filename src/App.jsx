import React, { useEffect, useState } from "react";
import "./App.css";
import NavCompo from "./Nav/NavCompo";
import UsersCompo from "./Users/UsersCompo";
import FooterCompo from "./Footer/FooterCompo";
import FormNewUser from "./FormNewUser/FormNewUser";
const App = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((datas) => {
        let userData = datas.results.map((usr) => ({
          name: usr.name.first + " " + usr.name.last,
          email: usr.email,
          phone: usr.phone,
          address: usr.location.country + " " + usr.location.state,
          uuid: usr.login.uuid,
          image: `${usr.picture.large}`,
        }));
        setUsers(userData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const deleteUserHandler = (arg) => {
    console.log(arg);
    let filteredUsers = users.filter((usr) => usr.uuid !== arg);
    console.log(filteredUsers);
    setUsers(filteredUsers);
  };
  const addNewUserHandler = (arg) => {
    console.log(arg);
    setUsers([...users,arg]);
  };
  return (
    <div>
      <NavCompo></NavCompo>
      <hr />
      <FormNewUser addNewUserHandler={addNewUserHandler}></FormNewUser>
      <hr />
      <UsersCompo
        users={users}
        deleteUserHandler={deleteUserHandler}
      ></UsersCompo>
      <FooterCompo></FooterCompo>
    </div>
  );
};

export default App;
