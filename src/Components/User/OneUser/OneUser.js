import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class OneUser extends Component {
    static propTypes = {
        prop: PropTypes
    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user
        return (
            <div>
                <p>User</p>
            </div>
        )
    }
}
