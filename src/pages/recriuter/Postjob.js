import React, { Component } from 'react';
import '../../App.css';

import { Navloggedin } from '../../components/Navloggedin';

export class Postjob extends Component {
    render() {
        return (
            <div>
                <Navloggedin />
                <div className="header">
                    <div className="card-container">
                        <div className="card">
                            <blockquote><b>Post Jobs</b></blockquote>
                            <hr />
                            <form className="form">
                                <label className="title">Job Title</label>
                                <input type="text" className="form-control" placeholder="Enter Job Title" required />
                                <label className="description">Job Description</label>
                                <textarea className="textarea" rows="5" placeholder="Job Description"></textarea>
                                <label className="location">Location</label>
                                <input type="text" className="form-control" placeholder="Enter Location" required />
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
