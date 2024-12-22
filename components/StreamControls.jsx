import React from 'react';

const StreamControls = ({ onStart, onStop, onMute, onUnmute }) => {
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <button onClick={onStart} style={{ margin: '0 10px' }}>Start Stream</button>
      <button onClick={onStop} style={{ margin: '0 10px' }}>Stop Stream</button>
      <button onClick={onMute} style={{ margin: '0 10px' }}>Mute</button>
      <button onClick={onUnmute} style={{ margin: '0 10px' }}>Unmute</button>
    </div>
  );
};

export default StreamControls;
