// import React from 'react';
import '../styles/Button.css'; // Import the styles

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'left' | 'right' | 'primary';
}

const Button = ({ text, onClick, variant }: ButtonProps) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
