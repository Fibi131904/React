import React from 'react';
import MyPosts from './MyPost/Posts/MyPosts';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';




const Profile = (props:any) => {
 
 
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  );

}

export default Profile;