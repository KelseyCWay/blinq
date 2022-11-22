import { Field } from "formik";
import React from "react";
import { Label } from "../Label";
import styles from "./Input.module.css";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}
export const Input = (props: InputProps) => (
  <React.Fragment key={props?.key ? props?.key : undefined}>
    <Label htmlFor={props?.name}>
      {props.label ? `${props.label}` : props?.name}
    </Label>
    <Field
      {...props}
      type="text"
      className={
        props?.className ? `${styles.field} ${props?.className}` : styles.field
      }
    />
  </React.Fragment>
);
