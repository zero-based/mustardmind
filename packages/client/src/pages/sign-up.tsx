import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useCreateUserMutation, UserInput } from "../generated/codegen";
import {
  Formik,
  Center,
  Button,
  Form,
  InputField,
  Heading,
  useToast,
} from "@mustardmind/mauinz";
import { toErrorMap } from "src/util/toErrorMap";

const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string().min(11).max(11).required("Required"),
});

const SignUp: React.FC<{}> = () => {
  const router = useRouter();
  const toast = useToast();
  const [creatUser] = useCreateUserMutation();
  const initialValues: UserInput = {
    email: "",
    password: "",
    name: "",
    phone: "",
  };

  return (
    <Center flexDirection="column" h="100vh">
      <Heading>Sign Up</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await creatUser({
            variables: {
              input: {
                email: values.email,
                password: values.password,
                name: values.name,
                phone: values.phone,
              }
            },
          });

          if (response.data?.createUser.__typename !== "User") {
            if (response.data.createUser.__typename === "FieldsValidationError") {
              var errorMap = toErrorMap(response.data.createUser.fieldErrors);
              setErrors(errorMap);
            } else {
              toast({
                title: response.data?.createUser.message,
                description: "Unable to create user account. 😢",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
            }
          } else {
            toast({
              title: "Account created. 🧠💯",
              description: "We've created your account for you. 🚀",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            router.push("/dashboard");
          }
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="email"
              label="Email"
              inputProps={{ placeholder: "user@mail.com", width: "100vh" }}
            />
            <InputField
              name="password"
              label="Password"
              inputProps={{ placeholder: "password", type: "password" }}
            />
            <InputField
              name="name"
              label="Full Name"
              inputProps={{ placeholder: "Full name", width: "100vh" }}
            />
            <InputField
              name="phone"
              label="Phone"
              inputProps={{ placeholder: "01XXXXXXX", width: "100vh" }}
            />
            <Button mt={4} type="submit" isLoading={props.isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default SignUp;
