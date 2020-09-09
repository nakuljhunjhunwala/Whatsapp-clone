import React from 'react';
import './App.css';
import './components/Sidebar.jsx'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
     <div className="app__body">
        <Sidebar></Sidebar>
        <Chat/>
     </div>
    </div>
  );
}

export default App;
