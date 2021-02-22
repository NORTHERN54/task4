import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Registration from './authorization/Registration';
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user"
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react/cjs/react.production.min";
import HomePage from "./homepage/HomePage.jsx";
import {getUsers} from "../actions/userList";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className='wrap'>
                    {!isAuth ?
                        <Switch>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            <Redirect to="/login"/>
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Redirect to="/"/>
                        </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
