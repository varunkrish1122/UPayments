import React, {FunctionComponent} from 'react';
import noop from 'lodash/noop';
import {Field, FieldProps} from 'formik';

export type option = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

type FormSelectProps = {
  name: string;
  label: string;
  options: option[];
  placeholder?: string;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  multiple?: boolean;
  classNameName?: any;
  required?: boolean;
  value?: string | number;
  onChangeHandler?: (id: string | number) => void;
  disabled?: boolean;
  style?: any;
};

export const defaultSelectProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
  marginThreshold: 0,
};

const FormSelect: FunctionComponent<FormSelectProps> = ({
  name,
  options,
  disabled = false,
  onChangeHandler = noop,
  helperText,
  ...rest
}) => {
  return (
    <Field name={name}>
      {({field, meta, form}: FieldProps) => {
        const changeHandler = (event) => {
          const value = event?.target?.value || '';
          form.setFieldValue(name, value);
          form.setTouched({[name]: true}, false);
          onChangeHandler && onChangeHandler(value);
        };
        return (
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              {rest.label}
            </label>
            <div className="relative">
              <select
                disabled={disabled}
                {...field}
                {...rest}
                className="block shadow-2xl rounded-2xl appearance-none w-full text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={changeHandler}
              >
                <option value="">Please Select</option>
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option?.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {meta.touched && meta.error && (
              <p className="text-red-500 text-xs italic">
                {(meta.touched && meta.error) || helperText}
              </p>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default FormSelect;
