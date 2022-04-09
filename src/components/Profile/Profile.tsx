import React from 'react';
import { ActionType, ProfilePageType } from '../redux/store';
import MyPosts from './MyPost/Posts/MyPosts';
import ProfileInfo from './MyPost/ProfileInfo/ProfileInfo';

type MessagePropsType= {
  dispatchEvent:(action: ActionType)=>void
  profilePage: ProfilePageType
}


 export const Profile = (props: MessagePropsType) => {
 
 
  return (
    <div>
      <ProfileInfo/>
      <MyPosts profilePage={props.profilePage}
      dispatchEvent={props.dispatchEvent}/>
    </div>
  );

}

