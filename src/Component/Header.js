import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <Link to='/login'> Log in </Link>
            <Link to='/registar'> Registar </Link>
            <p> { <span>wellcome {user?.email} </span> } </p>
            
        </div>
    );
};

export default Header;