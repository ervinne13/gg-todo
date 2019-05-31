import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Modal from 'App/Client/Common/Components/Modal';
import Button from 'App/Client/Common/Components/Button';
import VerticalDateNavigator from 'App/Client/Features/Calendar/Components/VerticalDateNavigator';
import TaskList from 'App/Client/Features/Tasks/Components/TaskList';
import ConfirmDeletion from 'App/Client/Features/Tasks/Components/ConfirmDeletion';
import './style.css';

class TaskListPerDateScene extends React.Component {
    
    componentDidMount() {    
        this.triggerOnReadyToReceiveTasks();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.date !== prevProps.match.params.date) {
            this.triggerOnReadyToReceiveTasks();
        }
    }

    triggerOnReadyToReceiveTasks() {
        if (this.props.onReadyToReceiveTasks) {
            const date = this.props.match.params.date;
            this.props.onReadyToReceiveTasks(date);
        }
    }

    render() {
        const { isConfirmDeletionModalOpen } = this.props;
        const date = this.props.match.params.date;
        return (
            <Fragment>
                <Modal isOpen={isConfirmDeletionModalOpen} hideDefaultCloseButton={true}>
                    <ConfirmDeletion />
                </Modal>
                <Grid>
                    <Row>
                        <Col sm={12} md={4}>
                            <VerticalDateNavigator selectedDate={ date } />
                        </Col>
                        <Col sm={12} md={8}>
                            <div className="task-list-header">
                                <h1>Tasks</h1>
                                <Link to={ `/tasks/${date}/create` }>
                                    <Button size="large">+ Create New</Button>
                                </Link>
                            </div>
                            <TaskList />
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
           
        );
    }
}

export default TaskListPerDateScene;