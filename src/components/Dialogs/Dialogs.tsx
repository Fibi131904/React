import React, { ChangeEvent } from 'react';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import { DialogsPageType, StoreType} from '../redux/store';
import classes from './../Dialogs.module.css';

type DialogPropsType= {
  store:StoreType
  updateMassageBodyAC: (updateText: string)=>void
  sendMassage:  (messageText: string) => void
  dialogsPage: DialogsPageType
}


const Dialogs = (props: DialogPropsType) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d=><DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.message.map(m => <Message message={m.message} />);
let newMessageBody= state.newMessageBody


  let onSendMessageClick = () => {
    props.sendMassage()
  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value
    props.updateMassageBodyAC(body)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}

      </div>
      <div className={classes.message}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={props.dialogsPage.newMessageBody}
            onChange={onNewMessageChange} placeholder='Enter your message'></textarea> </div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )

}



export default Dialogs;