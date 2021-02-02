import { InputProps } from "@chakra-ui/react";
import { Input } from "../input/Input"
import { ExtendedFormControlProps } from "../form/FormControl";
import { useField } from "formik";
import { FormControl } from "../form/FormControl"

export type InputFieldProps = ExtendedFormControlProps & { inputProps?: InputProps };

export const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
    const { name, label, inputProps, ...rest } = props;
    const [field] = useField(name);
    return (
        <FormControl name={name} label={label} {...rest}>
            <Input {...field} id={name} {...inputProps} />
        </FormControl>
    );
};
