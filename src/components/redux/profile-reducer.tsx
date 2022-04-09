import { ProfilePageType, ActionType, PostType } from "./store";



export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD_POST':
            let newText = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newText);
            state.newPostText = '';
            return state;
        case 'UPDATE_NEW_POST_TEXT': {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

