import s from './BookingForm.module.css'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
    name: '',
    email: '',
    date: null,
    comment: ''
}

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    date: Yup.date()
        .required('Booking date is required')
        .min(new Date(), 'Booking date cannot be in the past'),
    comment: Yup.string()
});

const MyDateField = ({ field, form }) => {
    return (
        <DatePicker
            {...field}
            selected={field.value}
            onChange={date => form.setFieldValue(field.name, date)}
            placeholderText="Booking date*"
            className={s.field}
            dateFormat="yyyy-MM-dd"
        />
    );
}

export default function BookingForm() {

    const handleSubmit = (values, { resetForm }) => {
        
        try {
            console.log(values);
            toast.success('Success!');
        } catch (error) {
            toast.error('Something went wrong');
            console.log(error);
            
        }   
        resetForm();
    }

    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form autoComplete="off" className={s.form}>
                <Field
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Name*'
                    className={s.field} />
                <ErrorMessage
                    name="name"
                    component="div"
                    className={s.error}
                />
                
                <Field
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email*'
                    className={s.field} />
                <ErrorMessage
                    name="email"
                    component="div"
                    className={s.error}
                />
                
                
                <Field name="date"
                    component={MyDateField} />
                <ErrorMessage
                    name="date"
                    component="div"
                    className={s.error}
                />
                
                <Field
                    name='comment'
                    id='comment'
                    type='text'
                    placeholder='Comment'
                    className={s.fieldComment} />
                <ErrorMessage
                    name="comment"
                    component="div"
                    className={s.error}
                />

                <button className={s.btn} type="submit">Send</button>
            </Form>
        </Formik>
    );
}
