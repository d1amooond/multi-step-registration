import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonAddIcon sx={{ mr: 1, fontSize: 30 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              Multi Step Registration
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
