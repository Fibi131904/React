import React from 'react';
import { classicNameResolver } from 'typescript';
import classes from './Navbar.module.css';
    


  const Navbar = () => {
      return (
    <nav className='nav'>
        <div className={classes.item}>
          <a>Profile</a>
        </div>
        <div className={classes.item}>
          <a>Messages</a>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
        <div className={classes.item}>
          <a>Music</a>
        </div>
        <div className={classes.item}>
          <a>Settings</a>
        </div>
      </nav>
      )

 }



 export default Navbar;