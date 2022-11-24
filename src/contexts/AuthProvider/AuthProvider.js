import React, { createContext, useState, useEffect } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logoutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribeUser = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            return () => unsubscribeUser();
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;