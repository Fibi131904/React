import React from 'react';
import classes from './Post.module.css';

const Post = (props:any) => {


  return (
    <div className={classes.item}>

      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJvhy5UZydnuINKstMgWueGPTAIsKhSS8iA&usqp=CAU' />
      {props.message} 
      <div>
        <span> like </span> { props.likesCount }
      </div>
      

    </div>



  )

}

export default Post;