import React, { Component } from 'react';

import '../../App.css';

import { Applicants } from './Applicants';

import { Navloggedin } from '../../components/Navloggedin';



export class Postedjobs extends Component {
    render() {
        return (
            <div>
                <Navloggedin />
                <div className="container">
                <Applicants />
                    <div className="p-10">
                        <p className="p-10"><b>All Posted Jobs</b></p>
                        <div className="d-flex">
                            <div className="card">
                                <h2>Frontend Developer</h2>
                                <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                <div className="d-flex">
                                    <h4>Location</h4>
                                    <button className="btn btn-secondary">View Applications</button>
                                </div>
                            </div>
                            <div className="card">
                                <h2>Frontend Developer</h2>
                                <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                <div className="d-flex">
                                    <h4>Location</h4>
                                    <button className="btn btn-secondary">View Applications</button>
                                </div>
                            </div>
                            <div className="card">
                                <h2>Frontend Developer</h2>
                                <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                <div className="d-flex">
                                    <h4>Location</h4>
                                    <button className="btn btn-secondary">View Applications</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
