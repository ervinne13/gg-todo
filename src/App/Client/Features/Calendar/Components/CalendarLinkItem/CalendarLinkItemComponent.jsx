import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './style.css';

import looseDate from 'App/Client/Common/PropTypes/looseDate';

const CalendarLinkItemComponent = ({ taskMessage, taskHighlight, date, isActive }) => {
    const dateObj = new Date(date);
    const dateString = moment(dateObj).format("YYYY-MM-DD");

    return (
        <Link to={ `/tasks/${dateString}` }>
            <div className={`calendar-link-item ${isActive ? "-is-active" : ""}`}>
                <div className="calendar-link-item-content">
                    <DayOfWeek date={dateObj} />
                    <TaskStatus highlight={taskHighlight}>{taskMessage}</TaskStatus>
                </div>
                <DayOfMonth date={dateObj} />
            </div>
        </Link>
    );
};

const DayOfWeek = ({ date }) => {
    return (
        <span className="day-of-week">
            <Moment format="dddd">{date}</Moment>
        </span>
    );
};

const TaskStatus = ({ children, highlight }) => {
    return (
        <span className={`task -${highlight}`}>{children}</span>
    );
};

const DayOfMonth = ({ date }) => {
    /**
     * TODO: Check if this should be moved to domain later
     */
    const getOrdinal = (number) => {
        if (number > 3 && number < 21) return 'th';
        switch (number % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const dateOfMonth = date.getDate();
    const displayText = `${dateOfMonth}${getOrdinal(dateOfMonth)}`;

    return (
        <span className="day-of-month">{displayText}</span>
    );
}

CalendarLinkItemComponent.defaultProps = {
    taskHighlight: 'info',
    isActive: false
};

CalendarLinkItemComponent.propTypes = {
    taskMessage: PropTypes.node,
    taskHighlight: PropTypes.oneOf(['primary', 'info']),
    date: looseDate
};

export default CalendarLinkItemComponent;