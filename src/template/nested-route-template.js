import React from 'react';

import { Link } from 'react-router-dom';

const NestedRouteTemplate = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/template-1' className="nav-item nav-link">template-1 Page</Link>
                        <Link to='/template-2' className="nav-item nav-link">template-2 Page</Link>
                        <Link to='/template-3' className="nav-item nav-link">template-3 Page</Link>
                    </div>
                </div>
            </nav>

            <div>
                <h3>Nested template route is present in this page.</h3>
            </div>
        </div>
    )
};

export default NestedRouteTemplate;
