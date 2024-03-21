import { Formik, Form, Field } from "formik";
import css from './ContactForm.module.css';

const initialValues = {
  name: "",
  number: ""
}

const ContactForm = ({handleSubmit}) => {
  
  return (

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field type="text" name="name" required/>
          <Field type="tel" name="number" required/>
          <button type="submit">Add contact</button>
        </Form>
    </Formik>
    
  );
};

export default ContactForm;