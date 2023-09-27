import React, { createContext } from 'react';
const AuthContext=createContext();


const UserContext = ({children}) => {
    const AuthInfo={};
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>

            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;