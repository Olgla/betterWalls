import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "60px" : "40px"};
  height: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "60px" : "40px"};
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--color-burgundy);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-left: 1rem;
  color: var(--color-burgundy);
  font-weight: 500;
`;

const LoadingSpinner = ({
  size = "medium",
  text = "Loading...",
  showText = true,
}) => {
  return (
    <SpinnerContainer>
      <Spinner size={size} />
      {showText && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
