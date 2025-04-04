import React from 'react';
import { Stepper } from '@/components/ui';
import { RegistrationSteps } from '@/enums';

interface RegistrationStepperProps {
  activeStep: number;
}

const RegistrationStepper: React.FC<RegistrationStepperProps> = ({
  activeStep,
}) => {
  const steps = [
    { label: 'Personal Details', value: RegistrationSteps.UserDetails },
    { label: 'Address Details', value: RegistrationSteps.AddressDetails },
    { label: 'Account Details', value: RegistrationSteps.AccountDetails },
    { label: 'Review', value: RegistrationSteps.Review },
  ];

  return <Stepper steps={steps} activeStep={activeStep} />;
};

export default RegistrationStepper;
