import React from "react";

import './Requests.css';


export default class Header extends React.Component {

    render() {
    return (
        <div id = "requests">
            <h3>Want to compare other words?</h3>
            <button type="button" id="request">Make a request</button>
        </div>
    )
    }
};

