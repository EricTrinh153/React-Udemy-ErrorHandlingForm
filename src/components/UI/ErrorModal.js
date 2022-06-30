import React from 'react';
import {Card,Button} from '../../components';
import classes from './ErrorModal.module.css';
const ErrorModal = (props)=>{
    return(
            <div className={classes.backdrop} onClick={props.onConfirm}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.action}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
            </div>
    );
}

export default ErrorModal;