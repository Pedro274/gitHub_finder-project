import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        clear: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    submit = (event) => {
        event.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    };

    clearButton = () => {
        return this.props.showClear && ( 
            <button className="btn btn-light btn-block" onClick={this.props.clear}>Clear</button>
            )
    }


    render() {
        return (
            <div>
                <form className='Submit' onSubmit={this.submit}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={event => this.handleChange(event)}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.clearButton()}
            </div>
        )
    }
}

export default Search
