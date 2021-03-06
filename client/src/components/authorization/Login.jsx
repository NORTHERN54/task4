import React, {useState} from 'react';
import './authorization.css';
import Input from "../../utils/input/Input";
import "bootstrap/dist/css/bootstrap.css";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {useEffect} from "react/cjs/react.production.min";
import {getUsers} from "../../actions/userList";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsers())
    }, [])

    return (
        <div className='authorization'>
            <div className="authorization__header">Login In</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter the email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter the password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Login In</button>
        </div>
    );
};

export default Login;