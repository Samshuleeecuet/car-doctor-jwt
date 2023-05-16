import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [userInfo,setUserInfo] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password)=> {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider();
    const loginwithgoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    //console.log(userInfo)
    const updateprofile = (name)=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            console.log('Profile updated successfully.')
          }).catch((error) => {
          });
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //console.log('auth state change',currentUser);
            setUserInfo(currentUser);
            setLoading(false)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                }
                fetch(' https://car-doctor-server-weld-omega.vercel.app/jwt',{
            method: 'POST',
            headers: {
              'content-type' :'application/json'
            },
            body: JSON.stringify(loggedUser)
          })
          .then(res=> res.json())
          .then(data=>{
            console.log('jwt response', data);
            localStorage.setItem('car-access-token',data.token)
          })
            }
            else{
                localStorage.removeItem('car-access-token')
            }
        })

        return ()=>{
            unsubscribe();
        }
     },[])

    const AuthInfo = {
        userInfo,
        createUser,
        loginUser,
        loginwithgoogle,
        logOut,
        updateprofile,
        loading,
        setLoading

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;