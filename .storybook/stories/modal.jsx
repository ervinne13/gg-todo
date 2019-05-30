import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from 'App/Client/Common/Components/Modal';

storiesOf('Modal', module)
    .add('open modal', () => (
        <Modal isOpen={true}>
            Hi, I'm a modal content
        </Modal>
    ))
    .add('closed modal', () => (
        <Modal isOpen={false}>
            Hi, I'm a modal content
        </Modal>
    ))
    .add('modal opened from parent', () => (
        <ModalTester />
    ), { info: { text: 'Check `modal.jsx` storybook file for the source code. This modal, however, cannot close by itself despite having a close button. It can only notify the parent that a close action is requested. This is because overwriting the props passed to a component is not a good practice as it will create confusion in your states in the long run. For ease of use, we can put the modal\'s open state on Redux.' } })
    ;

class ModalTester extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    onCloseModalRequested = () => {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.openModal}>Click to open</button>
                <Modal isOpen={this.state.isOpen} onCloseModalRequested={this.onCloseModalRequested}>
                    Hi, I'm a modal content
                </Modal>
            </Fragment>
        );
    }
}