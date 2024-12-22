import React from 'react';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import StreamControls from '../components/StreamControls';
import styles from '../styles/HomePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.content}> 
          <h1>Welcome to Global Harvest TakeOver the Summit 2025</h1> 
          <p>Enjoy the event live from the comfort of your home.</p> 
        </div> 
    </div> 
    );
        
};
  const handleStart = () => {
    console.log("Start streaming...");
  };

  const handleStop = () => {
    console.log("Stop streaming...");
  };

  const handleMute = () => {
    console.log("Mute...");
  };

  const handleUnmute = () => {
    console.log("Unmute...");
  };

  return (
    
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <VideoPlayer />
        <StreamControls 
          onStart={handleStart} 
          onStop={handleStop} 
          onMute={handleMute} 
          onUnmute={handleUnmute} 
        />
      </main>
    </div>
    
  );


export default HomePage;
