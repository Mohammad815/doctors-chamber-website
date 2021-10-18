import React, { useEffect, useState } from 'react';
import initializeAuth from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error,setError] = useState('')
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const SignWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
            
                console.log(result.user);
                setUser(result.user)

            })
            .catch((error) => {
              
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            
                })
  }

  const logout = () => {
            const auth = getAuth();
            signOut(auth)
            .then(() => {
             setUser({})
            })
            .catch((error) => {
                console.log(error)
              });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
      });
},[])
  return {
      user,
      error,
   SignWithGoogle,
   logout
}
};

export default useFirebase;