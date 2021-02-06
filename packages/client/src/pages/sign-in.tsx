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
  Grid,
  GridItem,
  Box,
  Image
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
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={[0, 4]}>
      <GridItem colSpan={[2, 1]} rowSpan={[1, 2]}>
        <Box padding={[8, 16]}>
          <Heading as="h2" size="lg" mb={4}>Sign In</Heading>
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
                <Center flexDirection="column">
                  <InputField
                    name="email"
                    label="Email"
                    inputProps={{ placeholder: "user@mail.com" }}
                  />
                  <InputField
                    name="password"
                    label="Password"
                    inputProps={{ placeholder: "password", type: "password" }}
                  />
                  <Button mt={4} type="submit" isLoading={props.isSubmitting}>Sign In</Button>
                </Center>
              </Form>
            )}
          </Formik>
        </Box>
      </GridItem>
      <GridItem colSpan={[2, 1]} rowSpan={[1, 2]} bg={"black"}>
      </GridItem>
    </Grid>
  );
};

export default SignIn;
