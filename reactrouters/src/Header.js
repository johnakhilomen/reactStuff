import React, { Component } from "react";
import {NavLink, useHistory} from "react-router-dom";
import "./Header.css";

export default function Header() {
    const history = useHistory();
        return (
            <header className="headSection">
                <NavLink to='/' className="link" style={{ textDecoration: "none" }}>
                    <h4>React routers</h4>
                </NavLink>
                <NavLink to='/about' className="link" style={{ textDecoration: "none" }}>
                    <h4>About</h4>
                </NavLink> 
                <button type="button" onClick={() => history.goBack()}>
                Go Back
                </button>
                <button type="button" onClick={() => history.goForward()}>
                Go Forward
                </button>
            </header>
          );
}
 