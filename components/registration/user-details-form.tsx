import { Box, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, FormCard, TextField } from '@/components/ui';
import { useRegistrationStore } from '@/stores/registration.store';
import { FormErrors } from '@/types/registration';
import { showZodErrors } from '@/utils/validation/errors';
import { registrationUserSchema } from '@/utils/validation/registration';

const UserDetailsForm: React.FC = () => {
  const { userDetails, updateUserDetails, nextStep } = useRegistrationStore();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState(userDetails);

  useEffect(() => {
    setFormData(userDetails);
  }, [userDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      registrationUserSchema.parse(formData);

      updateUserDetails(formData);
      nextStep();
    } catch (error) {
      showZodErrors(error, setErrors);
    }
  };

  return (
    <FormCard title="Personal Details">
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          autoFocus
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{ mt: 4 }}
        >
          <Button type="submit">Next</Button>
        </Stack>
      </Box>
    </FormCard>
  );
};

export default UserDetailsForm;
