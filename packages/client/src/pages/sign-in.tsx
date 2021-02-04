import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { CredentialsInput, useLoginMutation } from "../generated/codegen";
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

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

const SignIn: React.FC<{}> = () => {
  const router = useRouter();
  const toast = useToast();
  const [login] = useLoginMutation();
  const initialValues: CredentialsInput = {
    email: "",
    password: "",
  };

  return (
    <Center flexDirection="column" h="100vh">
      <Heading>Sign In</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: {
              input: {
                email: values.email, password: values.password
              }
            },
          });

          if (response.data?.login.__typename !== "User") {
            if (response.data?.login.__typename === "FieldsValidationError") {
              var errorMap = toErrorMap(response.data?.login.fieldErrors);
              setErrors(errorMap);
            } else {
              toast({
                title: response.data?.login.message,
                description: "Unable to sign in. 😢",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
            }
          } else {
            toast({
              title: "Signed in successfully. 🚀💯",
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
            <Button mt={4} type="submit" isLoading={props.isSubmitting}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Center>
  );
};

export default SignIn;
