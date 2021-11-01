import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="bg">
            <h2 className="fs-bold">PLease! <span className="text-warning fs-bold"> Log in</span></h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;