import React from 'react';
import { ActionType, addPostAC, ProfilePageType, updateNewPostTextAC } from '../../../redux/store';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

type MyPostPropsType={
  dispatchEvent:(action: ActionType)=>void
  profilePage: ProfilePageType 
}

const MyPosts = (props: MyPostPropsType) => {
  let postElements =
    props.profilePage.posts.map(el=><Post id= {el.id} message={ el.message} likeCount={el.likesCount}/>)

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
      if (newPostElement.current){
        const text= newPostElement.current.value
        props.dispatchEvent(addPostAC(text))
      }
  }

  const onPostChange = () => {
    if (newPostElement.current){
      const text= newPostElement.current.value
      props.dispatchEvent(updateNewPostTextAC(text))
    }
}

  return (
    <div className={classes.postsBlock}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>
  )
}


export default MyPosts;

