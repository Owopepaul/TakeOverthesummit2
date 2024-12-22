"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const VideoStream = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startStream = () => {
    console.log("Starting video stream...");
    setIsStreaming(true);
  };

  const stopStream = () => {
    console.log("Stopping video stream...");
    setIsStreaming(false);
  };

  useEffect(() => {
    return () => {
      console.log("Component unmounting: Cleaning up video stream...");
      stopStream();
    };
  }, []);

  return (
    <Container>
      <Background>
        <Overlay />
      </Background>
      <Content>
        <Header>Global Harvest TakeOver the Summit 2025</Header>
        <VideoContainer ref={videoRef} isStreaming={isStreaming}>
          {isStreaming ? (
            <>
              <StreamPlaceholder>Stream is ON</StreamPlaceholder>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3rMkaMEgDJI?si=jBhgrmCc_Kb9Pg4Z"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </>
          ) : null}
        </VideoContainer>
        <ButtonContainer>
          <ControlButton onClick={startStream} disabled={isStreaming}>
            Start Stream
          </ControlButton>
          <ControlButton onClick={stopStream} disabled={!isStreaming}>
            Stop Stream
          </ControlButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://source.unsplash.com/random/1920x1080?nature") center/cover
    no-repeat;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.6);
`;

const VideoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  height: 450px;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.5s ease, background 0.3s ease;

  ${({ isStreaming }) =>
    isStreaming
      ? `
    transform: scale(1.05);
    background: rgba(0, 255, 0, 0.1);
  `
      : `
    background: rgba(255, 0, 0, 0.1);
  `}
`;

const StreamPlaceholder = styled.div`
  color: white;
  font-size: 1.5em;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background: ${({ disabled }) => (disabled ? "#555" : "#2575fc")};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#555" : "#6a11cb")};
  }
`;

export default VideoStream;
