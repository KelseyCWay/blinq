import { Field, FieldArray } from "formik";
import { IntegrationField } from "../../types";
import { Button } from "../Button";
import { Label } from "../Label";
import styles from "./IntegrationFieldMapperDynamic.module.css";

interface IntegrationFieldMapperProps {
  title: string;
  subtitle: string;
  name: string;
  arrayName: string;
  children?: IntegrationField[];
}

export const IntegrationFieldMapperDynamic = ({
  title,
  subtitle,
  arrayName,
  children,
}: IntegrationFieldMapperProps) => (
  <FieldArray name={arrayName}>
    {({ remove, push }) => {
      return (
        <>
          <Label>{title}</Label>
          <div className={styles.container}>
            <span className={styles.subtitle}>{subtitle}</span>
          </div>
          {children && children?.length > 0
            ? children?.map((mapItem, mapIndex) => (
                <div key={mapIndex} className={styles.container}>
                  <div>
                    <Field
                      className={styles.map}
                      name={arrayName + "." + mapIndex + ".name"}
                      placeholder={"Blinq Field"}
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <Field
                      className={styles.map}
                      name={arrayName + "." + mapIndex + ".value"}
                      placeholder={`${name} Field`}
                      required
                      type="text"
                    />
                  </div>
                  <Button type="button" onClick={() => remove(mapIndex)}>
                    Remove
                  </Button>
                </div>
              ))
            : null}
          <div className={styles.container}>
            <Button type="button" onClick={() => push({ name: "", value: "" })}>
              Add
            </Button>
          </div>
        </>
      );
    }}
  </FieldArray>
);
