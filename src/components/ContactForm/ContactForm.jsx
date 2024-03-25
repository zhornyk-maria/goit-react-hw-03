import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from './ContactForm.module.css';

const initialValues = {
  name: "",
  number: ""
}

const MIN_CHAR_VALIDATION = 3;
const MAX_CHAR_VALIDATION = 50;

const contactFormSchema = yup.object({
  name: yup.string().min(MIN_CHAR_VALIDATION, "Too Short!").max(MAX_CHAR_VALIDATION).required("Required"),
  number: yup.string().min(MIN_CHAR_VALIDATION, "Too Short!").max(MAX_CHAR_VALIDATION).required("Required").matches(/^[0-9]+$/, "Phone number must contain only digits"),
});

const ContactForm = ({handleSubmit}) => {
  
  return (

      <Formik initialValues={initialValues} validationSchema={contactFormSchema} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" className={css.input} />
        <ErrorMessage component="p" name="name" className={css.errorMessage} />
          <label htmlFor="number">Number</label>
          <Field type="tel" id="number" name="number" className={css.input} />
          <ErrorMessage component="p" name="number" className={css.errorMessage}/>
          <button type="submit" className={css.button}>Add contact</button>
        </Form>
    </Formik>
    
  );
};

export default ContactForm;