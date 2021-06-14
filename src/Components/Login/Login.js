import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                console.log(user)
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-5 pt-5">
                <h1>Please Click The Button To Login ...!!!!</h1>
                <button onClick={handleGoogleSignIn} className="btn btn-success btn-lg mt-1"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
            </div>
        </div>
    );
};

export default Login;