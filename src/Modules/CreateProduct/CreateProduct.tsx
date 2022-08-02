import {useFormik, FormikProvider, Form} from 'formik';
import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import validationSchema from './validationSchema';
import FormTextField from '@/Components/Form/FormTextField';
import FormTextArea from '@/Components/Form/FormTextArea';
import FormNumberField from '@/Components/Form/FormNumberField';
import FormSelect from '@/Components/Form/FormSelect';
import {useAppDispatch, useAppSelector} from '@/Hooks/redux';
import {categoriesActions} from '@/Store/actions/CategoryActions';
import {productActions} from '@/Store/actions/ProductActions';

const CreateProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const categories = useAppSelector(
    (state) => state?.categories.categoriesListSuccess || []
  );
  const categoryOptions = categories.map(({name, _id}) => ({
    label: name,
    value: name,
  }));
  const onSubmitHandler = (formData) => {
    dispatch(productActions.createProductRequest({formData, history}));
    // history.push('/')
  };
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: onSubmitHandler,
  });
  useEffect(() => {
    dispatch(categoriesActions.categoriesListRequest());
  }, []);
  return (
    <div className="flex justify-center">
      <FormikProvider value={formik}>
        <Form translate="yes" className="w-9/12">
          <div className="grid grid-rows-6 grid-flow-col gap-4 justify-items-center">
            <FormTextField name="name" label="Product Name" />
            <FormTextArea name="description" label="Description" />
            <FormTextField name="avatar" label="Image URL" />
            <FormTextField name="developerEmail" label="Developer Email" />
            <FormSelect
              name="category"
              label="Category"
              options={categoryOptions}
            />
            <FormNumberField name="price" label="Price" />
          </div>
          <div className="grid grid-rows-6 grid-flow-col gap-4 justify-items-center">
            <button
              type="submit"
              disabled={
                !(formik.isValid && formik.dirty)
              }
              className="w-full md:w-1/2 h-16 px-3 mb-6 md:mb-0 bg-white shadow-2xl rounded-2xl font-size-2 text-2xl"
            >
              Create Product
            </button>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default CreateProduct;
