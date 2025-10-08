import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

function TaskForm() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            dueDate: '',
            isCompleted: false,
            category: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.title) {
                errors.title = 'title is required';
            }
            if (!values.description) {
                errors.content = 'description is required';
            }
            if (!values.dueDate) {
                errors.content = 'dueDate is required';
            }
    
            if (!values.category) {
                errors.content = 'category is required';
            }

            return errors;
        },
        onSubmit: async (values) => {
           try{
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

                const response = await axios.post('http://localhost:3001/task/add', values, config);
                
                if (response.status === 201) {
                    alert('form submitted successfully');
                    navigate('/tasklist');
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                alert('Failed to submit task');
            }
        },
    })

    return (
        <div>
            <Header />
            <Sidebar/>
            <div className="container mt-5" >
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Task Form</h3>
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
                            <label htmlFor="description" className="form-label">description</label>
                            <input
                                type="description"
                                id="description"
                                name="description"
                                className={`form-control ${formik.errors.description && formik.touched.description ? 'is-invalid' : ''}`}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <div className="invalid-feedback">{formik.errors.description}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                className={`form-control ${formik.errors.dueDate && formik.touched.dueDate ? 'is-invalid' : ''}`}
                                value={formik.values.dueDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.dueDate && formik.touched.dueDate && (
                                <div className="invalid-feedback">{formik.errors.dueDate}</div>
                            )}
                        </div>

                        

                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select
                                id="category"
                                name="category"
                                className={`form-control ${formik.errors.category && formik.touched.category ? 'is-invalid' : ''
                                    }`}
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            >
                                <option value="">Select a Category</option>
                                <option value="Work">Work</option>
                                <option value="Personal">Personal</option>
                                <option value="Home">Home</option>
                                <option value="Health">Health</option>
                            </select>
                            {formik.errors.category && formik.touched.category && (
                                <div className="invalid-feedback">{formik.errors.category}</div>
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

export default TaskForm