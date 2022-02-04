import React from 'react';
import MyPosts from './MyPost/Posts/MyPosts';
import classes from './Profile.module.css';

 const Profile = () => {
   return (

<div className= {classes.content}>
  <img src='https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg' />

  <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2yuHuE_KiWXOfDSMKzBFbAFiolnyJ9gtbQ&usqp=CAU' />
    ava+ description
  </div>
  <MyPosts/>
</div>
   );

 }

 export default Profile;