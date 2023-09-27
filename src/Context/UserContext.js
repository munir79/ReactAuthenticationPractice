import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../Firebase/firebase.init';
 export const AuthContext=createContext();


const auth =getAuth(app);
const UserContext = ({children}) => { 
    
    const user={displayName:'munir'}
    const createUSer=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);

    }
    const AuthInfo={user,createUSer};
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;