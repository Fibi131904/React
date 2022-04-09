import React, { ChangeEvent } from 'react';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import { ActionType, DialogsPageType, sendMassageAC, updateMassageTextAC } from '../redux/store';
import classes from './../Dialogs.module.css';

type DialogPropsType= {
  dispatchEvent:(action: ActionType)=>void
  DialogsPage : DialogsPageType
}


const Dialogs = (props:DialogPropsType) => {
let dialogsElements= props.DialogsPage.dialogs.map((d: { name: string; id: number; }) => <DialogItem name= {d.name} id={d.id} /> );
let messagesElements = props.DialogsPage.message.map((m: { message: string; }) => <Message message={m.message}/>);
let onSendMessageClick= ()=>{
props.dispatchEvent(sendMassageAC(''))
}
let onNewMessageChange= (e:ChangeEvent<HTMLTextAreaElement>)=> {
 const text = e.currentTarget.value
 props.dispatchEvent(updateMassageTextAC(text))
}

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
     { dialogsElements}

      </div>
      <div className={classes.message}>
       <div>{messagesElements}</div>
       <div>
         <div><textarea value= {props.DialogsPage.newMessageBody}
         onChange={onNewMessageChange} placeholder='Enter your message'></textarea> </div>
         <div><button onClick={onSendMessageClick}>Send</button></div>
       </div>
      </div>
    </div>
  )
   
  }



export default Dialogs;