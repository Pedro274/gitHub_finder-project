import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {

    return (
        <div className="navbar bg-primary">
            <h3>
                <i className={icon}/> {title}
            </h3>
        </div>
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
