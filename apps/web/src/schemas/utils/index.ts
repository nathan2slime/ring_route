import { FieldErrors } from 'react-hook-form';
import { ReactNode } from 'react';

export const messages = {
  required: 'Field required',
  invalid: 'Field is invalid',
};

export const getErrorMessage = (
  errors: FieldErrors<Record<string, any>>,
  field: string,
): { message: ReactNode; error: boolean } => {
  const error = errors[field];

  return { message: (error ? error.message : '') as string, error: !!error };
};
