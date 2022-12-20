import React from 'react';
import './App.css';
import Channels from './components/channels';
import Messages from './components/messages';

function App() {
  return (
    <div className="App">
      <Channels/>
      <Messages/>
    </div>
  );
}

export default App;
