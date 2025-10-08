import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Header() {


    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/signup'>Sign Up</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
     
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <Sidebar /> */}
        </>
    );
}

export default Header;
