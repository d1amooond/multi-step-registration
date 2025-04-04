'use client';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRegistrationStore } from '@/stores/registration.store';

export default function SuccessPage() {
  const router = useRouter();
  const { isFormComplete, resetForm } = useRegistrationStore();

  useEffect(() => {
    if (!isFormComplete) {
      router.push('/');
    }
  }, [isFormComplete, router]);

  const handleStartNew = () => {
    resetForm();
    router.push('/');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <CheckCircleOutlineIcon
            color="success"
            sx={{ fontSize: 80, mb: 2 }}
          />
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Registration Complete!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 400, mx: 'auto' }}
          >
            Thank you for completing the registration process. Your account has
            been created successfully.
          </Typography>
        </Box>

        <Stack spacing={2} direction="column" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleStartNew}
            sx={{ py: 1.5 }}
          >
            Register Another User
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
