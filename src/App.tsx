import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/MyPost/Posts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';






function App(props:any) {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'Hi, how are you?', likesCount: 20 }
  ]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        
        <Routes>
          <Route path='/profile' element = {<Profile post={props.posts}/>} />
          <Route path='/dialogs' element={<Dialogs dialog={props.dialogs} messages={props.messages} />} />
          <Route path='/nems' element={<News />} />
        </Routes>
        </div>
     
   </BrowserRouter>
  )
}
 
 
 const News = () => {
      return (
     <div>
       News
     </div>
   )
 }
 const Music = () => {
   return (
     <div>
       Music
     </div>
   )
 }
 const Settings = () => {
   return (
     <div>
       Settings
     </div>
   )
 }



export default App;







