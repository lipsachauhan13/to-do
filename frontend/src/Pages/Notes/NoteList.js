import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
// import Sidebar from '../Sidebar/Sidebar';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });


  const token = localStorage.getItem('token');
  // console.log('token', token)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        if (!token) {
          console.error('No authentication. Please log in.');

          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await axios.get('http://localhost:3001/notes/get', config);
        // console.log(' data', data);

        if (Array.isArray(data) && data.length > 0) {
          setNotes(data);
        } else {
          setNotes([]);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
        setNotes([]);
      }
    };
    fetchNotes();
  }, [token]);



  const handleDelete = async (id) => {
    console.log(`Deleting notes with ID: ${id}`);
    try {
      if (!token) {
        console.error('not authentiocated . please log in ');
        return;
      }

      const response = await fetch(`http://localhost:3001/notes/dlt/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });


    } catch (error) {
      console.error("Error deleting notes:", error);
    }

  };

  return (
    <div >
      <Header />
      {/* <Sidebar/> */}

      <div className="users-list card shadow p-3">

        <h3 className="mb-4">Notes List</h3>

        <div className="table-responsive">

          <table className="table table-striped table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.length > 0 ? (
                notes.map((note) => (

                  <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.title}</td>
                    <td>{note.content}</td>
                    
                    <button className="btn btn-success btn-sm me-2" 
                    >Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(note.id)}>
                      Delete
                    </button>
                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">No notes found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoteList;