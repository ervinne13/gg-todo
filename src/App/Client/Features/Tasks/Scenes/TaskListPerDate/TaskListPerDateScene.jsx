import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Button from 'App/Client/Common/Components/Button';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import TaskList from 'App/Client/Features/Tasks/Components/TaskList';
import './style.css';

class TaskListPerDateScene extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12} md={4}>
                        <VerticalDateNavigator selectedDate={new Date()} />
                    </Col>
                    <Col sm={12} md={8}>
                        <div class="task-list-header">
                            <h1>Tasks</h1>
                            <Link to="/tasks/create">
                                <Button size="large">+ Create New</Button>
                            </Link>
                        </div>
                        <TaskList tasks={demoData} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const demoData = [
    { text: 'Meeting with client @ 10 AM', status: 'done' },
    { text: 'Dentist appointment @ 2 PM', status: 'open' },
    { text: 'Ask about PC problems before going home', status: 'open' }
];

export default TaskListPerDateScene;