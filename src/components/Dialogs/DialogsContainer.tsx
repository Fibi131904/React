import React, { ChangeEvent } from 'react';
import { StoreContex } from '../../StoreContex';
import DialogItem from '../DialogItem/DialogItem';
import Message from '../Message/Message';
import store, { ActionType, sendMassageAC, StoreType, updateMassageTextAC } from '../redux/store';
import Dialogs from './Dialogs';




const DialogsContainer = () => {
 
  return <StoreContex.Consumer>
     {store => {
        let state = store.getState().dialogsPage

        let onSendMessageClick = () => {
          store.dispatchEvent(sendMassageAC(''))
        }
      
        let onNewMessageChange = (body) => {
          store.dispatchEvent.updateMassageBodyAC(body)
        }
        return <Dialogs updateMassageBodyAC={onNewMessageChange}
        onNewMessageChange={onSendMessageClick}
        dialogsPage={state} />
      }
    }
  </StoreContex.Consumer>


}



export default DialogsContainer;