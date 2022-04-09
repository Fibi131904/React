import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {  Route, Routes  } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import { ActionType, StateType } from './components/redux/store';




type PropsType={
  state: StateType
  dispatchEvent:(action: ActionType)=>void
  

}

function App(props:PropsType) {
   return (
   
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element={<Dialogs DialogsPage={props.state.dialogsPage}  dispatchEvent={props.dispatchEvent}/>} />
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







