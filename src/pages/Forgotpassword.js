import React, { Component } from 'react';
import '../App.css';

import { Nav } from '../components/Nav';

export class Forgotpassword extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="header">
                    <div className="card-container">
                        <div className="card">
                            <blockquote><b>Forgot Password</b></blockquote>
                            <hr />
                            <form className="form">
                                <label className>Email</label>
                                <input type="email" className="form-control" placeholder="Email" required />
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
