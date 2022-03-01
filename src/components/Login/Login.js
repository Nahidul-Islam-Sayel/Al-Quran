import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { Context } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const provider = new firebase.auth.GoogleAuthProvider();
const Login = () => {
  const[loginuser,setLoginuser]= useContext(Context);
 const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  if(firebase.apps.length===0){
    const app = initializeApp(firebaseConfig);
  }
    
    const handlelogin=()=>{
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  
    const  { displayName , email } = result.user;
    const my= {name: displayName, email: email};
    setLoginuser(my);
    history.replace(from);
   
  
  }).catch((error) => {
 
    var errorCode = error.code;
    var errorMessage = error.message;
  
    var email = error.email;

    var credential = error.credential;
 
  });
    }
   
    return (
        <div>
            <button onClick={handlelogin}>Sing In With Google</button>
        </div>
    );
};

export default Login;