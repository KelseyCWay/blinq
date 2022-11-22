import { Field, FieldArray } from "formik";
import { IntegrationField } from "../../types";
import { Label } from "../Label";
import styles from "./IntegrationFieldMapper.module.css";

interface IntegrationFieldMapperProps {
  title: string;
  subtitle: string;
  name: string;
  arrayName: string;
  children?: IntegrationField[];
}
export const IntegrationFieldMapper = ({
  title,
  subtitle,
  name,
  arrayName,
  children,
}: IntegrationFieldMapperProps) => {
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
                <span className={styles.contact}>{mapItem?.displayName}</span>
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
            </div>
          ))
        : null}
      <div className={styles.container}></div>
    </>
  );
};
