import React,{useState} from "react";
import {Card,Button,ErrorModal} from '../../components';
import classes from './AddUser.module.css';
const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername]=useState("");
    const [enteredAge,setEnteredAge]=useState("");
    const [error,setError]=useState();
    const onChangeUsernameHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }
    const onChangeAgeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }
    const addUserHandler =(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)!'
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)!'
            });
            return;
        }
        props.onChangeUserInfo(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('')
    }
    const errorHandler = ()=>{
        setError(null)
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    
    <Card className={classes.input}>
  <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={onChangeUsernameHandler} value={enteredUsername}/>
    <label htmlFor="age">Age (years)</label>
    <input type="number" id="age" onChange={onChangeAgeHandler} value={enteredAge}/>
    <Button type='submit'>Add User</Button>
  </form>
  </Card>
  </div>
    );
};

export default AddUser;
