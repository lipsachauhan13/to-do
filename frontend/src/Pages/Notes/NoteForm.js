import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function NoteForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.title) {
                errors.title = 'title is required';
            }
            if (!values.content) {
                errors.content = 'content is required';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                const token = localStorage.getItem('token'); 
                if (!token) {
                    alert('You must be logged in');
                    return;
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                const response = await axios.post('http://localhost:3001/notes/add', values, config);
                
                if (response.status === 201) {
                    alert('form submitted successfully');
                    navigate('/notelist');
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                alert('Failed to submit note');
            }
        },
    })

    return (
        <div>
            <Header/>
                <Sidebar/>

            <div className="container mt-5" >
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Notes Form</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className={`form-control ${formik.errors.title && formik.touched.title ? 'is-invalid' : ''}`}
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.title && formik.touched.title && (
                                <div className="invalid-feedback">{formik.errors.title}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">content</label>
                            <input
                                type="content"
                                id="content"
                                name="content"
                                className={`form-control ${formik.errors.content && formik.touched.content ? 'is-invalid' : ''}`}
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.content && formik.touched.content && (
                                <div className="invalid-feedback">{formik.errors.content}</div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>

                    </form>
                </div>
                
            </div>
        </div>

    )
}

export default NoteForm