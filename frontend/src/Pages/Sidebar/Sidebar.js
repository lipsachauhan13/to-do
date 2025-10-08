import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className="d-flex flex-column bg-dark text-white" style={{ width: '250px', position: 'fixed', height: '100vh', zIndex: 9999, }} >

             <ul className="nav flex-column p-3 ">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/noteform">Note Form</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/notelist">Note List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/taskform">Task Form</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/tasklist">Task List</a>
                </li>
            </ul>

            <div className='p-3 '>
                <button className='btn btn-outline-danger w-100' onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    );
}

export default Sidebar;
