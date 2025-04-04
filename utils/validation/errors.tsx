import { z } from 'zod';
import { FormErrors } from '@/types/registration';

export const showZodErrors = (
  error: unknown,
  setErrors: (errors: FormErrors) => void,
) => {
  if (error instanceof z.ZodError) {
    const newErrors: FormErrors = {};
    error.errors.forEach((err) => {
      const path = err.path[0] as string;
      newErrors[path] = err.message;
    });
    setErrors(newErrors);
  }
};
