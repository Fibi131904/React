import React from 'react';
import { classicNameResolver } from 'typescript';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';


const MyPosts = () => {
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
        <Post message='Hi, how are you?' likesCount='15' />
        <Post message='It is my first post' likesCount='20' />
      </div>
    </div>
      )
 }


      export default MyPosts;