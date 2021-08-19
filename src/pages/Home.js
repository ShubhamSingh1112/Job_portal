import React, { Component } from 'react';
import '../App.css';

import { Nav } from '../components/Nav';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Nav/>
                <div className="header">
                    <div className="row">
                        <div className="column-50">
                            <div>
                                <h1 className="header-text">Welcome to<br />
                                    My<span className="text-primary">Jobs</span></h1>
                                <button className="btn get-started">Get Started</button>
                            </div>
                        </div>
                        <div className="column-50">
                            <div className="landing-img">
                                <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="img" className="landing-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-us">
                    <div className="container">
                        <div className="p-10">
                            <p className="p-10"><b>Why Us</b></p>

                            <div className="d-flex">
                                <div className="card">
                                    <h2>Get More Visibility</h2>
                                    <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                </div>
                                <div className="card">
                                    <h2>Get More Visibility</h2>
                                    <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                </div>
                                <div className="card">
                                    <h2>Get More Visibility</h2>
                                    <p>lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
