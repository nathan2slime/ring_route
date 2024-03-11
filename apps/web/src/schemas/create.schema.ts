import * as yup from 'yup';

import { messages } from '@/schemas/utils';

export const client = yup.object().shape({
  name: yup.string().required(messages.required),
  phone: yup.string().min(17, messages.required).required(messages.required),
  email: yup.string().email(messages.invalid).required(messages.required),
  latitude: yup.number().required(messages.required),
  longitude: yup.number().required(messages.required),
});
