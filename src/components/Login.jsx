import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';

function Login() {

    const signIn =() => {

        auth.signInWithPopup(provider).then(result =>
            console.log(result)).catch((error)=> alert (error.message));

    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png"
                alt=""
                />

                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;