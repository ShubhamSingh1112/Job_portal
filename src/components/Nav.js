import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                        <div className="d-flex">
                            <h4>My<span className="text-primary">Jobs</span></h4>
                        </div>
                        <div className="d-flex">
                            <NavLink to="Login">
                            <button className="btn btn-login">Login/Register</button>
                            </NavLink>
                        </div>
                </nav>
        )
    }
}
