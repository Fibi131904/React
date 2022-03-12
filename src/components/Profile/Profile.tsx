import React from 'react';
import MyPosts from './MyPost/Posts/MyPosts';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';




 export const Profile = (props:any) => {
 
 
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}addPost={props.addPost}
      newPostText={props.profilePage.newPostText} dispatchEvent={props.dispatchEvent}/>
    </div>
  );

}

