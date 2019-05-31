import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import TaskForm from 'App/Client/Features/Tasks/Forms/Task';

class TaskFormPerDateScene extends React.Component {
    render() {
        const date = this.props.match.params.date;
        return (
            <Grid>
                <Row>
                    <Col sm={12} md={4}>
                        <VerticalDateNavigator selectedDate={date} />
                    </Col>
                    <Col sm={12} md={8}>                        
                        <TaskForm date={ date }/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TaskFormPerDateScene;