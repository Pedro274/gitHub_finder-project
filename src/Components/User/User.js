import React  from 'react';
import UserItem from './UserItem/UserItem';
import Spinner, {} from '../Layout/Spinner/Spinner';
import PropTypes from 'prop-types'


const User = ({loading, users}) =>  {

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map( user => {
                    return (
                        <div key={user.id}>
                            <UserItem userInfo={user}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

User.prototype = {
    uses: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
