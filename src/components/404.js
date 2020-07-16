import React, { Component } from "react";

import { Helmet } from 'react-helmet'

class PageNotFound extends Component {
    render() {
        return (
            <div className="404">
                <Helmet>
                    <title>Mikko Majamaa - Page not found</title>
                    <meta name="description" content="Page not found." />
                </Helmet>
                <h2>404</h2>
                <p>Page not found.</p>
            </div>
        );
    }
}

export default PageNotFound;
