import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Stack, IconButton, InputAdornment } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, FormCard, TextField } from '@/components/ui';
import { useRegistrationStore } from '@/stores/registration.store';
import { FormErrors } from '@/types/registration';
import { showZodErrors } from '@/utils/validation/errors';
import { registrationAccountSchema } from '@/utils/validation/registration';

const AccountDetailsForm: React.FC = () => {
  const { accountDetails, updateAccountDetails, nextStep, prevStep } =
    useRegistrationStore();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState(accountDetails);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setFormData(accountDetails);
  }, [accountDetails]);

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

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      registrationAccountSchema.parse(formData);

      updateAccountDetails(formData);
      nextStep();
    } catch (error) {
      showZodErrors(error, setErrors);
    }
  };

  return (
    <FormCard title="Account Details">
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          required
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
          <Button type="submit">Review</Button>
        </Stack>
      </Box>
    </FormCard>
  );
};

export default AccountDetailsForm;
