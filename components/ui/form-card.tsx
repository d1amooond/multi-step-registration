import { Paper, Typography, Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface FormCardProps {
  title: string;
  children: ReactNode;
}

export const FormCard: React.FC<FormCardProps> = ({ title, children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3,
        }}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};
