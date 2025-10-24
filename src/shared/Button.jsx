import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  padding: ${(props) =>
    props.size === "small"
      ? "0.5rem 1rem"
      : props.size === "large"
      ? "1.2rem 2.5rem"
      : "1rem 2rem"};
  font-size: ${(props) =>
    props.size === "small"
      ? "0.9rem"
      : props.size === "large"
      ? "1.3rem"
      : "1.1rem"};
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 10px 10px rgb(39 23 28);
  border: 2px solid rgb(139 30 63 / 62%);
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  display: ${(props) => (props.fullWidth ? "block" : "inline-block")};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 15px 20px rgb(39 23 28);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border-color: #bdc3c7;
  }

  ${(props) =>
    props.variant === "outline" &&
    `
    background: transparent;
    color: var(--color-burgundy);
    border: 2px solid var(--color-burgundy);
    box-shadow: none;

    &:hover:not(:disabled) {
      background: var(--color-burgundy);
      color: white;
    }
  `}
`;

const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  size = "medium",
  variant = "primary",
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
