import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavigateFunction, useNavigate, Navigate } from "react-router-dom";

type Props = {};

interface MyFormValues {
    email: string;
    password: string;
}

const LoginForm: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();
    const loggedIn = localStorage.getItem('email');
    console.log(loggedIn);
    

    useEffect(() => {
        if (loggedIn) {
            // setTimeout(() => {
                // window.location.reload();
                navigate('/');
            // }, 2000);
        }
    }, [loggedIn]);


    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: MyFormValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Inavlid Email").required("Email is Required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
    });

    const handleLogin = (values: MyFormValues, { resetForm }: { resetForm: () => void }) => {
        const { email } = values;
        localStorage.setItem('email', email);
        setMessage("");
        setLoading(true);
        navigate("/");
        // setTimeout(() => {
        //     console.log('tst');
        // }, 3000);
            
        resetForm();
    };

    return (
        <div>
            <h1>Welcome, Login here...1</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => handleLogin(values, { resetForm })}
            >
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit">{loading ? 'Logging in...' : 'Login'}</button>
                    {message && <p>{message}</p>}
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;