import React from 'react';
import { ActionType, ProfilePageType, StoreType } from '../redux/store';
import MyPostsContainer from './MyPost/Posts/MyPostsContainer';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';




 export const Profile = () => {
 
 
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  );

}

