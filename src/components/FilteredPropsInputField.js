import React from "react";
import { Field } from "formik";

function FilteredPropsInputField({ className, valid, error, ...props }) {
  return <input className={className} {...props} />;
}

export default FilteredPropsInputField;