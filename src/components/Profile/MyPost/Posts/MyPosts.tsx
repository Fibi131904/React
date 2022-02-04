import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

        </div>
        <div className={classes.posts}>
          <Post message= 'Hi, how are you?' likesCount = '15'/>
          <Post message= 'It is my first post' likesCount = '20'/>
         
          
          
            post 2
          </div>
        </div>
      

      )

 }

      export default MyPosts;