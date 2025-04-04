'use client';

import { Container, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import AccountDetailsForm from '@/components/registration/account-details-form';
import AddressDetailsForm from '@/components/registration/address-details-form';
import RegistrationStepper from '@/components/registration/registration-stepper';
import ReviewForm from '@/components/registration/review-form';
import UserDetailsForm from '@/components/registration/user-details-form';
import { RegistrationSteps } from '@/enums';
import { useRegistrationStore } from '@/stores/registration.store';

export default function Home() {
  const { currentStep, isFormComplete } = useRegistrationStore();
  const router = useRouter();

  useEffect(() => {
    if (isFormComplete) {
      router.push('/success');
    }
  }, [isFormComplete, router]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case RegistrationSteps.UserDetails:
        return <UserDetailsForm />;
      case RegistrationSteps.AddressDetails:
        return <AddressDetailsForm />;
      case RegistrationSteps.AccountDetails:
        return <AccountDetailsForm />;
      case RegistrationSteps.Review:
        return <ReviewForm />;
      default:
        return <UserDetailsForm />;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ width: '100%', mb: 4 }}>
        <RegistrationStepper activeStep={currentStep} />
      </Box>
      {renderCurrentStep()}
    </Container>
  );
}
