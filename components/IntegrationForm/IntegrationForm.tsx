import { Integration } from "../../types";
import styles from "./IntegrationForm.module.css";
import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "../Button";
import { Toggle } from "../Toggle/Toggle";
import { Input } from "../Input/Input";
import { IntegrationFieldMapper } from "../IntegrationFieldMapper";

interface IntegrationFormProps {
  integration: Integration;
  handleSubmit: ((
    values: Integration,
    formikHelpers: FormikHelpers<Integration>
  ) => void | Promise<any>) &
    ((values: Integration) => void);
}

export const IntegrationForm = ({
  integration,
  handleSubmit,
}: IntegrationFormProps) => {
  return (
    <Formik
      initialValues={integration}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values }) => (
        <Form>
          <div className={styles.container}>
            <Toggle name="isConnect" />
            <label className={styles.check}> Connected?</label>
          </div>
          {values.fields.map((field, index) => {
            const fieldName = `fields.${index}`;
            return (
              <div key={field.id} className={styles.container}>
                {field?.isMap ? (
                  <IntegrationFieldMapper
                    title={field.displayName}
                    subtitle="Please map each Blinq contact field to a field in your integration."
                    name={integration.name}
                    children={field?.children}
                    arrayName={`${fieldName}.children`}
                  />
                ) : (
                  <Input
                    name={`${fieldName}.value`}
                    required={integration?.isConnect}
                    label={field?.displayName}
                    placeholder={field?.displayName}
                    type="text"
                  />
                )}
              </div>
            );
          })}

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
