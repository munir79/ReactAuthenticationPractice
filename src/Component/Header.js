import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    return (
        <div>
            <Link to='/login'> Log in </Link>
            <Link to='/registar'> Registar </Link>
            <p> { <span>wellcome {user?.email} </span> } </p>
            <button onClick={handleLogOut} > SignOut</button>
            
        </div>
    );
};

export default Header;