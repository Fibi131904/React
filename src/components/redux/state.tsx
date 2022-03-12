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

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Very well' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'you?' }
            ]
        },

        dialogs: [
            { id: 1, name: 'Petya' },
            { id: 2, name: 'Vera' },
            { id: 3, name: 'Seva' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Kolya' }
        ],
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
        if (action.type === 'ADD-Post') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE=NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

    








export default store;
