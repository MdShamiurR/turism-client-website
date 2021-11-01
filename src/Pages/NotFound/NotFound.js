import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;