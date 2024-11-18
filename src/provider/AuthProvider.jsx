/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    const handleRegister = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider);
    }

    const handleSignOut = () => {
        setLoding(true)
       return signOut(auth)
    }

    const manageProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleSignOut,
        handleGoogle,
        manageProfile,
        user, 
        setUser,
        loding
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoding(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;