import React from 'react';
import styles from '../../styles/index/TransparentButton.module.css';

type TransparentButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const TransparentButton: React.FC<TransparentButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles['transparent-button']} ${className}`}>
      {children}
    </button>
  );
};

export default TransparentButton;
