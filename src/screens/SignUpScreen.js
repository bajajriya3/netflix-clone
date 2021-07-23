import React,{useRef} from 'react';
import './SignUpScreen.css';
import { auth } from '../firebase';

function SignUpScreen(){
    const emailRef = useRef(null),
    passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
        }).catch((error) => {
            alert(error.message);
        })
    },
    signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
        }).catch((error) => {
            alert(error.message);
        })
    };

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signUpScreen_text">New to Netflix? </span>
                    <span className="signUpScreen_link" onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen;