import React, { Component } from 'react';
import '../App.css';

import { Nav } from '../components/Nav';

export class Changepassword extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="header">
                    <div className="card-container">
                        <div className="card">
                            <blockquote><b>Change Password</b></blockquote>
                            <hr />
                            <form className="form">
                                <label className>New Password</label>
                                <input type="email" className="form-control" placeholder="Email" required />
                                <label className>Confirm New Password</label>
                                <input type="email" className="form-control" placeholder="Email" required />
                                <button type="submit" className="get-started">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
