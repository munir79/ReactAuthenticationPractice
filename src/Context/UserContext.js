import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase/firebase.init';
 export const AuthContext=createContext();


const auth =getAuth(app);
const UserContext = ({children}) => { 
    const [user,setUser]=useState({displayName:'munir'});
    useEffect( ()=>{
        const unSubsCribe=onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer);
            console.log(currentUSer);
        })
        return()=>{
            unSubsCribe();
        }
    },[])
    
    // const user={displayName:'munir'}
    const createUSer=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);

    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const AuthInfo={user,createUSer,signIn};
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;