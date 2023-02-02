import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    
    //login in function 
    const signHandle  = (email, password) => {
       return createUserWithEmailAndPassword(auth , email, password)
    }
    //sign in function 
    const  loginHandle = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    };
    // sign out 
    const logout = () => {
        return signOut(auth)
    }
    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser)
            setLoading(false);
       })
        
        return () => {
            unsubscribe();
        }

    },[])
    const authinfo = {user, signHandle, loginHandle, logout, loading};
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;