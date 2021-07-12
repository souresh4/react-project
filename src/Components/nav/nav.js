import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export class Nav extends Component {

    // when this components is called this render function is called
    render() {
        return (
            <nav>
                <ul className="navlinks">
                    <Link to="/login">
                        <li> login </li>
                    </Link>
                    <Link to="/">
                        <li> Home </li>
                    </Link>
                    <Link to="/department">
                        <li> Department </li>
                    </Link>
                </ul>
            </nav>
        )
    }
}