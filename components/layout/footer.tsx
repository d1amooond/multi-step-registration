import { Box, Typography, Container } from '@mui/material';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 3, bgcolor: 'background.paper', mt: 'auto' }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} d1amooond/multi-step-registration | All
          Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};
