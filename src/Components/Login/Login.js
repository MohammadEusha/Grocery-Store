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
        <div className="review">
            <Navbar></Navbar>
            <div style={{ paddingTop: "100px" }} className="text-center">
                <div>
                    <h1 className="text-light  px-5 mx-5">Welcome To Grocery Store.Please Sign In With Your Google Account To See Your Ordered Foods And To Confirm It...!!!!</h1>
                </div>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_AXoQyR.json"
                    background="transparent"
                    speed="1"
                    style={{ height: "600px" }}
                    loop
                    autoplay></lottie-player>
                <div className="d-grid text-center container px-5 ">
                    <button onClick={handleGoogleSignIn} className="btn btn-danger btn-block btn-lg mt-1 mx-5"><FontAwesomeIcon icon={faUserPlus} /> Sign In With Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;