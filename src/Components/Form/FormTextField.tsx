import React, {FunctionComponent} from 'react';
import {Field} from 'formik';

export type FormTextFieldProps = {
  name: string;
  label: React.ReactNode;
  placeholder?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: string;
  helperText?: React.ReactNode;
  classNameName?: any;
  type?: string;
  required?: boolean;
  value?: string | number;
  onKeyDown?: (event) => void;
  onKeyUp?: (event) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  inputProps?: any;
  sizeAdjustable?: boolean;
  InputProps?: any;
};

const FormTextField: FunctionComponent<FormTextFieldProps> = ({
  name,
  disabled = false,
  helperText,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({field, meta}) => (
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         {rest.label}
        </label>
        <input  disabled={disabled} className={`shadow-2xl rounded-2xl appearance-none block w-full text-gray-700 border ${(meta.touched && meta.error) ? 'border-red-500' : ''} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} {...rest} {...field} />
        {(meta.touched && meta.error) && <p className="text-red-500 text-xs italic">{(meta.touched && meta.error) || helperText}</p>}
      </div>
      )}
    </Field>
  );
};

export default FormTextField;
