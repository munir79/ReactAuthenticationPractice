import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../Firebase/firebase.init';
 export const AuthContext=createContext();


const auth =getAuth(app);
const UserContext = ({children}) => { 
    
    const user={displayName:'munir'}
    const AuthInfo={user};
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;