import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export class Navloggedin extends Component {
    render() {
        return (
            <nav className="nav">
                        <div className="d-flex">
                            <h4>My<span className="text-primary">Jobs</span></h4>
                        </div>
                        <div className="d-flex">
                            <NavLink className="px-10 link" to="Postjob">
                            <p className="text-white">Post Job</p>
                            </NavLink>

                            <NavLink className="px-10 link" to="Postedjobs">
                            <p className="text-white">Posted Jobs</p>
                            </NavLink>
                        </div>
                </nav>
        )
    }
}
