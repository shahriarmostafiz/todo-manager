import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase';
export const AuthContext = createContext(null)
const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
    }, [])

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGoogle)
    }
    const gitLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerGit)
    }
    const updateData = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const authValue = { user, setUser, login, logout, googleLogin, register, updateData, gitLogin, loading, setLoading }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;