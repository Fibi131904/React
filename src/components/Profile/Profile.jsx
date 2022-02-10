import React from 'react';
import MyPosts from './MyPost/Posts/MyPosts';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';




const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );

}

export default Profile;