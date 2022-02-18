import React from 'react';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import classes from './Dialogs.module.css';




const Dialogs = (props:any) => {




let dialogsElements= props.dialogs.map((d: { name: string; id: number; }) => <DialogItem name= {d.name} id={d.id}/>);
let messagesElements = props.messages.map((m: { message: string; }) => <Message message={m.message}/>);


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
     { dialogsElements}

      </div>
      <div className={classes.message}>
       {messagesElements}
      </div>
    </div>
  )
   
  }



export default Dialogs;