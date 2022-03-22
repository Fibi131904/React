const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = "SEND_MESSAGE"

export const dialogsReducer = (state: { newMessageBody: string; messages: { id: number; message: any }[] }, action: { type: any; body: any }) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 5, message: body })
            return state
        default:
            return state
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body: string | undefined) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

