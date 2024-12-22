"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoStream: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    const initializeStream = () => {
      console.log("Initializing video stream...");
      setIsStreaming(true);
    };

    if (typeof window !== "undefined") {
      initializeStream();
    }

    return () => {
      console.log("Cleaning up video stream...");
    };
  }, []);

  return (
    <Container>
      <Header>Global Harvest TakeOver the Summit 2025</Header>
      <VideoContainer $isStreaming={isStreaming}>
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
  background: linear-gradient(135deg, #6a11cb 0%, rgb(245, 115, 64) 100%);
`;

const Header = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const VideoContainer = styled.div<{ $isStreaming: boolean }>`
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

  ${({ $isStreaming }) =>
    $isStreaming &&
    `
    background: none;
  `}
`;

const StreamPlaceholder = styled.div`
  color: #fff;
  font-size: 1.5em;
  text-align: center;
`;

export default VideoStream;
