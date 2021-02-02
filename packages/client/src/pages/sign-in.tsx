import React from "react";

import {
  Formik,
  Center,
  Button,
  Form,
  InputField,
  Heading,
} from "@mustardmind/mauinz";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn: React.FC<{}> = () => {
  const initialValues: SignInFormValues = { email: "", password: "" };
  return (
    <Center flexDirection="column" h="100vh">
      <Heading>Sign In</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
