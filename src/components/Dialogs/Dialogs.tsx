import React from 'react';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';
import classes from './../Dialogs.module.css';




const Dialogs = (props:any) => {
let state= props.store.getState().dialogsPage
let dialogsElements= state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name= {d.name} id={d.id} /> );
let messagesElements = state.messages.map((m: { message: string; }) => <Message message={m.message}/>);
let newMessageBody = state.newMessageBody
let onSendMessageClick= ()=>{
props.store.dispatch(sendMessageCreator())
}
let onNewMessageChange= (e: { target: { value: any; }; })=> {
 let body= e.target.value
props.store.dispatch(updateNewMessageBodyCreator(body))
}

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
     { dialogsElements}

      </div>
      <div className={classes.message}>
       <div>{messagesElements}</div>
       <div>
         <div><textarea value= {newMessageBody}
         onChange={onNewMessageChange} placeholder='Enter your message'></textarea> </div>
         <div><button onClick={onSendMessageClick}>Send</button></div>
       </div>
      </div>
    </div>
  )
   
  }



export default Dialogs;