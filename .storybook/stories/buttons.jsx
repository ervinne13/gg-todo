import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'App/Client/Common/Components/Button';
import FlatButton from 'App/Client/Common/Components/FlatButton';
import GoogleLoginButton from 'App/Client/Features/Landing/Components/GoogleLoginButton';

storiesOf('Round Corner Button', module)
    .add('bordered with plain text', () => (
        <Button fill="border">Hi I'm Bordered Button</Button>
    ))
    .add('bordered size = large', () => (
        <Button fill="border" size="large">Hi I'm Bordered Button</Button>
    ))
    .add('bordered with on click', () => (
        <Button fill="border" onClick={() => alert('do something here')}>
            Click Me!
        </Button>
    ))
    .add('google login', () => (
        <GoogleLoginButton size="large" />
    ), {
        info: {
            text: "Try resizing the container, this button's width is 30% of the parent"
        }
    })
    .add('primary button', () => (
        <Button fill="background" size="large" >Primary Filled Button</Button>
    ))
    .add('default fill', () => (
        <Button size="large" >Button's Fill Defaults to "background"</Button>
    ))
;

storiesOf('Flat Button', module)
    .add('default/primary', () => (
        <FlatButton>Primary</FlatButton>
    ))
    .add('info', () => (
        <FlatButton type="info">Info</FlatButton>
    ))
    .add('grey', () => (
        <FlatButton type="grey">Grey</FlatButton>
    ))
    .add('danger', () => (
        <FlatButton type="danger">Danger</FlatButton>
    ))
;