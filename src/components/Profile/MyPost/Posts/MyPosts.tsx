import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';



const MyPosts = (props: any) => {
  let postElements =
    props.posts.map((p: { message: any; likesCount: any; }) => <Post Message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
       props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
       let text = newPostElement.current?.value
       //props.updateNewPostText(text)
      let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)

  }


  return (
    <div className={classes.postsBlock}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
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

