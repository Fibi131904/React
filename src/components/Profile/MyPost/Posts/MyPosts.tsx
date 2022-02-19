import React from 'react';
import { classicNameResolver } from 'typescript';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';



const MyPosts = (props:any) => {
  let postsElement = props.state.posts.map((p: { message: string; likesCount: number; }) => 
  <Post message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={classes.postsBlock}>
      <h3> My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
}


      export default MyPosts;