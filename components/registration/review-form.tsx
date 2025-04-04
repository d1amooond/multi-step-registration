import { Box, Stack, Typography, Grid, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import ReviewSection from '@/components/registration/review-section';
import { Button } from '@/components/ui/button';
import { FormCard } from '@/components/ui/form-card';
import { useRegistrationStore } from '@/stores/registration.store';
import {
  RegistrationAccountDetails,
  RegistrationAddressDetails,
  RegistrationUserDetails,
} from '@/types/registration';

const ReviewForm: React.FC = () => {
  const router = useRouter();
  const {
    userDetails,
    addressDetails,
    accountDetails,
    prevStep,
    completeForm,
  } = useRegistrationStore();

  const handleSubmit = () => {
    completeForm();
    router.push('/success');
  };

  return (
    <FormCard title="Review Your Information">
      <Box>
        <ReviewSection title="Personal Details" data={userDetails} />
        <Divider sx={{ my: 2 }} />

        <ReviewSection title="Address Details" data={addressDetails} />
        <Divider sx={{ my: 2 }} />

        <ReviewSection
          title="Account Details"
          data={{
            username: accountDetails.username,
            password: accountDetails.password,
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Button variant="outlined" onClick={prevStep}>
            Back
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </FormCard>
  );
};

export default ReviewForm;
