import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

type DialogItemPropsType = {
name: string
id: string
}

const DialogItem = (props: DialogItemPropsType)=> {
  let patsh = '/dialog/' + props.id;
  return (
  <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to = {patsh}> {props.name}</NavLink>
        </div>
  )
}

const Dialogs = (props: any) => {
  return (
    <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
      <DialogItem name='Petya' id='1' />
      <DialogItem name='Vera' id='2' />
      <DialogItem name='Seva' id='3' />
      <DialogItem name='Sasha' id='4' />
      <DialogItem name='Kolya' id='5' />
      <DialogItem name='Sonya' id='6' />
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>
          <Message message ='Hi'/>
          <Message message ='Very well'/>
          <Message message ='How are you?'/>
          </div>
    </div>
    </div>

  );
}

type MessagePropsType ={
  message: string
}
const Message = (props: MessagePropsType)=> {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

export default Dialogs;