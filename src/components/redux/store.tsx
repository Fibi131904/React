import { profile } from "console"

import { dialogsReducer } from './dialogs-reducer'
import  sidebarReducer  from './sidebar-reducer'




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'Hi, how are you?', likesCount: 20 }
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Petya' },
                { id: 2, name: 'Vera' },
                { id: 3, name: 'Seva' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Kolya' }
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Very well' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'you?' }
            ],
        },
        newMessageBody: ''
    },
    sidebar: {
        frends: [
            { id: 1, name: 'Petya' },
            { id: 2, name: 'Vera' },
            { id: 3, name: 'Seva' },

        ]
    }
},
    _callSubscriber() {
        console.log('state is changed');
    },
        getState() {
    return this._state;
},
subscribe(observer: () => void) {
    this._callSubscriber = observer
},

dispatchEvent(action: { type: string; }) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
}
}









export default store;

