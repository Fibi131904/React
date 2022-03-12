import store from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (state: { profilePage: { posts: { id: number; message: string; likesCount: number; }[]; newPostText: string; }; dialogsPage: { messages: { id: number; message: string; }[]; }; dialogs: { id: number; name: string; }[]; sidebar: { frends: { id: number; name: string; }[]; }; }) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatchEvent={store.dispatchEvent.bind(store)} />
        </ BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


