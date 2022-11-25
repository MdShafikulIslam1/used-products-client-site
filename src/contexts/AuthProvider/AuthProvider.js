import React, { createContext, useState, useEffect } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logoutUser = () => {
        return signOut(auth);
    }
    const updateUserName = (user) => {
        return updateProfile(auth.currentUser, user)
    }

    useEffect(() => {
        const unsubscribeUser = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser.displayName);
            setUser(currentUser);
            return () => unsubscribeUser();
        })
    }, [])

    const authInfo = {
        user,
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