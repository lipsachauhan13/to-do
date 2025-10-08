import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
// import Header from '../Header/Header.js'

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = 'Username is required';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email is invalid';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = 'Confirm password is required';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log('Form Submitted Successfully', values);
            navigate('/login');
        },
    });

    return (
        <div>
            {/* <Header/> */}
        <div className="container mt-5" >
            <div className="card-body">
                <h3 className="card-title text-center mb-4">Register</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={`form-control ${formik.errors.username && formik.touched.username ? 'is-invalid' : ''}`}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.username && formik.touched.username && (
                            <div className="invalid-feedback">{formik.errors.username}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <div className="invalid-feedback">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`form-control ${formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <div className="invalid-feedback">{formik.errors.password}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`form-control ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'is-invalid' : ''}`}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>

                    <div className="text-center">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>

                </form>
            </div>
        </div>
        </div>
    );
}

export default Register;
