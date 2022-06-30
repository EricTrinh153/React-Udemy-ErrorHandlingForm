import React,{useState} from 'react';
import {AddUser,UserList} from './components';


function App() {
  const [enteredUser,setEnteredUser]=useState([]);
  const addUserInfoHandle = (eUsername,eAge)=>{
    setEnteredUser((prevEnteredUser)=>{
      return [...prevEnteredUser,{username:eUsername,age:eAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      
      <AddUser onChangeUserInfo ={addUserInfoHandle}/>
      <UserList users={enteredUser}/>
    </div>
  );
}

export default App;
