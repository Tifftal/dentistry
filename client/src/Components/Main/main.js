import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and Save Books of Interest</p>
                <hr className="my-4" />
                <p>Powered by Google Books API</p>
                <a className="btn btn-primary btn-lg" href="/search" role="button">Search</a>
            </div>
        </div>
    );
}

export default Main;