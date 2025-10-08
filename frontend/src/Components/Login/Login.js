import React from 'react'
import axios from 'axios'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('email is required').email('invalid email format'),
            password: Yup.string().required('password is required'),
        }),

        onSubmit: async (values) => {
            const { email, password } = values;
            try {
                const res = await axios.post('http://localhost:3001/login', { email, password });

              
                    localStorage.setItem('token', res.data.token);

                navigate('/home')
            } catch (err) {
                console.error('Invalid credentials');
            }
        },
    });

    return (
        <div>
            <div className='container mt-5'>
                <div className='card-body'>
                    <h3 className='card-title text-center mb-4'>Login</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-3'>
                            <label text='email' className='form-label'>Email</label>
                            <input type="text"
                                id='email'
                                name='email'
                                className={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.errors.email && formik.touched.email && (
                                <div className='invalid-feedback'>{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label text="password" className="form-label">Password</label>
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

                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            Login
                        </button>
                        <div className="text-center">
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login