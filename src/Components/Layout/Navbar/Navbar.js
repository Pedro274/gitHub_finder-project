import React from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {

    return (
        <nav className="navbar bg-primary">
            <h3>
                <i className={icon}/> {title}
            </h3>
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink exact to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
