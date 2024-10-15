import React from 'react';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <div>
      <h1>Hello Vite + React!</h1>
      <br/>
      <VideoPlayer src='http://localhost:8000/live/test.flv'/>
    </div>
  );
}

export default App;
