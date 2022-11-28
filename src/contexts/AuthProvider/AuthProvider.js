import React, { createContext, useState, useEffect } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const loginWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logoutUser = () => {
        setIsLoading(true)
        return signOut(auth);
    }
    const updateUserName = (user) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, user)
    }

    useEffect(() => {
        const unsubscribeUser = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false)
            return () => unsubscribeUser();
        })
    }, [])

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        updateUserName,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;