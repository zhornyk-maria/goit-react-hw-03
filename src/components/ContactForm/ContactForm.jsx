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
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" className={css.input} required />
          <label htmlFor="number">Number</label>
          <Field type="tel" id="number" name="number" className={css.input} required/>
          <button type="submit" className={css.button}>Add contact</button>
        </Form>
    </Formik>
    
  );
};

export default ContactForm;