import React from 'react';
import Button from 'App/Client/Common/Components/Button';
import { ReactComponent as Logo } from './google-icon.svg';
import './style.css';

const GoogleLoginButton = ({ onClick }) => (
    <Button 
        onClick={onClick}
        fill="border" 
        size="large" 
        className="google-auth-btn" >
        Sign In with Google <Logo />
    </Button>
);

export default GoogleLoginButton;