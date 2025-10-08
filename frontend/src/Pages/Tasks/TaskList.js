import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../Header/Header';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!token) {
          console.error('no authenticate.please log in.');
          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await axios.get('http://localhost:3001/task/get', config)

        if (Array.isArray(data) && data.length > 0) {
          setTasks(data);
        } else {
          setTasks([]);
        }
      } catch (error) {
        console.error('Error fetching task:', error);
        setTasks([]);
      }
    };
    fetchTasks();
  }, [token]);

  const handleDelete = async (id) => {
    console.log(`Deleting task with ID: ${id}`);
    try {
      if (!token) {
        console.error('not authentiocated . please log in ');
        return;
      }

      const response = await fetch(`http://localhost:3001/task/dlt/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });


    } catch (error) {
      console.error("Error deleting task:", error);
    }

  };

  return (
    <div >
      <Header />
      {/* <Sidebar/> */}

      <div className="users-list card shadow p-3">

        <h3 className="mb-4">Tasks List</h3>

        <div className="table-responsive">

          <table className="table table-striped table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (

                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.category}</td>
                    <button className="btn btn-success btn-sm me-2"
                     >Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(task.id)}>
                      Delete
                    </button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No tasks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TaskList