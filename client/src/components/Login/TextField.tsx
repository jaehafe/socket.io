import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, FieldHookConfig, useField } from 'formik';

type TextFieldProps = FieldHookConfig<string> & {
  label: string;
};

function TextField({ label, ...props }: any) {
  const [field, meta] = useField(props);

  const isInvalid = meta.touched && meta.error ? true : false;

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input as={Field} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextField;
