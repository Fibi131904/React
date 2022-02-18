import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'Hi, how are you?', likesCount: 20 }
  ]
  let dialogs= [
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Vera'},
    {id: 3, name: 'Seva'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Kolya'}
  ]
  let messages= [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Very well'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'you?'}
  ]
  

ReactDOM.render(
  <React.StrictMode>
    <App post={posts}dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
