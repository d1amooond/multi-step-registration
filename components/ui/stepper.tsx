import {
  Box,
  Stepper as MUIStepper,
  Step as MUIStep,
  StepLabel,
} from '@mui/material';
import React from 'react';

interface StepperProps {
  activeStep: number;
  steps: { label: string; value: number }[];
}

export const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <MUIStepper activeStep={activeStep} alternativeLabel={true}>
        {steps.map((step) => (
          <MUIStep key={step.value}>
            <StepLabel>{step.label}</StepLabel>
          </MUIStep>
        ))}
      </MUIStepper>
    </Box>
  );
};
