import React from 'react';
import './App.css';
import ChannelProfile from './components/channelProfile';
import Channels from './components/channels';
import Messages from './components/messages';

function App() {
  return (
    <div className="App">
      <Channels/>
      <Messages/>
      <ChannelProfile/>
    </div>
  );
}

export default App;
