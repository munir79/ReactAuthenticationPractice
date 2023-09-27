import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.init';
 export const AuthContext=createContext();


const auth =getAuth(app);
const UserContext = ({children}) => { 
    const [user,setUser]=useState({displayName:'munir'});
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const UnsubCribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return()=>{
            UnsubCribe();
        }
    } ,[]) 
    
    // const user={displayName:'munir'}
    const createUSer=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);

    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const AuthInfo={user,createUSer,signIn,logOut};
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;