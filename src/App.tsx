import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/MyPost/Posts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';







function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />
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







