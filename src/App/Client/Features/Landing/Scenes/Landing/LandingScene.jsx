import React from 'react';
import { ReactComponent as Logo } from './bus-tie-orange.svg';
import GoogleLoginButton from 'App/Client/Features/Authentication/Components/GoogleLoginButton';
import './style.css';

const LandingScene = ({ signInWithGoogle }) => (
    <div className="landing-scene">
        <Logo />
        <h1>To Do Tasks by Ground Gurus</h1>
        <GoogleLoginButton onClick={ signInWithGoogle }/>
    </div>
);

export default LandingScene;