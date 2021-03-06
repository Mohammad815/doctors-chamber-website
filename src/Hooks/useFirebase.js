import { useEffect, useState } from 'react';
import initializeAuth from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error,setError] = useState('')
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const SignWithGoogle = () => {
        return signInWithPopup(auth, provider);
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

const handleUserRegister = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
};
const handleUserLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
};

  return {
      user,
      error,
   SignWithGoogle,
   logout,
   handleUserRegister,handleUserLogin
}
};

export default useFirebase;