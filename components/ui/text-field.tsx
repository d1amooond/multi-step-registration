import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';
import React from 'react';

interface TextFieldProps
  extends Omit<MUITextFieldProps, 'error' | 'helperText'> {
  error?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ error, ...props }) => {
  return (
    <MUITextField
      fullWidth
      margin="normal"
      variant="outlined"
      error={!!error}
      helperText={error || ' '}
      sx={{
        mb: 2,
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
      {...props}
    />
  );
};
