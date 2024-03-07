import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactsSlice';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required'),
        number: Yup.string()
          .min(3, 'Too short!')
          .max(50, 'Too long!')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(addContact(values));
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
          <Field name="name" type="text" className={styles.input} />
        </label>
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number" className={styles.label}>
          Number
          <Field name="number" type="text" className={styles.input} />
        </label>
        <ErrorMessage name="number" component="div" />

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
