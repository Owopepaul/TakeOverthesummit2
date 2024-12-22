"use client";

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const initializeStream = async () => {
      // Replace with actual streaming logic
      console.log('Initializing video stream...');
      setIsStreaming(true);
      // Here you would have code to initialize the stream, for example:
      // const [microphoneTrack, cameraTrack] = await createMicrophoneAndCameraTracks();
      // cameraTrack.play(videoRef.current);
      // await client.publish([microphoneTrack, cameraTrack]);
    };

    initializeStream();

    return () => {
      // Clean up stream on component unmount
      console.log('Cleaning up video stream...');
      // client.leave(); // if using a service like Agora
    };
  }, []);

  return (
    <Container>
      <Header>Global Harvest TakeOver the Summit 2025 Live Stream</Header>
      <VideoContainer ref={videoRef} isStreaming={isStreaming}>
        {isStreaming ? (
          <StreamPlaceholder>Streaming Video...</StreamPlaceholder>
        ) : (
          <StreamPlaceholder>Loading...</StreamPlaceholder>
        )}
      </VideoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`;

const Header = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const VideoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  height: 500px;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: opacity 0.5s ease;

  ${({ isStreaming }) => isStreaming && `
    background: none;
  `}
`;

const StreamPlaceholder = styled.div`
  color: #fff;
  font-size: 1.5em;
  text-align: center;
`;

export default VideoPlayer;
