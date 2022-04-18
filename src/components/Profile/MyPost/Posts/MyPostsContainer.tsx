import React from 'react';
import { StoreContex } from '../../../../StoreContex';
import store, { updateNewPostTextAC } from '../../../redux/store';
import MyPosts from './MyPosts';




const MyPostsContainer = () => {
  

  return (
    <StoreContex.Consumer>
      {store => {
        let state = store.getState()
        let addPost = () => {
          store.dispatchEvent(props.addPostAC())
        }
      
      
        const onPostChange = () => {
          let action = updateNewPostTextAC(text)
          store.dispatch(action)
        }
        return <MyPosts updateNewPostText={onPostChange}
          addPost={addPost}
          posts={store.getState().profilePage.posts}
          newPostText={store.getState().profilePage.newPostText} />
      }
      }
    </StoreContex.Consumer>

  )
}


export default MyPostsContainer;

