import {
    FormControl as ChakraFormControl,
    FormControlProps as ChakraFormControlProps,
    FormErrorMessage,
    FormLabel,
} from '@chakra-ui/react';
import { useField } from 'formik';

export interface ExtendedFormControlProps extends ChakraFormControlProps {
    name: string;
    label?: string;
  }
  
export const FormControl: React.FC<ExtendedFormControlProps> = ({ ...props }) => {
    const { children, name, label, my = 4, ...rest } = props;
    const [, { error, touched }] = useField(name);

    return (
        <ChakraFormControl isInvalid={!!error && touched} my={my} {...rest}>
            {label && <FormLabel htmlFor={name} mx={1} fontFamily="Comfortaa">{label}</FormLabel>}
            {children}
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </ChakraFormControl>
    );
};
