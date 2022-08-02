import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Please Enter Product Name').nullable(),
  avatar: Yup.string().required('Please Enter Image URL').nullable(),
  developerEmail: Yup.string().required('Please Enter Developer Email').nullable(),
  price: Yup.string().required('Please Enter Price').nullable(),
  category: Yup.string().required('Please Select Category').nullable(),
  description: Yup.string().required('Please Enter Description').nullable(),
});
