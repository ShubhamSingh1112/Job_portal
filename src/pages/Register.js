import React, { Component } from 'react';
import '../App.css';

import { Nav } from '../components/Nav';

export class Register extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="header">
                    <div className="card-container">
                        <div className="card">
                            <blockquote><b>Register</b></blockquote>
                            <hr />
                            <p>I'm a</p>
                            <button className="btn btn-submit">Recruiter</button>
                            <button className="btn btn-primary">Candidate</button>
                            <form className="form">
                                <label className>Full Name</label>
                                <input type="email" className="form-control" placeholder="Enter your Full Name" required />
                                <label className>Email</label>
                                <input type="email" className="form-control" placeholder="Enter your Email" required />
                                <label className>Password</label>
                                <input type="password" className="form-control" placeholder="Enter your Password" required />
                                <label className>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Enter your Password" required />
                                <label className>Skills</label>
                                <input type="password" className="form-control" placeholder="Enter your Skills with separted commas" required />

                                <div className="d-flex justify-center p-10">
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
