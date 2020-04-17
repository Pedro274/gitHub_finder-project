import React from 'react';
import './UserItem.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({userInfo: {login, avatar_url}} ) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}} />
        <h3>{login}</h3>
        <div>
            <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>More</Link>
        </div>
        </div>
    )
}

UserItem.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserItem