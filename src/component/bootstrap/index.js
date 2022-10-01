import React from 'react';

const BootstrapComponent = () => {
    return (
        <React.Fragment>
            <div>
                <h3>Alert</h3>
                <div className="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                    This is a secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                    This is a info alert—check it out!
                </div>
                <div className="alert alert-light" role="alert">
                    This is a light alert—check it out!
                </div>
                <div className="alert alert-dark" role="alert">
                    This is a dark alert—check it out!
                </div>
            </div> <br /><br />

            <div>
                <h3>Drop down</h3>
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="google.com" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="google.com">Action</a>
                        <a class="dropdown-item" href="google.com">Another action</a>
                        <a class="dropdown-item" href="google.com">Something else here</a>
                    </div>
                </div>
            </div>  <br /><br />

            <div>
                <h1>modal</h1>
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1>page</h1>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="google.com">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="google.com">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="google.com">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="google.com">Disabled</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default BootstrapComponent;