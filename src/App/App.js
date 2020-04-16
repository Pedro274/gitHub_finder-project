import React, {Component} from 'react';
import './App.scss';
import Navbar from '../Components/Layout/Navbar/Navbar';
import User from '../Components/User/User';
import axios from 'axios';
import Search from '../Components/User/Search/Search';

class App extends Component {
    state = {
        users: [],
        loading: false
    }

    // async componentDidMount() {     this.setState({loading: true})     const res
    // = await
    // axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITH
    // UB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //    this.setState({users: res.data, loading: false}) }

    searchUsers = async(text) => {
        this.setState({loading: true})
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data.items, loading: false})
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Search
                        searchUsers=
                        {(text) => this.searchUsers(text)}
                        clear=
                        { () => this.setState({users:[]})}
                        showClear={this.state.users.length > 0 ? true : false}/>
                    <User loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
