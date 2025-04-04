import { Box, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, FormCard, TextField } from '@/components/ui';
import { useRegistrationStore } from '@/stores/registration.store';
import { FormErrors } from '@/types/registration';
import { showZodErrors } from '@/utils/validation/errors';
import { registrationAddressSchema } from '@/utils/validation/registration';

const AddressDetailsForm: React.FC = () => {
  const { addressDetails, updateAddressDetails, nextStep, prevStep } =
    useRegistrationStore();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState(addressDetails);

  useEffect(() => {
    setFormData(addressDetails);
  }, [addressDetails]);

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
      registrationAddressSchema.parse(formData);

      updateAddressDetails(formData);
      nextStep();
    } catch (error) {
      showZodErrors(error, setErrors);
    }
  };

  return (
    <FormCard title="Address Details">
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Street Address"
          name="street"
          value={formData.street}
          onChange={handleChange}
          error={errors.street}
          required
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          required
        />
        <TextField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
          required
        />
        <TextField
          label="ZIP Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          error={errors.zipCode}
          required
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
          <Button type="submit">Next</Button>
        </Stack>
      </Box>
    </FormCard>
  );
};

export default AddressDetailsForm;
