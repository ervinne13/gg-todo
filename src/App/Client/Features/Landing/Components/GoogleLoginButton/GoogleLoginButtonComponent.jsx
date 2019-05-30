import React from 'react';
import Button from 'App/Client/Common/Components/Button';
import { ReactComponent as Logo } from './google-icon.svg';
import './style.css';

const GoogleLoginButton = () => (
    <Button fill="border" size="large" className="google-auth-btn" onClick={() => handleGoogleAuthentication()}>
        Sign In with Google <Logo />
    </Button>
);

const handleGoogleAuthentication = () => {
    console.log('Pending Feature :)');
};

export default GoogleLoginButton;