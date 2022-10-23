import React from 'react';

import { Link } from 'react-router-dom';

const NavList = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/profile' className="nav-item nav-link">Profile Page</Link>
                        <Link to='/post' className="nav-item nav-link">Post Page</Link>
                        <Link to='/image-list' className="nav-item nav-link">Image List</Link>
                        
                        <Link to='/nested-route' className="nav-item nav-link">Nested Route</Link>

                        <Link to='/migration' className="nav-item nav-link">Migration</Link>

                        <Link to='' className="nav-item nav-link"></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavList;