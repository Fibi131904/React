import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {  Route, Routes  } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';






function App(props:any) {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'Hi, how are you?', likesCount: 20 }
  ]
  return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element={<Dialogs state={props.state.dialogePage} />} />
        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
          dispatchEvent={props.dispatchEvent} />} />
      </Routes>
    </div>

   
  )
}
 
 
//  const News = () => {
//       return (
//      <div>
//        News
//      </div>
//    )
//  }
//  const Music = () => {
//    return (
//      <div>
//        Music
//      </div>
//    )
//  }
//  const Settings = () => {
//    return (
//      <div>
//        Settings
//      </div>
//    )
//  }



export default App;







