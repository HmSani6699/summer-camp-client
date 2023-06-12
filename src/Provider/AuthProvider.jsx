import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase";

 export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //----------------------//
    // creat a new user //
    //----------------------//
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //--------------------//
    // Sign in user //
    //--------------------//
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //--------------------//
    // Log out user //
    //--------------------//
    const updateUserProfule = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }


    //--------------------//
    // GOOGLE LOG IN USER //
    //--------------------//
    const googlePrivder = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googlePrivder)
    }


    //--------------------//
    // Log out user //
    //--------------------//
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        creatUser,
        logInUser,
        updateUserProfule,
        googleLogin,
        logOutUser
    }


    useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        });

       return ()=>{
        return unsubscribe()
       }

    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;