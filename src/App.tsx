import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {  Route, Routes  } from 'react-router-dom';
import { Profile } from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<DialogsContainer />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
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







