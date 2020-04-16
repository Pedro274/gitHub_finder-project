import React from 'react';
import './UserItem.scss';
import PropTypes from 'prop-types'




const UserItem = ({userInfo: {login, avatar_url, html_url}} ) => {

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width: '60px'}} />
        <h3>{login}</h3>
        <div>
            <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
        </div>
        </div>
    )
}

UserItem.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserItem