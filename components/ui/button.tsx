import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import React from 'react';

interface ButtonProps extends MUIButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <MUIButton
      variant="contained"
      sx={{
        py: 1.2,
        px: 3,
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 'bold',
      }}
      {...props}
    >
      {children}
    </MUIButton>
  );
};
