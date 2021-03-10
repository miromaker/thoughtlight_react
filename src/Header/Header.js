import React from "react";

import './Header.css';


export default class Header extends React.Component {

    render() {
    return (
        <div className="Header">
            <h1>Thoughtlight</h1>
            <button type="button" id="switch">!</button>
        </div> 
    )
    }
};

