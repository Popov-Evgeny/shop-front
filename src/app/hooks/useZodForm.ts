import { FieldValues, useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';

const useZodForm = <S extends ZodType, V extends FieldValues = z.infer<S>>(
  schema: S,
  useFormProps?: UseFormProps<V>,
) => {
  return useForm<V>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    ...useFormProps,
  });
};

export default useZodForm;
