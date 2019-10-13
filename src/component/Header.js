import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-center">
                    <h1 className="display-5">User management system</h1>
                    <hr className="my-2" />
                    <p className="lead"> - F.E by ReactJS - </p>
                </div>
            </div>
        );
    }
}