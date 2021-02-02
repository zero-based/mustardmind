import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { InputField, InputFieldProps } from "../inputField/InputField";
import { Form, Formik, FormikErrors } from "formik";
import { Button } from "../button/Button";

export default {
  title: "Mauinz/InputField",
  component: InputField,
} as Meta;

interface MyFormValues {
  firstName: string;
}

const Template: Story<InputFieldProps> = (args) => {
  const initialValues: MyFormValues = { firstName: '' };

  function validateForm(values: MyFormValues): FormikErrors<MyFormValues> {
    let errors: FormikErrors<MyFormValues> = {};
    if (args.isRequired) {
      if (!values.firstName) {
        errors.firstName = "";
      } else if (values.firstName.toLowerCase() !== "zerobased") {
        errors.firstName = 'Invalid name';
      }
    }
    return errors;
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000);
        }}
        validate={validateForm}>
        {(props) =>
        (<Form>
          <InputField {...args} />
          <Button mt={4} type="submit" isLoading={props.isSubmitting}>Submit</Button>
        </Form>)
        }
      </Formik>
    </div>
  );
};

export const InputFiledWithLabel = Template.bind({});
InputFiledWithLabel.args = { name: "firstName", label: "First Name", isRequired: true, inputProps: { placeholder: "First Name" } };
