import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from 'App/Client/Common/Components/Modal';
import Task from 'App/Client/Features/Tasks/Components/Task';
import TaskList from 'App/Client/Features/Tasks/Components/TaskList';
import TaskForm from 'App/Client/Features/Tasks/Forms/Task';
import ConfirmDeletion from 'App/Client/Features/Tasks/Components/ConfirmDeletion';

storiesOf('Tasks', module)
    .addDecorator(storyFn => <div style={{ width: '600px', borderBottom: '1px solid #7E7E7E', borderTop: '1px solid #7E7E7E', margin: 'auto' }} children={storyFn()} />)
    .add('default/open task', () => (
        <Task task={{ text: 'Dentist appointment @ 2PM', status: 'open' }} />
    ))
    .add('one task', () => (
        <Task task={{ text: 'Dentist appointment @ 2PM', status: 'done' }} />
    ))
    .add('on toggle open', () => (
        <Task onToggle={task => alert(`Toggle task status: ${task.status}`)} task={{ text: 'Dentist appointment @ 2PM', status: 'open' }} />
    ))
    .add('on toggle done', () => (
        <Task onToggle={task => alert(`Toggle task status: ${task.status}`)} task={{ text: 'Dentist appointment @ 2PM', status: 'done' }} />
    ))
    .add('on remove', () => (
        <Task onRemove={task => alert(`Will delete task: ${task.text}`)} task={{ text: 'Dentist appointment @ 2PM', status: 'open' }} />
    ))
    ;

storiesOf('Task List', module)
    .add('mixed status', () => (
        <TaskList tasks={demoTasks} />
    ))
    ;

const demoTasks = [
    { text: 'Meeting with client @ 10 AM', status: 'done' },
    { text: 'Dentist appointment @ 2 PM', status: 'open' },
    { text: 'Ask about PC problems before going home', status: 'open' },
];

storiesOf('Confirm Deletion', module)
    .addDecorator(storyFn => <div style={{ width: '600px', margin: 'auto' }} children={storyFn()} />)
    .add('without modal', () => (
        <ConfirmDeletion />
    ))
    .add('inside modal', () => (
        <Modal isOpen>
            <ConfirmDeletion
                onConfirm={() => console.log('confirmed deletion')}
                onCancel={() => console.log('canceled deletion')}
            />
        </Modal>
    ))
    ;

storiesOf('Task Form', module)
    .addDecorator(storyFn => <div style={{ width: '600px', marginLeft: '30px' }} children={storyFn()} />)
    .add('new task', () => (
        <TaskForm />
    ))
    .add('updating existing task', () => (
        <TaskForm task={{ id: 'random-gibberish-as-id', text: 'sample task', status: 'open' }} />
    ))
    .add('with events', () => (
        <TaskForm onSaveTask={task => console.log(task)} />
    ), { info: { text: 'Check console for submitted task' } })
    ;