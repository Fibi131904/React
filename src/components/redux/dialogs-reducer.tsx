import { ActionType, DialogsPageType } from "./store";


export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage = {
                id: 6,
                message: state.newMessageBody,
            };
            state.message.push(newMessage);
            state.newMessageBody = '';
            return state;
        case"UPDATE_MESSAGE_TEXT": {
            state.newMessageBody = action.updateText;
            return state;
        }
        default:
            return state;
    }

}

