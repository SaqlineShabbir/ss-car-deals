import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged, signInWithEmailAndPassword,updateProfile } from "firebase/auth";



initializeFirebase();
const useFirebase = () =>{
    const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)
  const registerUser = (email, password,name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        
        setAuthError('')
        const newUser ={email, displayName: name}
        setUser(newUser)
        //save user to db
        saveUser(email, name)
        //update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"
        }).then(() => {
          // Profile updated!
          
        }).catch((error) => {
        
        });
        history.replace('/')
      })
      .catch((error) => {
       setAuthError(error.message)
        
      })
      .finally(() => setIsLoading(false));
 }

  // signIn user 
     const loginUser = (email, password, location, history) =>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const destination = location?.state?.from || '/'
          history.replace(destination)
          setAuthError('')
          
        })
        .catch((error) => {
          setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
     }

  // logOut user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
        
      }).catch((error) => {
        
      })
      .finally(() =>setIsLoading(false))
      setUser({})
  }
  
  //observe user state
   useEffect(()=>{
   const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
        
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return ()=>unsubscribed;
   },[])

   const saveUser = (email, displayName) => {
      const user = { email, displayName }
      fetch('https://safe-sands-44519.herokuapp.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      .then()
   }

   useEffect(()=>{
     fetch(`https://safe-sands-44519.herokuapp.com/users/${user.email}`)
     .then(res => res.json())
     .then(data =>{setAdmin(data.admin)
       
    } )
   },[user.email])

  return{
      user,
      admin,
      registerUser,
      logOut,
      loginUser,
      isLoading,
      authError,
  }
}

export default useFirebase;