import React, { Fragment } from 'react';
import './style.css';
import CalendarLinkItem from 'App/Client/Features/Calendar/Components/CalendarLinkItem';
import Caret from 'App/Client/Common/Icons/Caret';

import optionalLooseDate from 'App/Client/Common/PropTypes/optionalLooseDate';

/**
 *  @prop selectedDate     (Optional) The date that should be highlighted
 */
class VerticalDateNavigatorComponent extends React.Component {
    state = {
        displayDateSet: [],
        referenceDate: new Date()
    }

    componentDidMount() {
        this.refreshDisplayedDateSet();
    }

    triggerOnDateClicked(date) {
        if (this.props.onDateClicked) {
            this.props.onDateClicked(date);
        }
    }

    triggerOnDatesDisplayedChanged(datesDisplayed) {
        if (this.props.onDatesDisplayedChanged) {
            this.props.onDatesDisplayedChanged(datesDisplayed);
        }
    }

    refreshDisplayedDateSet() {
        const { selectedDate } = this.props;
        const referenceDate = selectedDate ? new Date(selectedDate) : new Date();

        this.setDisplayedDateSet(referenceDate);
    }

    navigate(direction) {
        let referenceDate = new Date(this.state.referenceDate);
        const addend = direction === 'up' ? -1 : 1;

        referenceDate.setDate(referenceDate.getDate() + addend);
        this.setDisplayedDateSet(referenceDate);
    }

    setDisplayedDateSet(referenceDate) {
        const displayDateSet = this.generateWeekDatesBasedOnDate(referenceDate);
        this.setState({ referenceDate, displayDateSet });

        this.triggerOnDatesDisplayedChanged(displayDateSet);
    }

    generateWeekDatesBasedOnDate(referenceDate) {
        let weekDayDateSet = [];

        //  -3 = let's start 3 days before today
        for (let counter = -3; counter <= 3; counter++) {
            const date = new Date(referenceDate);
            date.setDate(referenceDate.getDate() + counter);
            weekDayDateSet.push(date);
        }

        return weekDayDateSet;
    }

    render() {
        const { displayDateSet } = this.state;
        const { selectedDate, tasksSummary } = this.props;

        return (
            <Fragment>
                <Navigator direction="up" onClick={() => this.navigate("up")} />
                <ul className="vertical-date-navigator">
                    {displayDateSet && displayDateSet.map(date => 
                        <CalendarLinkItemListItem 
                            selectedDate={selectedDate} 
                            date={date} 
                            tasksSummary={tasksSummary} />)}
                </ul>
                <Navigator direction="down" onClick={() => this.navigate("down")} />
            </Fragment>
        );
    }
}

const Navigator = ({ direction, onClick }) => (
    <button className="navigation-button" onClick={onClick} >
        <Caret direction={direction} />
    </button>
);

const CalendarLinkItemListItem = ({ selectedDate, date, tasksSummary }) => {
    const taskSummary = tasksSummary.find(ts => testDateMatch(ts.date, date));    

    if (taskSummary) {
        const {taskMessage, taskHighlight} = makeTaskSummaryDisplayable(taskSummary);
        return (
            <li key={date.toString()} onClick={() => this.triggerOnDateClicked(date)} >
                <CalendarLinkItem
                    date={date}
                    taskMessage={taskMessage}
                    taskHighlight={taskHighlight}
                    isActive={testDateMatch(selectedDate, date)}
                />
            </li>
        );
    } else {
        return (
            <li key={date.toString()} onClick={() => this.triggerOnDateClicked(date)} >
                <CalendarLinkItem
                    date={date}
                    isActive={testDateMatch(selectedDate, date)}
                />
            </li>
        );
    }
    
};

const makeTaskSummaryDisplayable = taskSummary => {
    const { taskCount, doneTaskCount } = taskSummary;
    const tasksRemaining = taskCount - doneTaskCount;
    let taskMessage, taskHighlight = 'info';

    if (taskCount <= 0) {
        taskMessage = 'No Tasks';
    } else if (tasksRemaining > 0) {
        taskMessage = `${tasksRemaining} Tasks Open`;
        taskHighlight = 'primary';
    } else if (tasksRemaining <= 0) {
        taskMessage = "All Tasks Done";
    } else {
        //  TODO: throw exception here, for now let's log
        console.error("Unable to determine task message", taskSummary);
    }

    return { taskMessage, taskHighlight };
};

const testDateMatch = (date1, date2) => {
    if (!(date1 && date2)) {
        return false;
    }

    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    return date1Obj.getFullYear() === date2Obj.getFullYear()
        && date1Obj.getDate() === date2Obj.getDate()
        && date1Obj.getMonth() === date2Obj.getMonth();
};

VerticalDateNavigatorComponent.defaultProps = {
    tasksSummary: []
};

VerticalDateNavigatorComponent.propTypes = {
    selectedDate: optionalLooseDate
};

export default VerticalDateNavigatorComponent;