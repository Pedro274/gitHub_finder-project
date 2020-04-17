import React, {Component, Fragment} from 'react';
import './App.scss';
import Navbar from '../Components/Layout/Navbar/Navbar';
import User from '../Components/User/User';
import axios from 'axios';
import Search from '../Components/User/Search/Search';
import Alert from '../Components/Layout/Alert/Alert';
import About from '../Components/Pages/About/About';
import OneUser from '../Components/User/OneUser/OneUser';
import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null
    }

    searchUsers = async(text) => {
        this.setState({loading: true})
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({users: response.data.items, loading: false})
    }

    getUser = async (username) => {
        this.setState({loading: true})
        const response = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({user: response.data, loading: false})
    }


    setAlert = (message, type) => {
        this.setState({alert: {msg: message, type: type}})
        setTimeout(()=> {this.setState({alert: null})},5000 )
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path="/" render={(props) => {
                                return (
                                <Fragment>
                                    <Search
                                        searchUsers={(text) => this.searchUsers(text)}
                                        clear={() => this.setState({users:[]})}
                                        showClear={this.state.users.length > 0 ? true : false}
                                        setAlert={(message, type) => this.setAlert(message, type)}/>
                                    <User loading={this.state.loading} users={this.state.users}/>
                                </Fragment>)
                            }}/>
                            <Route exact path='/about' component={About} />
                            <Route exact path='/user/:login' render={props => {
                                return <OneUser 
                                    {...props} 
                                    getUser={(username) => this.getUser(username)}
                                    user={this.state.user}
                                    loading={this.state.loading}/>
                                    
                            }} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
